import { Suspense } from "react";
import Header from "../../adminUIComponents/header";
import Loading from "../../adminUIComponents/loading";

export default function Orders() {
  return (
    <div>
      <Header title="Замовлення" btnName="Архів" btnLink="orders/archive" />

      <Suspense fallback={<Loading />}>
      </Suspense>
    </div>
  )
}