import { Suspense } from "react";
import Loading from "../../adminUIComponents/loading";
import AllProductSwiper from "@/app/uiComponents/products/allProdList";
import Header from "../../adminUIComponents/header";
// import { useState } from "react";

export default function Products({ searchParams }: {
  searchParams?: {
    query?: string
  }
}) {
  // const [addProductPopup, setAddProductPopup] = useState(false);
  // console.log("search params in product page:", searchParams);

  return (
    <div>
      <Header />

      <Suspense fallback={<Loading />}>
        <AllProductSwiper searchParams={{ query: searchParams?.query || undefined }} />
      </Suspense>
    </div>
  )
}