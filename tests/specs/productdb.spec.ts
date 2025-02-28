import { test, expect } from "@playwright/test";
import { getProductsFromDB } from "../../utils/dbUtils"; // Import DB function
import { PricingPage } from "../../pages/PricingPage"; // Import page object

test("Verify Products in Pricing List", async ({ page }) => {
  // Initialize PricingPage object
  const pricingPage = new PricingPage(page);
  await pricingPage.navigate();

  // Get product list from the webpage
  const webProducts = await pricingPage.getProducts();

  // Get product list from the database
  const dbProducts = await getProductsFromDB();

  // Check if each database product exists in the web product list
  dbProducts.forEach((product) => {
    expect(webProducts).toContain(product);
  });
});