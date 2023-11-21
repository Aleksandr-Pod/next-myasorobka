"use client";

import Image from "next/image";
import ButtonMain from "@/app/uiComponents/kit/button";
import Menu from "@/app/uiComponents/header/menu";
import { scrollToProducts } from "@/app/utils/scroll";

const Header = () => {
  return (
    <div className="pt-2 mx-auto flex justify-between gap-x-3 text-txt-main-white">
      <Image src="/logo.png" alt="Logo" width={100} height={110} className="w-[100px] h-[110px] lg:ml-[70px]" />
      <div className="flex flex-col lg:flex-row xl:py-5 items-center lg:mr-[122px]">
        <nav className="mr-3 lg:mr-11">
          <Menu section="header" />
        </nav>
        <ButtonMain style="redCustom" clickFn={scrollToProducts}>
          Замовити смаколики
        </ButtonMain>
      </div>
    </div>
  );
};
export default Header;
