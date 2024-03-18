import { useNavigate } from "react-router-dom";

export default function MainHome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-hero bg-cover">
        <div className="flex flex-col justify-center h-screen max-w-[80%] mx-auto">
          <div className="space-y-3">
            <p className="text-lg">Trade-in-offer</p>
            <div>
              <h3 className="text-3xl font-semibold">Super Value deals</h3>
              <h4 className="text-3xl font-semibold text-navbar">
                On all products
              </h4>
            </div>
            <p className="text-zinc-600">
              Save more with coupons & up to 70% off!
            </p>
            <button
              type="button"
              className="bg-button_Shop_Now bg-no-repeat bg-center text-navbar bg-transparent py-[14px] pr-[80px] pl-[65px] text-lg font-semibold"
              onClick={() => {
                navigate("/shop");
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
