import { TProduct } from "@/app/utils/types";
import Image from "next/image";
import { Line } from "@/app/utils/iconComponent";

export default function ProdDescription({ product }: { product: TProduct }) {
  return (
    <>
      <Image
        src={product.images[0] || "/BlankPic.jpg"}
        alt={"product image"}
        width={216}
        height={168}
        className={"h-[168px] w-full object-cover rounded-t-3xl"}
      />
      <p className="px-2 py-1 text-center font-bold">{product.name}</p>
      <Line active />
      <p className="px-2 py-1 text-center font-basic">
        {product.price} грн / {product.unit}
      </p>

      <p className="px-2 py-1 text-center text-txt-grey font-basic">
        {product.discount_price ? product.discount_price : "_____________"}
      </p>
    </>
  )
};
