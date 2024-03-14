import Header from "../component/home/header/Header";
import ShopHeader from "../component/shop/ShopHeader";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import Products from "../component/home/Products";
import detailsProducts from "../detailsProducts.json";

export default function Shop() {
  return (
    <>
      <div>
        <Header />
        <ShopHeader />
        <Products title="" underTitle="" products={detailsProducts.products} />
        <Products title="" underTitle="" products={detailsProducts.products} />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
