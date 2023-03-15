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
}

main();
