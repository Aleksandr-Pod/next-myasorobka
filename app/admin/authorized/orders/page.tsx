import { Suspense } from "react";
import Header from "../../adminUIComponents/header";
import Loading from "../../adminUIComponents/loading";
import OrdersList from "../../adminUIComponents/ordersList";

export default function Orders() {
  return (
    <div>
      <Header title="Замовлення" btnName="Архів" btnLink="orders/archive" />

      <Suspense fallback={<Loading />}>
        <OrdersList archived={false} />
      </Suspense>
    </div>
  )
}