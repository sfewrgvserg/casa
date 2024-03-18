export default function AboutMain() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-2 items-center my-16 max-lg:flex max-lg:flex-col max-lg:items-start">
          <div>
            <img src="./img/about/a6.jpg" alt="" />
          </div>
          <div className="pl-10 space-y-5">
            <h2 className="text-2xl font-extrabold">WHO WE ARE ?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nisi
              ducimus harum ab! Consequuntur neque vitae numquam ipsam autem
              quos corrupti soluta suscipit explicabo! Nulla natus dicta
              voluptates quod saepe! Ullam reiciendis vel esse harum et nisi.
              Sint beatae suscipit laudantium nihil nobis fugiat magni officiis
              quos, aperiam possimus consequatur dicta commodi repudiandae
              reiciendis iure itaque ratione explicabo molestias minima? Alias
              consectetur ea modi aperiam quasi labore explicabo illum iure
              quam, debitis dignissimos id soluta adipisci harum, quisquam
              consequuntur! Facere hic, voluptatem voluptate dolor cumque
              doloribus! Architecto quasi nobis est?
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-36">
          <h4 className="text-2xl font-bold text-stone-600">
            Download Our
            <a
              href="https://play.google.com/store/games?device=windows"
              className="border-b-2 border-purple-900 text-purple-900 hover:border-b-2 hover:border-navbar duration-300"
            >
              {" "}
              App
            </a>
          </h4>
          <div>
            <video
              controls
              src="./img/about/1.mp4"
              className="rounded-[3rem] w-[60%] mx-auto my-14 max-lg:w-full"
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
