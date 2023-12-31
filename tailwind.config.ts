import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "txt-main-white": "#FFF5DA",
        "txt-main-red": "#D21C1C",
        "txt-main-black": "#282828",
        "txt-main-yellow": "#FFBA00",
        // "txt-main-yellow": "#FBDD3D",
        "txt-grey": "#A3A3A3",
        "txt-light-grey": "#A9A393",
        "txt-marine": "#227D94",
        "bg-main": "#424242",
        "bg-grey": "#5E5E5E",
        "bg-light-grey": "#a3a3a3",
        "bg-white": "#FFF5DA",
        "bg-red": "#D21C1C",
        "bg-black": "#282828",
        "bg-primary": "#FFBA00",
        "bg-yellow": "#FBDD3D",
        "bg-brown": "#3C291A",
        "bg-orange": "#DC8943",
        "bg-light-orange": "#D09E32",
      },
      fontFamily: {
        basic: "Jura, sans-serif",
        review: "Nunito, sans-serif",
      },
      backgroundImage: {
        hero: "url('/background/hero.jpg')",
        about: "url('/background/about.jpg')",
        products: "url('/background/waves.png')",
      },
      boxShadow: {
        soc: "0 5px 20px -5px rgba(255,187,0,1)",
        btnRed: "0 0 14px 14px rgba(210,28,28,0.4)",
        btnRedS: "0 0 4px 4px rgba(210,28,28,0.4)",
        btnBlack: "0 0 14px 14px rgba(40,40,40,0.4)",
        btnBlackSmall: "0 0 6px 6px rgba(40,40,40,0.4)",
        btnWhite: "0 0 14px 8px rgba(255,245,218,0.4)",
        btnWhiteS: "0 0 4px 4px rgba(255,245,218,0.4)",
        swiper: "0 0 5px 5px rgba(255,245,218,0.4)",
        swiperReview: "0 0 5px 5px rgba(255,187,0,0.4)",
        popups: "4px 4px 5px 2px rgba(5,0,0, 0.5)",
        reviewItem: "0px 56px 80px -16px rgba(219,222,229,0.80)",
      },
      gridTemplateColumns: {
        productItem: "50% 25% 20% 5%",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "translateY(0) rotate(0) ",
          },
          "100%": {
            transform: "translateY(40px) rotate(180deg)",
          },
        },
        ripple: {
          "0%": {
            boxShadow: " 0 0 0 0 rgba(210,28,28,0.6)",
          },
          "60%": {
            boxShadow: "0 0 0 20px rgba(210,28,28,0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(210,28,28,0)",
          },
        },
      },
      animation: {
        rotate: "rotate 1s forwards",
        ripple: "ripple 2s ease-in-out infinite",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  plugins: [],
}
export default config
