import { TProduct } from "@/app/utils/types";
import ProductCard from "./prodCard";

export default function ProdList({ products }: { products?: TProduct[] }) {
  return (
    <div className="flex flex-wrap justify-evenly gap-4 mx-auto">
      {products ? (
        products.map(product => (
          <div key={product.name}>
            <ProductCard product={product} />
          </div>
        ))) : (
        null
      )}
    </div>
  )
};
