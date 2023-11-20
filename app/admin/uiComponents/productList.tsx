import { fetchProducts } from "@/app/uiComponents/utils/dataFetching"

export default async function ProductList() {
  const products = await fetchProducts();
  // console.log('products:', products);

  return (
    <>
      <h3 className="text-center w-full text-txt-main-white">product list ...</h3>
      <div className="flex-row">
        {products ? (products.map(product => (
          // <ProductCard/>
          <p key={product.id} className="flex flex-row">{product.name} - {product.price}</p>
        ))) : <p>No products</p>}
      </div>

    </>
  )
};
