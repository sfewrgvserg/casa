import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Blog from "./routes/Blog";
import About from "./routes/About";
import MyShop from "./routes/MyShop";
import Contact from "./routes/Contact";
import ProductDetails from "./component/shop/ProductDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/myShop" element={<MyShop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
