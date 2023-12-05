"use client";
import * as icons from "@/app/uiComponents/kit/iconComponent";

const SwiperButtons = () => {
  function clickFn() {
    console.log("click");
  }
  return (
    <div className="w-full mt-6 relative mx-auto px-10 flex justify-between items-center">
      <button
        className="w-[52px] h-[52px] p-4 rounded-full z-30 bg-bg-main-yellow hover:shadow-swiperReview"
        onClick={clickFn}
      >
        <icons.Left />
      </button>
      {/* <div className="review-pagination flex justify-center gap-x-4 mx-6 w-[200px] h-full z-20"></div> */}
      <button
        className="w-[52px] h-[52px] p-4 rounded-full z-30 bg-bg-main-yellow hover:shadow-swiperReview"
        onClick={clickFn}
      >
        <icons.Right />
      </button>
    </div>
  );
};

export default SwiperButtons;
