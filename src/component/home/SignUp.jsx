export default function SignUp() {
  return (
    <>
      <div className="my-16 bg-blue-950">
        <div className="max-w-[80%] h-[12rem] mx-auto py-7 text-white flex-col flex justify-center">
          <div className="">
            <div className="flex items-center max-lg:flex-col">
              <div>
                <p className="text-2xl font-semibold">
                  Sign Up For Newsletters
                </p>
                <p className="text-stone-500">
                  Get E-mail updates about our latest shop and
                  <span className="text-amber-400"> special offers.</span>
                </p>
              </div>
              <div className="flex">
                <input
                  type="text"
                  name=""
                  placeholder="Your email address"
                  className="py-3 px-5 w-[400px] text-stone-700 font-semibold outline-2 border-none outline-stone-700 max-sm:w-8/12"
                />
                <button
                  type="button"
                  className="w-[100px] bg-green-900 font-semibold"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
