import { FaLongArrowAltRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Header from "../home/header/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import detailsProducts from "../../detailsProducts.json";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { productId } = useParams();

  const product = detailsProducts.products.find(
    (product) => product.id === parseInt(productId)
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleClick = () => {
    setIsClick(!isClick);
  };

  const body = {
    id: product.id,
    img: product.img,
    price: product.price,
    Quantity: product.Quantity++,
    title: product.title,
  };

  useEffect(() => {
    if (isClick) {
      fetch("http://localhost:3500/user", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            console.log("success");
          } else {
            console.log("not success");
          }
        })
        .then((data) => console.log(data))
        .catch((error) => console.log("error" + error));
    }
  });

  return (
    <>
      <div className="relative">
        {isClick && (
          <div className="absolute z-[999]">
            <div className="fixed">
              <div className="flex justify-center items-center backdrop-blur-lg h-screen w-screen">
                <div className="bg-white max-w-[85%] border-2 relative">
                  <div className="py-10 px-5 ">
                    <button
                      type="button"
                      className="absolute -top-6 -right-6 z-40 border-2 bg-white border-black"
                      onClick={handleClick}
                    >
                      <MdClose size={40} />
                    </button>
                    <h3 className="text-3xl font-bold mb-10">
                      SUCCESSFULLY ADDED TO BAG!
                    </h3>
                    <div className="flex max-md:flex-col max-md:items-center ">
                      <div className="flex max-sm:flex-col max-sm:items-center border-black border-r-2 mb-5 max-md:border-r-2 max-md:border-white max-md:border-b-2">
                        <img
                          src={product.img}
                          className="size-[10rem]"
                          alt=""
                        />
                        <div className="mx-5 ">
                          <h2 className="text-lg font-medium">
                            {product.title}
                          </h2>
                          <p className="py-1 text-lg font-medium">
                            ${product.price}
                          </p>
                          <p>Size: {selectedSize}</p>
                          <p>Quantity: {product.Quantity}</p>
                        </div>
                      </div>
                      <div className="px-7 w-[50%] max-md:min-w-full">
                        <div className="border-b-2 border-black pb-5 space-y-1">
                          <p className="text-sm max-sm:hidden">Your Bag</p>
                          <p className="max-sm:hidden">1 item</p>
                          <div className="">
                            <div className="flex justify-between max-sm:hidden">
                              <p>Total Product Cost:</p>
                              <p>$ 110,000</p>
                            </div>
                            <div className="flex justify-between max-sm:hidden">
                              <p>Total Delivery Cost:</p>
                              <p>Free</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-lg font-semibold">
                            <h3>Total:</h3>
                            <p>$ 110,000</p>
                          </div>
                          <p>(inclusive of tax)</p>
                          <div className="flex flex-col space-y-5 pt-5">
                            <button
                              className="flex justify-between items-center font-medium border-black border-2 py-2 px-2 bg-black text-white"
                              onClick={() => {
                                navigate("/myShop");
                              }}
                            >
                              VIEW BAG <FaLongArrowAltRight size={25} />
                            </button>
                            <button className="flex justify-between items-center font-medium border-black border-2 py-2 px-2 bg-white text-black">
                              CONTINUE SHOPPING
                              <FaLongArrowAltRight size={25} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="pb-12">
          <Header />
        </div>

        <div className="max-w-[80%] mx-auto flex my-16 max-lg:flex-col max-lg:items-center">
          <div>
            <img
              src={product.img}
              alt={product.title}
              className="min-w-[20rem] max-w-[10rem]"
            />
            <div className="flex mt-3 space-x-3 items-center min-w-[20rem] max-w-[10rem]">
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <img src={product.img} alt="" />
              </div>
            </div>
          </div>
          <div className="pl-10 py-7 ">
            <p className="font-semibold text-lg">{product.title}</p>
            <p className="font-semibold text-4xl pt-5">${product.price}</p>
            <div className="grid grid-cols-5 max-w-[500px] mt-10 max-sm:grid max-sm:grid-cols-3">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className={`border-stone-200 flex justify-center p-4 border-solid items-center text-sm border-[1px] cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white border-white select-none" // Apply styles for selected size
                      : "hover:bg-gray-800 hover:text-white hover:border-white select-none"
                  }`}
                  onClick={() => handleSizeClick(size)} // Call handler on click
                >
                  {size}
                </div>
              ))}
            </div>
            <div className="p-5 border-2 border-solid border-black my-5 max-w-[500px]">
              <p>
                <span className="font-semibold">True to size.</span>We recommend
                ordering your usual size.
              </p>
            </div>
            <button
              className={`px-10 text-white py-3 my-5 shadow-1xl_2 bg-navbar`}
              onClick={handleClick}
            >
              Add to Cart
            </button>
            <p className="text-xl font-semibold">Product Details</p>
            <p className="pt-7 font-medium text-lg">{product.details}</p>
          </div>
        </div>
      </div>
    </>
  );
}
