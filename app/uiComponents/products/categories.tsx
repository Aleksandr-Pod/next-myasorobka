'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TProduct } from "@/app/utils/types";
import ButtonMain from "../kit/button";
import * as icons from "../kit/iconComponent";

const Categories = ({ products }: { products: TProduct[] }) => {
  const pathname = usePathname();
  const admin = pathname.endsWith("admin/authorized/products");
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const categories = ["Всі продукти"];
  products.forEach(({category}) => {
    if (!categories.includes(category)) {
      categories.push(category);
    }
  });

  function handleFilter(category: string) {
    const searchCategory = new URLSearchParams(searchParams);
    if (category === "Всі продукти") {
      searchCategory.delete('query');
    } else {
      searchCategory.set('query', category);
    };
    replace(`${pathname}?${searchCategory.toString()}`);
  }

  return (
    <div className="flex justify-center gap-x-5 w-full mx-auto ">
      {categories.map((el) => (
        <div key={el}>
          <div className="px-4 mx-auto w-full">
            <ButtonMain
              style={"categoriesBtn"}
              clickFn={() => handleFilter(el)}
              icon={<icons.Line active small />}
            >
              {el}
            </ButtonMain>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Categories;