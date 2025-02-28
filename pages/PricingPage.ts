import { Page } from "@playwright/test";

export class PricingPage {
  constructor(public page: Page) {}

  async navigate() {
    await this.page.goto(process.env.PRICING_URL as string);
  }

  async getProducts(): Promise<string[]> {
    const featureElements = await this.page.locator("td.myfeatures").all();
    return await Promise.all(featureElements.map(async (el) => (await el.innerText()).trim()));
  }
}
