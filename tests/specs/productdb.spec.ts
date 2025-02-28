import { test, expect } from "@playwright/test";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import { PricingPage } from "../../pages/PricingPage"; 

// Load environment variables
dotenv.config();

// Database config from .env
const dbConfig = {
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
};

test("Verify Products in Pricing List", async ({ page }) => {
  // Initialize PricingPage object
  const pricingPage = new PricingPage(page);

  // Navigate to pricing page
  await pricingPage.navigate();

  // Get product list from the webpage
  const webProducts = await pricingPage.getProducts();

  // Connect to MySQL database
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute("SELECT Product FROM PricingList");

  // Extract product names from the database
  const dbProducts = (rows as any[]).map((row) => row.Product.trim());

  // Close the database connection
  await connection.end();

  // Check if each database product exists in the web product list
  dbProducts.forEach((product) => {
    expect(webProducts).toContain(product);
  });
});
