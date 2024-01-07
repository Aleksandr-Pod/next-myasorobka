import { sql } from "@vercel/postgres";
import { TProduct } from "./types";
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchProducts() {
  noStore();

  try {
    const products = await sql<TProduct>`SELECT * FROM products ORDER BY id`
    return products.rows;
  } catch (error) {
    console.error({source: "fetchProduct error", message: error})
  }
};

export async function fetchOrders() {
  noStore();
  try {
    const orders = await sql<TOrders>`SELECT * FROM orders`;
    return orders.rows;
  } catch (error) {
  console.error({source: "fetchOrders error", message: error})
  }
}

