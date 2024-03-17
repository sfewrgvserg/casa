import Header from "../component/home/header/Header";
import MainHome from "../component/home/MainHome";
import Features from "../component/home/Features";
import Banner from "../component/home/Banner";
import Products from "../component/home/Products";
// import BannerButton from "../component/home/bannerButton/BannerButton";
import SignUp from "../component/home/SignUp";
import Footer from "../component/home/footer/Footer";
import detailsProducts from "../detailsProducts.json";

export default function Home() {
  return (
    <>
      <Header />
      <MainHome />
      <Features />
      <Banner />
      <Products
        title="Featured Products"
        underTitle="Summer Collection New Morden"
        products={detailsProducts.products}
      />
      {/* <BannerButton /> */}
      <SignUp />
      <Footer />
    </>
  );
}
