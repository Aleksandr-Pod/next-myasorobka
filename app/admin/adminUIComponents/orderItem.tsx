'use client'

import { useState } from "react";
import { format } from "date-fns";
import { ArrowDown, Archive, Active, Trash } from "../../uiComponents/kit/iconComponent";
import { TOrders } from "@/app/utils/types";
import ProductsInOrder from "./productsInOrder";

const OrderItem = ({ order }: { order: TOrders }) => {
  const { order_number, order_date, customer_name, tel: phone_number, delivery_address, archived } =
    order;
  const products = ["prod1", "prod2"];
  const [orderIsOpened, setOrderIsOpened] = useState(false);
  // const [popUpIsOpened, setPopUpIsOpened] = useState(false);

  const toArchive = () => {
    console.log("toArchive");
    // newOrder.archived = !archived;
    // adminOrders.updateAdminOrderAction(newOrder);
  };

  const toRemove = () => {
    console.log("toRemove");
    // adminOrders.deleteAdminOrderAction(newOrder);
  };

  return (
    <>
      <div className="flex flex-row">
        <p className="w-[7.4vw] text-center p-2">{order_number}</p>
        <p className="w-[16.2vw] text-right p-2">{format(new Date(order_date), "dd-MM-yyyy HH-mm")}</p>
        <p className="w-[15.5vw] text-center p-2">{customer_name}</p>
        <p className="w-[16.6vw] text-right p-2">{phone_number}</p>
        <p className="w-[11.1vw] text-right p-2">Amount</p>
        <p className="w-[29.5vw] text-center p-2">{delivery_address}</p>
        <p className="w-[3.7vw] flex justify-center items-center mr-6">
          <button
            className={`w-8 h-8 rounded-full bg-bg-white flex justify-center items-center ${orderIsOpened && "animate-rotate"
              }`}
            onClick={() => setOrderIsOpened(!orderIsOpened)}
          >
            <ArrowDown />
          </button>
        </p>
      </div>

      {orderIsOpened && (
        <ProductsInOrder productsInOrder={products} archived={archived} />
      )}

      {/* {popUpIsOpened && (
        <ConfirmPopup
          primaryBtnText={"Видалити"}
          secondaryBtnText={"Закрити"}
          onPrimaryBtnClick={toRemove}
          onSecondaryBtnClick={() => setPopUpIsOpened(false)}
        >
          <div className="mt-[78px] text-txt-main-white mb-[52px]">
            <p className="text-[32px] mb-4">Ви впевнені що хочете видалити?</p>
            <p className="text-sm text-white">* Видалення замовлення без можливості поверння !</p>
          </div>
        </ConfirmPopup>
      )} */}
    </>
  );
};

export default OrderItem;
