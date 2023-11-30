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
};

export async function toggleFavourite( productName: string ) {
  noStore();
  console.log({
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
  });
  
  console.log('toggle favourite product name:', productName)

  try {
    const result = await sql<TProduct>`
    UPDATE products
    SET favourite = NOT favourite
    WHERE name = ${productName}`
    console.log('toggle result:', result);
  } catch (error) {
    console.error({source: "toggleFavourite error", message: error})
  }
}