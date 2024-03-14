import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import CartBanner from "./CartBanner";
import { IoIosClose } from "react-icons/io";
import user from "../../userProducts.json";
import { useNavigate } from "react-router-dom";

export default function CartMain() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState(user.user);

  const handleRemoveItem = (itemId) => {
    setCartData((prevData) => prevData.filter((item) => item.id !== itemId));
    fetch(`http://localhost:3500/user/${itemId}`, { method: "DELETE" }).then(
      (res) => {
        if (res.ok) {
          console.log("Record deleted successfully!");
        } else {
          console.log("Error deleting: ", res.statusText);
        }
      }
    );
  };

  return (
    <>
      <CartBanner />
      <div className="w-[80%] mx-auto">
        {cartData.length <= 0 ? (
          <div className="flex flex-col items-center my-16 space-y-10">
            <h3 className="text-4xl font-extrabold">
              Your shopping cart is empty
            </h3>
            <button
              type="button"
              className="bg-black text-white flex items-center  px-14 py-3"
              onClick={() => navigate("/shop")}
            >
              Let{"'"}s Go
              <FaLongArrowAltRight size={30} className="ml-3" />
            </button>
          </div>
        ) : (
          <div>
            <table className="text-center border-t-2 border-stone-300 my-16 w-full">
              <tr className="border-b-2 border-stone-300">
                <th className="py-5">REMOVE</th>
                <th className="py-5">IMAGE</th>
                <th className="py-5">PRODUCT</th>
                <th className="py-5">PRICE</th>
                <th className="py-5">QUANTITY</th>
                <th className="py-5">SUBTOTAL</th>
              </tr>
              {cartData.map((user, index) => (
                <tr key={index}>
                  <td>
                    <span
                      className="border-2 rounded-full flex items-center justify-center cursor-pointer w-full hover:bg-navbar hover:text-white duration-300"
                      onClick={() => handleRemoveItem(user.id)}
                    >
                      <IoIosClose size={35} />
                    </span>
                  </td>
                  <td className="flex justify-center pt-7">
                    <img src={user.img} className="size-40" alt="" />
                  </td>
                  <td>{user.title}</td>
                  <td>$ {user.price}</td>
                  <td>
                    <span className="py-4 px-12 border-stone-300 border-2 shadow-xl">
                      {user.Quantity}
                    </span>
                  </td>
                  <td>$ {user.price}</td>
                </tr>
              ))}
            </table>
            <div>
              <div>
                <p>Apply Coupon</p>
                <div>
                  <input type="text" name="" placeholder="Enter Your Coupon" />
                  <button type="button">Apply</button>
                </div>
              </div>
              <div>
                <p>Cart Totals</p> {/* Corrected typo in "Totals" */}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
