"use server"

import { sql } from "@vercel/postgres";
import { TProduct } from "./types";
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';

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