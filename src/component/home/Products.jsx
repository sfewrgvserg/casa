import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Products({ underTitle, title, products }) {
  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product-details/${product.id}`);
  };
  return (
    <>
      <div className="flex flex-col items-center relative">
        <div className="text-center space-y-5 pb-16">
          <h3 className="font-semibold text-5xl text-stone-700">{title}</h3>
          <p className="font-semibold text-gray-600">{underTitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-10 max-w-[80%] mx-auto max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.map((product, index) => (
            <section
              key={index}
              className="rounded-2xl border-2 border-gray-200 shadow-2xl cursor-pointer p-5 hover:scale-105 duration-200"
              onClick={() => {
                handleProductClick(product);
              }}
            >
              <img src={product.img} className="rounded-xl pb-5" alt="" />
              {product.mark && <p>{product.mark}</p>}
              {product.title && (
                <p className="text-lg font-semibold text-slate-700">
                  {product.title}
                </p>
              )}
              <div className="flex">
                {[...Array(5)].map((starIndex, index) => (
                  <FaStar
                    key={index}
                    color={index < 4 ? "#ffc107" : "#e4e5e9"}
                    className="cursor-pointer"
                    size={30}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between pt-4">
                <p className="text-xl font-semibold text-navbar">
                  ${product.price}
                </p>
                <div className="p-3 bg-navbar/10 cursor-pointer text-navbar rounded-full">
                  <FiShoppingCart size={25} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
