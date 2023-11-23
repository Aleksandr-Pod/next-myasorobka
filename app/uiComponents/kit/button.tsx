"use client";

import { JSX, ReactNode } from "react";
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
  upBtn:
    "hidden lg:absolute w-[64px] h-[64px] rounded-full p-5 bg-bg-white lg:top-[224px] lg:right-[40px] xl:top-[72px] xl:right-[72px] shadow-swiper hover:shadow-btnWhite focus:shadow-btnWhite",
};

const ButtonMain = ({
  children,
  style,
  btnType,
  icon,
  clickFn,
  btnClass,
  ...restProps
}: {
  children?: ReactNode;
  style: keyof typeof buttonsStyle;
  // | "redLarge"
  // | "redMedium"
  // | "redSmall"
  // | "redCustom"
  // | "addToCart"
  // | "blackSmall"
  // | "blackMedium"
  // | "whiteSmall"
  // | "categoriesBtn"
  // | "transparent"
  // | "redOrder"
  // | "upBtn";
  btnType?: "submit" | "button";
  icon?: JSX.Element;
  clickFn?: () => void;
  btnClass?: string;
}) => {
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
