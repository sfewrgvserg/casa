export default function Banner() {
  return (
    <>
      <div>
        <div className="bg-banner2 min-h-[22rem] bg-cover text-white my-32">
          <div className="space-y-7 min-h-[22rem] flex flex-col items-center justify-center ">
            <p>Repair Services</p>
            <div>
              <div className="font-bold text-2xl flex max-md:flex-col max-md:items-center">
                <div className="flex mb-5">
                  <p>Up to </p>
                  <span className="text-rose-600">70% Off -</span>
                </div>
                <div className="flex max-sm:items-center max-sm:justify-center">
                  <p className="">All t-Shirts & Accessories</p>
                </div>
              </div>
            </div>
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
