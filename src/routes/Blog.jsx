import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import BlogMain from "../component/blog/BlogMain";
import Banner from "../component/Banner";

export default function Blog() {
  return (
    <>
      <div>
        <Header />
        <Banner
          hashtag="readmore"
          title="Read all case studies about out products!"
          img="./img/banner/b19.jpg"
        />
        <BlogMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
