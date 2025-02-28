import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
};

// Function to get products from DB
export async function getProductsFromDB(): Promise<string[]> {
  const connection = await mysql.createConnection(dbConfig);
  const [rows] = await connection.execute("SELECT Product FROM PricingList");
  await connection.end();

  // Extract and return product names as an array
  return (rows as any[]).map((row) => row.Product.trim());
}