import "./footer.css";
import { Link } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-between items-center max-xl:grid max-xl:grid-cols-2 max-xl:justify-center max-md:grid-cols-1 ">
          <div className="">
            <Link to="/">
              <img src="./img/logo.png" className="flex mb-6" alt="" />
            </Link>
            <p className="font-semibold pb-3">Contact</p>
            <div className="flex my-2 max-sm:inline-block">
              <span className="font-semibold">Address:</span>
              <address className="text-stone-600">
                562 Wellington Road. Street 32, San Francisgo
              </address>
            </div>
            <p className="text-stone-600">
              <span className="font-semibold text-black">Phone:</span>{" "}
              +012222365 /(+91) 01 23456789
            </p>
            <p className="text-stone-600">
              <span className="font-semibold text-black">Hours: </span>10:00 -
              18:00, Mon -Sat
            </p>

            <div>
              <div className="flex text-stone-700 space-x-2 mt-5">
                <a href="">
                  <TfiFacebook size={20} className="cursor-pointer" />
                </a>
                <a href="">
                  <FaTwitter size={20} className="cursor-pointer" />
                </a>
                <a href="">
                  <BiLogoInstagramAlt size={20} className="cursor-pointer" />
                </a>
                <a href="">
                  <FaPinterestP size={20} className="cursor-pointer" />
                </a>
                <a href="">
                  <FaYoutube size={20} className="cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div className="textHeaderColorFooter">
            <p className="textColorFooter">About</p>
            <Link to="/">
              <p>About Us</p>
            </Link>
            <Link to="/">
              <p>Delivery Information</p>
            </Link>
            <Link to="/">
              <p>Privacy Policy</p>
            </Link>
            <Link to="/">
              <p>Terms & Conditions</p>
            </Link>
            <Link to="/">
              <p>Contact Us</p>
            </Link>
          </div>

          <div className="textHeaderColorFooter">
            <p className="textColorFooter">My Account</p>
            <Link to="/">
              <p>Sign In</p>
            </Link>
            <Link to="/">
              <p>View Cart</p>
            </Link>
            <Link to="/">
              <p>My Wishlist</p>
            </Link>
            <Link to="/">
              <p>Track My Order</p>
            </Link>
            <Link to="/">
              <p>Help</p>
            </Link>
          </div>

          <div className="textHeaderColorFooter">
            <p className="font-semibold text-black my-6">Install App</p>
            <p>From App Store or Google Play</p>
            <div className="flex max-sm:grid max-sm:grid-cols-1 max-sm:space-y-2 py-3">
              <img src="./img/pay/app.jpg" className="imgPay" alt="" />
              <img src="./img/pay/play.jpg" className="imgPay" alt="" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="./img/pay/pay.png" className="py-5" alt="" />
          </div>
        </div>

        <div className="flex justify-center py-10 text-sm items-center font-semibold text-stone-600">
          <p>&#169; 2024. SinaGh - REACT JS - CSS Ecommerce Template </p>
        </div>
      </div>
    </>
  );
}
