import { Suspense } from "react";
import ProductList from "../../uiComponents/productList";
import Loading from "../../uiComponents/loading";

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