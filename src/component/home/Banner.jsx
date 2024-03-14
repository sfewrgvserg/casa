export default function Banner() {
  return (
    <>
      <div>
        <div className="relative text-white my-32">
          <img src="./img/banner/b2.jpg" className="w-screen" alt="" />
          <div className="absolute top-1/3 left-1/3 space-y-5 text-center">
            <p>Repair Services</p>
            <p className="font-bold text-4xl">
              Up to <span className="text-rose-600">70% Off</span> - All
              t-Shirts & Accessories
            </p>
            <button
              type="button"
              className="py-3 px-8 text-lg shadow-slate-100 shadow-1xl text-black font-medium bg-yellow-100 rounded-xl hover:bg-navbar hover:text-white hover:shadow-1xl_1 duration-300"
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
