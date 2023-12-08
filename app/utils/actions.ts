"use server"

import { sql } from "@vercel/postgres";
import { TProduct } from "./types";
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

export async function addProduct({name, category, price, unit = "--", discount_price = "no discount", description = "", images = [""]}: Partial<TProduct>) {
  try {
    const { rows: result } = await sql<TProduct>`
      INSERT INTO products (name, category, price, unit, discount_price, description, images)
      VALUES (${name}, ${category}, ${price}, ${unit}, ${discount_price}, ${description},
        ARRAY [${images.map(img => img).join(',')}]
      )
      RETURNING *
    `
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