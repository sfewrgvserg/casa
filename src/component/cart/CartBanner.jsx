export default function CartBanner() {
  return (
    <>
      <div>
        <div className="bg-banner_banner bg-center bg-cover bg-no-repeat relative min-h-[300px]">
          <div className="absolute top-1/3 right-[37%] flex flex-col text-white space-y-5">
            <p className="text-6xl font-semibold">#cart</p>
            <p className="text-xl">Add your coupos code & SAVE upto 70%!</p>
          </div>
        </div>
      </div>
    </>
  );
}
