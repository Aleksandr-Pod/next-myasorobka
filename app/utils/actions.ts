"use server"

import { sql } from "@vercel/postgres";
import { TProduct } from "./types";
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

export async function addProduct({product_name, category, price, unit = "--", discount_price = "no discount", description = "", images = [""]}: Partial<TProduct>) {
  noStore();
  try {
    const { rows: result } = await sql<TProduct>`
      INSERT INTO products (product_name, category, price, unit, discount_price, description, images)
      VALUES (${product_name}, ${category}, ${price}, ${unit}, ${discount_price}, ${description},
        ARRAY [${images.join(',')}]
      )
      RETURNING *
    `
    revalidatePath('admin/authorized/products');
    console.log("addProduct result:", result)
  } catch (error) {
    console.error({source: "addProduct error", message: error})
  }

};

export async function toggleFavourite( productName: string ) {
  noStore();

  try {
    const { rows: result } = await sql<TProduct>`
      UPDATE products
      SET favourite = NOT favourite
      WHERE name = ${productName}
      RETURNING favourite`;
    // console.log('toggle result:', result);
    revalidatePath('admin/authorized/products');
  } catch (error) {
    console.error({source: "toggleFavourite error", message: error})
  }
};

export async function deleteProduct(productName: string) {
  noStore();
  try {
    await sql<TProduct>`DELETE FROM products WHERE name = ${productName}`;
    revalidatePath('admin/authorized/products');
  } catch (error) {
    console.error({source: "fetchProduct error", message: error})
  }
};

export async function fetchProductsInOrder(orderNumber: number) {
  noStore();
  console.log('Action: fetch products in order number ...', orderNumber);

  try {
    const products = await sql<TProduct & {qtty: number}>`
      SELECT * FROM order_products
      JOIN products USING (product_name)
      WHERE order_number = ${orderNumber}
    `;
    // console.log("Result of Action:", products.rows);
    return products.rows;
  } catch (error) {
    console.error({source: "fetch products in order error", message: error})
  }
}