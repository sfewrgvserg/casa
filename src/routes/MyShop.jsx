import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import CartMain from "../component/cart/CartMain";

export default function myShop() {
  return (
    <>
      <div>
        <Header />
        <CartMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
