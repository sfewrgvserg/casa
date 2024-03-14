export default function SignUp() {
  return (
    <>
      <div className="my-16 bg-blue-950">
        <div className="w-[80%] h-[12rem] mx-auto py-7 text-white flex-col flex justify-center">
          <p className="text-2xl font-semibold">Sign Up For Newsletters</p>
          <div className="flex justify-between items-center">
            <p className="text-stone-500">
              Get E-mail updates about our latest shop and
              <span className="text-amber-400"> special offers.</span>
            </p>
            <div className="flex">
              <input
                type="text"
                name=""
                placeholder="Your email address"
                className="py-3 px-5 min-w-[400px] text-stone-700 font-semibold outline-2 border-none outline-stone-700"
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
    </>
  );
}
