import { fetchOrders } from "@/app/utils/dataFetching";

const OrdersList = async ({ archived }: { archived: boolean }) => {
  const orders = await fetchOrders(archived);
  console.log("Orders list: ", orders);

  return (
    <h2>Список замовлень</h2>
  )
}
export default OrdersList;
