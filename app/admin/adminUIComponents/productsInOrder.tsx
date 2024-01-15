'use client'

import { TProduct, TOrders } from "@/app/utils/types";
import ProductListInOrder from "./productListInOrder";
import ButtonMain from "@/app/uiComponents/kit/button";
import { fetchProductsInOrder } from "@/app/utils/dataFetching";
import { Active, Archive, Trash } from "@/app/uiComponents/kit/iconComponent";

const ProductsInOrder = ({ order }: { order: TOrders }) => {
  return (
    <div className="py-4 relative w-[840px]">
      <div className="flex pl-4">
        {" "}
        {/*producl list header*/}
        <p className="w-[300px] text-left">Наіменування</p>
        <p className="w-[120px] text-center">Кількість</p>
        <p className="w-[120px] text-right">Сума</p>
      </div>

      <ProductListInOrder orderNumber={order.order_number} />

      <div className="min-w-[300px] flex justify-center items-center gap-x-4 absolute right-[-125px] bottom-4">
        {order.archived && (
          <ButtonMain style="redSmall" clickFn={
            () => { console.log('Видалити замовлення ..') }
          }>
            <span className="flex justify-center gap-x-2 px-4">
              <Trash />
              Видалити
            </span>
          </ButtonMain>
        )}
        <ButtonMain style="transparent" clickFn={
          () => { console.log("функція Повернути з архіву ...") }
        }>
          {order.archived ? (
            <span className="flex justify-center gap-x-2 px-4">
              <Active />
              Повернути з архіву
            </span>
          ) : (
            <span className="flex justify-center gap-x-2 pr-6">
              <Archive />
              Архів
            </span>
          )}
        </ButtonMain>
      </div>
    </div>
  )
};
export default ProductsInOrder;