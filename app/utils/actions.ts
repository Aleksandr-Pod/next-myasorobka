"use server"

import { sql } from "@vercel/postgres";
import { TProduct } from "./types";
import { unstable_noStore as noStore } from 'next/cache';

export async function toggleFavourite( productName: string ) {
  noStore();
  try {
    const {rows: result} = await sql<TProduct>`
      UPDATE products
      SET favourite = NOT favourite
      WHERE name = ${productName}
      RETURNING favourite`
    console.log('toggle result:', result);
  } catch (error) {
    console.error({source: "toggleFavourite error", message: error})
  }
}