import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import AboutMain from "../component/about/AboutMain";
import Banner from "../component/Banner";

export default function About() {
  return (
    <>
      <div>
        <Header />
        <Banner
          hashtag="KnowUs"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          img="./img/about/banner.png"
        />
        <AboutMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
