import { sql } from "@vercel/postgres";
import { TProduct } from "./types";
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchProducts() {
  noStore();
  try {
    const products = await sql<TProduct>`SELECT * FROM products`
    return products.rows;
  } catch (error) {
    console.error({source: "fetchProduct error", message: error})
  }
} 