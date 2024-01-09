import { TProduct } from "@/app/utils/types";
import ProductListInOrder from "./productListInOrder";

interface IProps {
  productsInOrder: TProduct[],
  archived: boolean
}

const ProductsInOrder = ({ productsInOrder, archived }: IProps) => {
  return (
    <div className="py-4 relative w-[840px]">
      <div className="flex pl-4">
        {" "}
        {/*producl list header*/}
        <p className="w-[300px] text-left">Наіменування</p>
        <p className="w-[120px] text-center">Кількість</p>
        <p className="w-[120px] text-right">Сума</p>
      </div>
      <ProductListInOrder products={productsInOrder} />
      <div className="min-w-[300px] flex justify-center items-center gap-x-4 absolute right-[-125px] bottom-4">
        {archived && (
          <ButtonMain style="redSmall" clickFn={() => setPopUpIsOpened(!popUpIsOpened)}>
            <span className="flex justify-center gap-x-2 px-4">
              <Trash />
              Видалити
            </span>
          </ButtonMain>
        )}

        <ButtonMain style="transparent" clickFn={toArchive}>
          {archived ? (
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