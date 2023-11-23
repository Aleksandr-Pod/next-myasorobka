import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "./productSwiper.css";

import { Left, Right } from "@/app/utils/iconComponent";
import ProductCard from "./prodCard";
import { fetchProducts } from "@/app/utils/dataFetching";
// import productStore from "../store/products";
// import filterStore from "../store/filter";

const AllProductSwiper = async () => {
  const products = await fetchProducts();
  // const filteredProducts =
  // filterStore.categoryClient === "Всі продукти" || ""
  //   ? productStore.products
  //   : productStore.products.filter((product) => product.category === filterStore.categoryClient);

  return (
    <div className="h-[780px] w-full py-4 relative product mx-auto">
      {products ? (<Swiper
        modules={[Navigation, Grid, Pagination]}
        rewind={true}
        grid={{ rows: 2, fill: "row" }}
        pagination={{ clickable: true, el: ".pagination" }}
        navigation={{ nextEl: ".prod-button-next", prevEl: ".prod-button-prev" }}
        breakpoints={{
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
            grid: { rows: 2, fill: "row" },
          },
          760: {
            slidesPerView: 4,
            spaceBetween: 10,
            grid: { rows: 2, fill: "row" },
          },

          0: {
            slidesPerView: 1,
            spaceBetween: 10,
            grid: { rows: 2, fill: "row" },
          },
        }}
      >
        {products.length ? products.map((product) => (
          <SwiperSlide key={product.name}>
            <ProductCard product={product} />
          </SwiperSlide>
        )) : null}
      </Swiper>) : (null)}

      <div className="w-full mt-8 relative mx-auto flex justify-center items-center">
        <button className="prod-button-prev hover:shadow-swiper">
          <Left />
        </button>
        <div className="pagination flex justify-center gap-x-4 w-[200px] h-full mx-6"></div>
        <button className="prod-button-next hover:shadow-swiper">
          <Right />
        </button>
      </div>
    </div>
  );
};

export default AllProductSwiper;
