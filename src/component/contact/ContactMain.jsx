import { FaRegCopyright } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { MdPermContactCalendar } from "react-icons/md";
import Message from "./Message";

function ContactMain() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="flex justify-between max-xl:flex-col items-center py-20">
          <div className="space-y-4 font-medium max-xl:mb-10">
            <p className="text-sm">GET IN TOUCH</p>
            <h3 className="text-xl font-semibold">
              Visit one of our agency locations or contact us today
            </h3>
            <p className="font-semibold">Head Office</p>
            <p className="flex items-center">
              <CiMap size={25} />
              <span className="pl-5">
                56 Glassford Street Glasgow GI IUL New York
              </span>
            </p>
            <p className="flex items-center">
              <MdPermContactCalendar size={25} />
              <span className="flex items-center pl-5">
                contact
                <FaRegCopyright /> example.com
              </span>
            </p>
            <p className="flex items-center">
              <FaPhone size={25} />
              <span className="flex items-center pl-5">
                contact <FaRegCopyright /> example.com
              </span>
            </p>
            <p className="flex items-center ">
              <IoMdTime size={25} />
              <span className="pl-5">Monday to Saturday: 9:00 am to 16 pm</span>
            </p>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d959.965715727865!2d13.401068383376268!3d52.50069378776005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1709986924515!5m2!1sen!2sde"
              width="500"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-sm:w-[15rem]"
            ></iframe>
          </div>
        </div>
      </div>

      <Message />
    </>
  );
}

export default ContactMain;
