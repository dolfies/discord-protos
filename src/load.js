const puppeteer = require("puppeteer");
const fs = require("fs");
const { join } = require("path");
const script = fs.readFileSync(join(__dirname, "parse.js"), "utf8");

async function main() {
    const browser = await puppeteer.launch({
        headless: true,
    });

    const page = await browser.newPage();
    await page.goto("https://discord.com/app", { waitUntil: "networkidle0" });

    const protos = await page.evaluate(`${script}; protos`);
	
    for (const [name, proto] of Object.entries(protos)) {
        fs.writeFileSync(
            join(__dirname, "..", "out", name + ".proto"),
            proto.data,
        );
    }

    await browser.close();
}

main();
