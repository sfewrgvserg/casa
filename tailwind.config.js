/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 50px 5px rgba(0, 0, 0, 0.3)',
        "1xl":"0 0 60px 0px white",
        "1xl_1":"0 0 60px 0px #088178",
        "1xl_2":"6px 6px 0px 0px #d4a373",
      },
      colors:{
        "navbar":"#088178",
        "navbar_bg":"#e3e6f3",
        "red_1000":"#ec544e"
      },
      backgroundImage:{
        "hero":"url('./img/hero4.png')",
        "button_Shop_Now":"url('./img/button.png')",
        "banner17":"url('./img/banner/b17.jpg')",
        "banner7":"url('./img/banner/b7.jpg')",
        "banner4":"url('./img/banner/b4.jpg')",
        "banner18":"url('./img/banner/b18.jpg')",
        "banner10":"url('./img/banner/b10.jpg')",
        "banner14":"url('./img/banner/b14.jpg')",
        "banner1":"url('./img/banner/b1.jpg')",
        "banner19":"url('./img/banner/b19.jpg')",
        "banner6":"url('./img/about/a6.jpg')",
        "banner2":"url('./img/banner/b2.jpg')",
        "banner_banner":"url('./img/about/banner.png')",
      },
    },
  },
  plugins: [],
}

