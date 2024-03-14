function Message() {
  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <div className="w-[60%]">
            <p className="text-sm text-stone-500">LEAVE A MESSAGE</p>
            <h4 className="my-7 text-4xl font-bold text-stone-700">
              We love to hear from you
            </h4>
            <div className="flex flex-col space-y-10">
              <input
                type="text"
                placeholder="Your Name"
                name=""
                className="px-5 py-3 font-semibold border-2 border-stone-300"
              />
              <input
                type="text"
                placeholder="E-mail"
                name=""
                className="px-5 py-3 font-semibold border-2 border-stone-300"
              />
              <input
                type="text"
                placeholder="Subject"
                name=""
                className="px-5 py-3 font-semibold border-2 border-stone-300"
              />
              <textarea
                name="textArea"
                cols="30"
                placeholder="Your Message"
                rows="10"
                className="px-5 py-3 font-semibold border-2 border-stone-300"
              ></textarea>
            </div>
            <button className="bg-navbar px-10 py-5 rounded-lg text-white font-semibold mt-10">
              Submit
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 text-stone-500">
            <div className="flex items-center space-x-5">
              <img src="./img/people/1.png" alt="" />
              <div className="space-y-1">
                <h4 className="font-semibold text-lg text-black">John Doe</h4>
                <p>Senior Mardeting Manager</p>
                <p>Phone: + 000 123 000 77 88</p>
                <p>Email: contact example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <img src="./img/people/2.png" alt="" />
              <div className="space-y-1">
                <h4 className="font-semibold text-lg text-black">John Doe</h4>
                <p>Senior Mardeting Manager</p>
                <p>Phone: + 000 123 000 77 88</p>
                <p>Email: contact example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <img src="./img/people/3.png" alt="" />
              <div className="space-y-1">
                <h4 className="font-semibold text-lg text-black">John Doe</h4>
                <p>Senior Mardeting Manager</p>
                <p>Phone: + 000 123 000 77 88</p>
                <p>Email: contact example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
