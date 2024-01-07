
import { fetchProducts } from "@/app/utils/dataFetching";
import Categories from "./categories";
import ProdList from "./productList";

const AllProductSwiper = async ({ searchParams }: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const products = await fetchProducts();

  const filteredProducts = products && searchParams?.query
    ? products.filter(product => product.category === searchParams.query)
    : products;
  // console.log("filtered products:", filteredProducts);

  return (
    // <div className="h-[780px] w-full py-4 relative product mx-auto">
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

export default AllProductSwiper;
