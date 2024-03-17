import "./bannerButton.css";

export default function BannerButton() {
  return (
    <>
      <div className="max-w-[80%] mt-28 flex flex-col justify-between mx-auto text-white">
        <div className="flex justify-center space-x-5">
          <div className="container group bg-banner17">
            <div className="containerText">
              <p className="text-xl">spring/summer</p>
              <p className="text-3xl font-bold mt-4 mb-3">Upcomming season</p>
              <p>The best clossic dress is on sale at care</p>
              <button type="button" className="button">
                Collection
              </button>
            </div>
          </div>

          <div className="container group bg-banner10">
            <div className="containerText">
              <p className="text-xl">spring/summer</p>
              <p className="text-3xl font-bold mt-4 mb-3">Upcomming season</p>
              <p>The best clossic dress is on sale at care</p>
              <button type="button" className="button">
                Collection
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <div className="container1 bg-banner7">
            <div className="containerText">
              <p className="text-4xl font-bold">spring/summer</p>
              <p className="text-xl font-bold mt-4 mb-3 text-red_1000">
                Upcomming season
              </p>
            </div>
          </div>
          <div className="container1 bg-banner4">
            <div className="containerText">
              <p className="text-4xl font-bold">spring/summer</p>
              <p className="text-xl font-bold mt-4 mb-3 text-red_1000">
                Upcomming season
              </p>
            </div>
          </div>
          <div className="container1 bg-banner18">
            <div className="containerText">
              <p className="text-4xl font-bold">spring/summer</p>
              <p className="text-xl font-bold mt-4 mb-3 text-red_1000">
                Upcomming season
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
