"use client";

import Image from "next/image";
import ButtonMain from "@/app/uiComponents/kit/button";
import Menu from "@/app/uiComponents/header/menu";
import { scrollToTop } from "./utils/scroll";
import KiwiCode from "./footer/kiwiCode";
import PrivacyPolicy from "./footer/privacyPolicy";
import ContactList from "./footer/contactsList";

const Footer = () => {
  return (
    <footer className="bg-bg-black min-h-[453px] pt-8 pb-5 text-txt-main-white relative" id="contacts">
      <div className="max-w-[1440px] mx-auto px-[10px]">
        <Image
          src="/tomatoes.png"
          alt="tomatoes"
          width={300}
          height={280}
          className="absolute left-0 top-[-120px] w-[240px] h-[224px] lg:top-[-182px] lg:w-[300px] lg:h-[280px]"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center md:px-10 lg:items-end gap-x-[40px] w-[300px] md:w-[450px] lg:w-full mx-auto">
          <div className="w-full md:w-[160px] flex justify-between mt-[80px] lg:mt-[120px] gap-x-5 md:gap-x-0">
            {/* лого видно только в мобильной версии, встроено в контейнер для новрмального вида на мобилке*/}
            <Image src="/logo.png" alt="Logo" width={90} height={90} className="w-[90px] h-[90px] md:hidden" />

            <Menu section={"footer"} />
          </div>

          <div className="flex gap-x-10 w-full md:w-[80%]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={199}
              height={220}
              className="hidden md:inline md:w-[199px] md:h-[220px]"
            />
            <div className="flex flex-col">
              <p className="w-[280px] md:w-full text-[30px] lg:text-[50px] font-bold leading-tight">
                М&apos;ясорОбка: про смак та якість{" "}
                <span className="text-txt-main-yellow">
                  ми подбали, <span className="text-txt-main-white">а </span> Ви - придбали!
                </span>
              </p>

              <ContactList />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5 justify-end items-center mt-[98px] mb-[18px]">
          <PrivacyPolicy />
          <KiwiCode />
        </div>

        <ButtonMain style="upBtn" clickFn={scrollToTop}>
          UP
        </ButtonMain>
      </div>
    </footer>
  );
};
export default Footer;
