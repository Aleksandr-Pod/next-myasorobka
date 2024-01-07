import { Suspense } from "react";
import Header from "@/app/admin/adminUIComponents/header";
import Loading from "@/app/admin/adminUIComponents/loading";
import OrdersList from "@/app/admin/adminUIComponents/ordersList";

export default function Orders() {
  return (
    <div>
      <Header title="Архів" btnName="До замовлень" btnLink="/admin/authorized/orders" />

      <Suspense fallback={<Loading />}>
        <OrdersList archived={true} />
      </Suspense>
    </div>
  )
}