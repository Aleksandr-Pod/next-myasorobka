import { Suspense } from "react";
import Header from "../../../adminUIComponents/header";
import Loading from "../../../adminUIComponents/loading";

export default function Orders() {
  return (
    <div>
      <Header title="Архів" btnName="До замовлень" btnLink="/admin/authorized/orders" />

      <Suspense fallback={<Loading />}>
      </Suspense>
    </div>
  )
}