'use client'

import { addProduct } from "@/app/utils/actions"

export default function AddProduct() {
  const product = {
    name: "chambooka",
    category: "be-e-e",
    price: 333,
    unit: undefined,
    discount_price: undefined,
    description: "something to eat",
    images: ["/products/Котлеты_куриные.jpg"]
  };
  const handleAddProduct = addProduct.bind(null, product);

  return (
    <>
      <h2>ADD product page</h2>
      <form action={handleAddProduct}>
        <button type="submit" className="w-32 bg-bg-orange px-4">
          ADD Product
        </button>
      </form>
    </>
  )
}