import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import BannerAbout from "../component/about/BannerAbout";
import AboutMain from "../component/about/AboutMain";

export default function About() {
  return (
    <>
      <div>
        <Header />
        <BannerAbout />
        <AboutMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
