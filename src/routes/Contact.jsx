import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import ContactMain from "../component/contact/ContactMain";
import Banner from "../component/Banner";

export default function Contact() {
  return (
    <>
      <div>
        <Header />
        <Banner
          hashtag="let's_talk"
          title="LEAVE A MESSAGE. We love to hear from you!"
          img="./img/about/banner.png"
        />
        <ContactMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
