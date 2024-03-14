export default function Features() {
  const features = [
    {
      img: "./img/features/f1.png",
      title: "Free Shopping",
      color: "blue",
    },
    {
      img: "./img/features/f2.png",
      title: "Online Order",
      color: "pink",
    },
    {
      img: "./img/features/f3.png",
      title: "Save Money",
      color: "green",
    },
    {
      img: "./img/features/f4.png",
      title: "Promotions",
      color: "blue",
    },
    {
      img: "./img/features/f5.png",
      title: "Happy Sell",
      color: "purple",
    },
    {
      img: "./img/features/f6.png",
      title: "F24/7 Support",
      color: "orange",
    },
  ];

  return (
    <>
      <div>
        <div className="flex justify-between w-[80%] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center border-gray-200 border-2 font-semibold py-5 px-3 space-y-5 rounded-2xl shadow-2xl mx- my-20"
            >
              <img src={feature.img} alt="" />
              <p
                style={{ backgroundColor: feature.color }}
                className="p-3 bg-red-400 rounded-xl"
              >
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
