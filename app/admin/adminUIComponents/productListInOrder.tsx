'use client'

import { TProduct } from "@/app/utils/types";

const ProductListInOrder = ({ productsInOrder }: { productsInOrder: (TProduct & { qtty: number })[] }) => {

  return (
    productsInOrder?.length && productsInOrder.map((prod, idx) => (
      <li className="flex pl-4 w-[640px]" key={prod ? prod.product_name : idx}>
        <p>{idx + 1}</p>
        <p className="w-[300px] text-left pl-2">{prod ? prod.product_name : "не знайдено"}</p>
        <p className="w-[120px] text-center">{prod && prod.qtty}</p>
        <p className="w-[120px] text-right">{prod && (prod.qtty * prod.price)}</p>
      </li>
    ))
  )
}

export default ProductListInOrder;