import "./header.css";
import { FaThList } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { LuShoppingBasket } from "react-icons/lu";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
    { title: "Blog", url: "/blog" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: <LuShoppingBasket size={30} />, url: "/myShop" },
  ];

  return (
    <>
      <div className="relative z-50">
        <nav className="fixed py-6 text-lg bg-slate-200 w-full">
          <ul className="flex items-center justify-between max-w-[80%] mx-auto">
            <img src="./img/logo.png" alt="" />
            <div className="md:hidden" onClick={handleOpen}>
              <FaThList size={20} />
            </div>
            <div className="flex max-md:hidden space-x-5">
              {menuItems.map((menuItem, index) => (
                <li key={index} className="relative">
                  <NavLink
                    to={menuItem.url}
                    className="hover:text-navbar duration-200" // Apply hover styles
                  >
                    {menuItem.title}
                  </NavLink>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="relative flex justify-end md:hidden">
          <ul
            className={`fixed bg-gray-300 top-[5.5rem] h-screen min-w-[80%] z-50 navbar ${
              isOpen ? "navbar-animation-open" : ""
            }`}
          >
            <div>
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={menuItem.url}
                    className="sticky w-full hover:bg-navbar duration-200 flex justify-end p-5 text-lg"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      )}
    </>
  );
}
