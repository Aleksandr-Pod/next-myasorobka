'use client'

import { FavouriteIcon, Trash } from "../kit/iconComponent";
import RoundNumbers from "./roundNumbers";
import ButtonMain from "../kit/button";

import { TProduct } from '@/app/utils/types';
import ProdDescription from "./prodDescription";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { deleteProduct, toggleFavourite } from "@/app/utils/actions";

const ProdCard = ({ product }: { product: TProduct }) => {
  const pathname = usePathname();
  const admin = pathname.endsWith("admin/authorized/products");

  // const addToCart = () => {
  //   ordersStore.addToCart(product, qttyBtn);
  // };

  // const editProduct = () => {
  //   // console.log("edit product");
  //   productStore.setEditProduct(product);
  // };

  const deleteProd = deleteProduct.bind(null, product.name);

  const toggleFav = toggleFavourite.bind(null, product.name);

  // const onProductCardClick = ({ target }) => {
  //   if (target.nodeName === "BUTTON" || admin) {
  //     return;
  //   }
  //   toggleProductDetailInfoCard();
  // };

  // const toggleProductDetailInfoCard = () => {
  //   setIsProductDetailInfoCardShown((prevState) => !prevState);
  // };
  const style = "absolute right-6 w-6 h-6 bg-bg-black rounded"
  return (
    <Link href={`product/${product.id}`}
      className={`${admin ? "h-[316px]" : "h-[356px]"} w-[216px] rounded-3xl bg-bg-white mx-auto cursor-pointer relative`}
    >
      {/* Server componen */}
      <ProdDescription product={product} />

      {admin ? (
        <>
          <div className="flex justify-center">
            <ButtonMain style="whiteSmall"
            // clickFn={editProduct}
            >
              Редагувати
            </ButtonMain>
          </div>

          <form action={toggleFav}>
            <button className={`${style} top-[132px]`} >
              <FavouriteIcon filled={product.favourite} />
            </button>
          </form>

          <form action={deleteProd}>
            <button className={`${style} top-3`} >
              <Trash />
            </button>
          </form>
        </>
      ) : (
        <RoundNumbers product={product} />
      )
      }

      {/* {popUpIsOpened && (
        <ConfirmPopup
          primaryBtnText={"Видалити"}
          secondaryBtnText={"Закрити"}
          onPrimaryBtnClick={deleteProduct}
          onSecondaryBtnClick={() => setPopUpIsOpened(false)}
        >
          <div className="mt-[78px] text-txt-main-white mb-[52px]">
            <p className="text-[32px] mb-4">Ви впевнені що хочете видалити?</p>
            <p className="text-sm text-white">
              * Видалення картки з товаром видалить всі додані зображення та інформацію без можливості поверння.
            </p>
          </div>
        </ConfirmPopup>
      )}
      {isProductDetailInfoCardShown && (
        <ProductDetailInfoCard
          product={toJS(product)}
          productQuantity={qttyBtn}
          onClose={toggleProductDetailInfoCard}
          onPrev={toggleProductDetailInfoCard}
        />
      )} */}
    </Link >
  );
};

export default ProdCard;
