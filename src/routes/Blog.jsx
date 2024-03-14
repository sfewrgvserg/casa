import BannerBlog from "../component/blog/BannerBlog";
import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import BlogMain from "../component/blog/BlogMain";

export default function Blog() {
  return (
    <>
      <div>
        <Header />
        <BannerBlog />
        <BlogMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
