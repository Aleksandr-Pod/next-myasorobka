import { Suspense } from "react";
import Loading from "../../adminUIComponents/loading";
import AllProductSwiper from "@/app/uiComponents/products/allProdList";
import Header from "../../adminUIComponents/header";
// import { useState } from "react";

export default function Products() {
  // const [addProductPopup, setAddProductPopup] = useState(false);

  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <AllProductSwiper />
      </Suspense>
    </div>
  )
}