import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { LuShoppingBasket } from "react-icons/lu";

export default function Header() {
  return (
    <>
      <div className="bg-navbar_bg">
        <div className="flex justify-between w-[80%] py-8 font-semibold mx-auto">
          <Link to="/">
            <img src="./img/logo.png" alt="" />
          </Link>
          <nav>
            <ul className="flex items-center space-x-7">
              <li className="relative">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="relative">
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li className="relative">
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li className="relative">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="relative">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="relative">
                <NavLink to="/myShop">
                  <LuShoppingBasket size={35} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
