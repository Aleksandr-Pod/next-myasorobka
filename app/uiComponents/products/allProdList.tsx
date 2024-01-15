import { fetchProducts } from "@/app/utils/dataFetching";
import Categories from "./categories";
import ProdList from "./productList";

const AllProductList = async ({ searchParams }: {
  searchParams?: { query?: string, page?: string };
}) => {
  const products = await fetchProducts();

  const filteredProducts = products && searchParams?.query
    ? products.filter(product => product.category === searchParams.query)
    : products;

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      {products && (
        <>
          <Categories products={products} />
          <ProdList products={filteredProducts} />
        </>
      )}
    </div >
  );
};

export default AllProductList;
