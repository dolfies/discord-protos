import puppeteer from "puppeteer";
import { writeFileSync, readFileSync } from "fs";
import { join } from "path";

const script = readFileSync(join(__dirname, "parse.js"), "utf8");

async function main() {
    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();
    await page.goto("https://discord.com/app", { waitUntil: "networkidle0" });

    const protos = await page.evaluate(`${script}; protos`);

    for (const [name, proto] of Object.entries(protos)) {
        writeFileSync(join(__dirname, "..", "discord_protos", name + ".proto"), proto.data);
    }
    await browser.close();

    // This is very cursed
    // For protoc to parse any new protos, we have to edit the script in the package.json to include the filenames
    const packageJson = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), "utf8"));
    const js = packageJson.scripts.js.split(" ").filter((x) => !x.endsWith(".proto")).join(" ");
    const py = packageJson.scripts.py.split(" ").filter((x) => !x.endsWith(".proto")).join(" ");

    packageJson.scripts.js = `${js} ${Object.keys(protos).map((x) => x + ".proto").join(" ")}`;
    packageJson.scripts.py = `${py} ${Object.keys(protos).map((x) => x + ".proto").join(" ")}`;
    writeFileSync(join(__dirname, "..", "package.json"), JSON.stringify(packageJson, null, 4));
}

main();
