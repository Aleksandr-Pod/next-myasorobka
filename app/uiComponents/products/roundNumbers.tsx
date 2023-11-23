'use client'

import { useState } from "react";
import ButtonMain from "../kit/button";
import { TProduct } from "@/app/utils/types";

const RoundNumbers = ({ product }: { product: TProduct }) => {
  const [qtty, setQtty] = useState(1);

  const buttons = [1, 2, 5];
  const genStyles =
    "w-8 h-8 border border-bg-main rounded-full text-center py-1 cursor-pointer";
  const activeStyle = "bg-bg-red border-txt-main-red text-txt-main-white";
  const isProductInCart = false; // () = { chech is this product in the cart }
  const addToCart = () => { console.log('click on addToCart') };
  const removeFromCart = () => { }; // () => ordersStore.deleteProduct(product.name) 

  return (
    <>
      <div className="flex gap-x-8 justify-center my-2">
        {buttons.map((el) => (
          <button
            type="button"
            key={el}
            className={`${el === qtty && activeStyle} ${genStyles}`}
            onClick={() => setQtty(el)}
          >
            {el}
          </button>
        ))}
      </div>
      <div className="flex justify-center">
        {isProductInCart ? (
          <ButtonMain style={"addToCart"}
            clickFn={removeFromCart}
          >
            Видалити з кошика
          </ButtonMain>
        ) : (
          <ButtonMain style={"addToCart"} clickFn={addToCart}>
            Додати у кошик
          </ButtonMain>
        )}
      </div>
    </>
  );
};
export default RoundNumbers;
