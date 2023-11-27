import { fetchProducts } from "@/app/utils/dataFetching"
import ProdCard from "@/app/uiComponents/products/prodCard";

export default async function ProductList() {
  const products = await fetchProducts();
  // console.log('products:', products);

  return (
    <>
      <div className="flex-row">
        {products ? (products.map(product => (
          <div key={product.name}>
            <ProdCard product={product} />
          </div>
          // <p key={product.id} className="flex flex-row">{product.name} - {product.price}</p>
        ))) : <p>No products</p>}
      </div>

    </>
  )
};
