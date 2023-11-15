'use client'

import { ReactElement, ReactNode, useCallback } from "react";
// import dynamic from "next/dynamic";

// const useServer = dynamic(() => import('react-use-server'), { ssr: false });

const buttonsStyle = {
  redSmall:
    "bg-bg-red w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white hover:shadow-btnRedS focus:shadow-btnRedS mx-auto",
  redMedium:
    "bg-bg-red w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto",
  redLarge:
    "bg-bg-red w-[280px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto disabled:opacity-50 disabled:hover:shadow-none",
  addToCart:
    "bg-bg-red w-[176px] h-[28px] py-1 px-3 text-sm font-medium text-txt-main-white hover:shadow-btnRedS focus:shadow-btnRedS mx-auto",
  blackSmall:
    "bg-bg-black w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-btnWhite focus:shadow-btnWhite mx-auto",
  blackMedium:
    "bg-bg-black w-[240px] h-[56px] py-[14px] text-xl font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-btnWhite focus:shadow-btnWhite mx-auto",
  categoriesBtn:
    "bg-bg-white w-[162px] h-[56px] py-3 text-base font-semibold text-txt-main-black hover:shadow-btnWhite focus:shadow-btnWhite mx-auto",
  whiteSmall:
    "bg-bg-white w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-black border border-2 border-bg-black hover:shadow-btnWhite focus:shadow-btnWhite mx-auto",
  redCustom:
    "hidden lg:inline bg-bg-red w-[240px] py-2 text-xl font-medium text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto",
  transparent:
    "min-w-[140px] h-[32px] py-1 text-base font-semibold text-txt-main-white border border-2 border-bg-white hover:shadow-btnWhiteS focus:shadow-btnWhiteS mx-auto",
  redOrder:
    "bg-bg-red min-w-[300px] px-5 py-[14px] text-3xl font-bold text-txt-main-white hover:shadow-btnRed focus:shadow-btnRed mx-auto disabled:opacity-50 disabled:hover:shadow-none transition-all ease-linear animate-ripple hover:animate-none",
};

const ButtonMain = ({ children, style, btnType, icon, clickFn, btnClass, ...restProps }: {
  children?: ReactNode;
  style: "redLarge" | "redMedium" | "redSmall" | "redCustom" | "addToCart" | "blackSmall" | "blackMedium" | "whiteSmall" | "categoriesBtn" | "transparent" | "redOrder";
  btnType?: "submit" | "button";
  icon?: ReactElement;
  clickFn?: () => void;
  btnClass?: string;
}) => {
  // const handleClickFn = useCallback(() => { clickFn ? clickFn() : null }, [clickFn]);
  // const handleClick = clickFn ? clickFn() : undefined;
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-full ${buttonsStyle[style]} ${additionalStyle}`;

  return (
    <button type={btnType || "button"} className={currentStyle} onClick={clickFn ? clickFn : undefined} {...restProps}>
      {children}
      {icon}
    </button>
  );
};
export default ButtonMain;