import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import Products from "../component/home/Products";
import detailsProducts from "../detailsProducts.json";
import Banner from "../component/Banner";

export default function Shop() {
  return (
    <>
      <div>
        <Header />
        <Banner
          hashtag="stayhome"
          title="Save more with coupons & up to 70% off!"
          img="./img/banner/b1.jpg"
        />
        <Products title="" underTitle="" products={detailsProducts.products} />
        <Products title="" underTitle="" products={detailsProducts.products} />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
