import { fetchOrders, fetchFullOrders } from "@/app/utils/dataFetching";
import OrderItem from "./orderItem";

const OrdersList = async ({ archived }: { archived: boolean }) => {
  const orders = await fetchOrders(archived);
  // const fullOrders = await fetchFullOrders(archived);
  // console.log("Full Orders list: ", fullOrders);

  return (
    <div className="text-txt-main-white text-center w-[calc(100vw-356px)] flex flex-col gap-4 h-[85vh] bg-bg-black">
      <div className="flex text-lg bg-bg-grey">
        {" "}
        {/*header*/}
        <p className="w-[7.4vw]">Номер</p>
        <p className="w-[16.2vw]">Дата замовленя</p>
        <p className="w-[15.5vw]">Замовник</p>
        <p className="w-[16.6vw]">Номмер телефону</p>
        <p className="w-[11.1vw]">Сума</p>
        <p className="w-[29.5vw]">Адреса доставки</p>
        <p className="w-[3.7vw]"></p>
      </div>
      <div className="w-full flex flex-col gap-4 overflow-y-auto">
        {orders?.length &&
          orders.map((order) => (
            <div key={order.order_number} className="flex flex-col bg-bg-grey">
              <OrderItem order={order} />
            </div>
          ))}
      </div>
    </div>
  )
}
export default OrdersList;