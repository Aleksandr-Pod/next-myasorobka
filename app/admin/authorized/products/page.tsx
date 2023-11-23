import { Suspense } from "react";
import ProductList from "../../adminUIComponents/productList";
import Loading from "../../adminUIComponents/loading";

export default function products() {
  return (
    <div className="flex-row">
      <h2>Products page</h2>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  )
}