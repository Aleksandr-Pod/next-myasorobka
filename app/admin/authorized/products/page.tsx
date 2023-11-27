import { Suspense } from "react";
// import ProductList from "../../adminUIComponents/productList";
import Loading from "../../adminUIComponents/loading";
import AllProductSwiper from "@/app/uiComponents/products/allProdList";

export default function products() {
  return (
    <div>
      <h2>Products page</h2>
      <Suspense fallback={<Loading />}>
        <AllProductSwiper />
      </Suspense>
    </div>
  )
}