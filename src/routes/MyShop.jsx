import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import CartMain from "../component/cart/CartMain";
import Banner from "../component/Banner";

export default function myShop() {
  return (
    <>
      <div>
        <Header />
        <Banner
          hashtag="cart"
          title="Add your coupos code & SAVE upto 70%!"
          img="./img/about/banner.png"
        />
        <CartMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
