import Header from "../component/home/header/Header";
import Footer from "../component/home/footer/Footer";
import SignUp from "../component/home/SignUp";
import ContactMain from "../component/contact/ContactMain";

export default function Contact() {
  return (
    <>
      <div>
        <Header />
        <ContactMain />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}
