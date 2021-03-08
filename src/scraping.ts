import * as dotenv from "dotenv";
dotenv.config();
import puppeteer from "puppeteer";

export async function getValue(commodity: string) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto(
    `${process.env.SCRAPING_URL_INITIAL}/${commodity}${process.env.SCRAPING_URL_FINAL}`
  );

  const id = `${process.env.SCRAPING_ID}`;

  const item = await page.evaluate(
    ({ id }) => {
      if (document.getElementById(`${id}`) === null) {
        return {
          error: "Commodity not found",
        };
      }

      return {
        label: (document.querySelector("label") as HTMLElement).textContent,
        value: (document.getElementById(`${id}`) as HTMLInputElement).value,
      };
    },
    { id }
  );

  if (item.error) {
    return {
      error: "Commodity not found",
    };
  }

  let value = "value";

  if (item.label) {
    value = item.label.split(" ")[2].toLowerCase();
  }

  const data = {
    [value]: item.value,
  };

  await browser.close();
  return data;
}
