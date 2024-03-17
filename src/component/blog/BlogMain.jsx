import { useState } from "react";
import blogData from "../../blogData.json";

export default function BlogMain() {
  const [showDescriptions, setShowDescriptions] = useState(
    Array(blogData.length).fill(true)
  );
  const handleShow = (index) => {
    const newShowDescriptions = [...showDescriptions];
    newShowDescriptions[index] = !showDescriptions[index];
    setShowDescriptions(newShowDescriptions);
  };
  return (
    <div className="w-[80%] mx-auto my-[200px]">
      <div className="space-y-36">
        {blogData.map((data, index) => (
          <div key={index} className="relative">
            <div className="flex items-center max-xl:flex-col">
              <div>
                <img
                  src={data.img}
                  alt=""
                  className="min-w-[40rem] h-[25rem] object-cover object-top"
                />
              </div>
              <p className="absolute -z-10 -top-[4.6rem] text-8xl font-extrabold text-stone-600">
                {data.date}
              </p>
              <div className="pl-10 space-y-5 max-xl:mt-10">
                <h2 className="text-xl font-semibold">{data.title}</h2>
                <p>
                  {showDescriptions[index]
                    ? data.description.substring(0, 140)
                    : data.description}
                </p>
                <button
                  type="button"
                  className="font-medium hover:text-navbar duration-200"
                  onClick={() => {
                    handleShow(index);
                  }}
                >
                  CONTINUE READING -----
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
