import { sql } from "@vercel/postgres";
import { Product } from "./types";

export async function fetchProducts() {
  try {
    const products = await sql<Product>`SELECT * FROM products`
    return products.rows;
  } catch (error) {
    console.error({source: "fetchProduct error", message: error})
  }
} 