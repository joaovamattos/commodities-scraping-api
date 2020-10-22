import * as dotenv from "dotenv";
dotenv.config();
import puppeteer from "puppeteer";

export async function getValue(commodity: string) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto(`${process.env.SCRAPING_URL_INITIAL}/${commodity}${process.env.SCRAPING_URL_FINAL}`);

  const id = `${process.env.SCRAPING_ID}`;
  
  const item = await page.evaluate(({ id }) => {
    return {
      value: (document.getElementById(`${id}`) as HTMLInputElement).value,
    };
  }, { id });

  await browser.close();
  return item.value;
}
