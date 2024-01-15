import { sql } from "@vercel/postgres";
import { TProduct, TOrders } from "./types";
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

export async function fetchOrders(archived: boolean) {
  noStore();
  // console.log("fetchOrders ...");

  try {
    const orders = await sql<TOrders>`SELECT * FROM orders WHERE archived = ${archived}`;
    // console.log("Замовлення: ", orders.rows);
    return orders.rows;

  } catch (error) {
  console.error({source: "fetchOrders error", message: error})
  }
}

export async function fetchFullOrders(archived: boolean) {
  noStore();
  console.log("fetchFullOrders ...");

  try {
    const orders = await sql<TOrders & TProduct & {qtty: number}>`
    SELECT * FROM orders
    JOIN order_products USING (order_number)
    JOIN products USING (product_name)

    WHERE orders.archived = ${archived}`;
    console.log("Замовлення з продуктами: ", orders.rows);
    return orders.rows;

  } catch (error) {
  console.error({source: "fetch full orders error", message: error})
  }
}

export async function fetchProductsInOrder(orderNumber: number) {
  noStore();
  console.log('fetch products in order: ...');

  try {
    const products = await sql<TProduct & {qtty: number}>`
      SELECT * FROM order_products
      JOIN products USING (product_name)
      WHERE order_number = ${orderNumber}
    `
    return products.rows;
  } catch (error) {
    console.error({source: "fetch products in order error", message: error})
  }
}