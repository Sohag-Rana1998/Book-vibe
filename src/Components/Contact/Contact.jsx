import { FaPhoneAlt } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
const Contact = () => {
  return (
    <div className="max-w-7xl container mx-auto">
      <div className="lg:relative">
        <div className="w-full h-[450px]  bg-black rounded-2xl flex justify-between items-center">
          <div className="text-white text-center md:text-left lg:text-left pl-4 lg:pl-14">
            <h1 className="text-5xl font-play  font-bold ">Get In Touch</h1>
            <p className="font-work">
              Want to get in touch? We&nbsp;d love to hear from you. Here&nbsp;s
              how you can reach us.
            </p>
          </div>
          <img
            src="https://i.postimg.cc/3RXvFz8R/R5A5846.webp"
            alt=""
            className="rounded-l-full h-full  w-full hidden md:block lg:block"
          />
        </div>
        <div className="flex flex-col justify-center lg:flex-row lg:justify-around items-center gap-10 lg:absolute lg:-bottom-80 lg:px-10">
          <div className="w-full h-[400px] bg-white flex flex-col justify-center items-center border-2 border-gray-300 rounded-2xl px-5 mx-auto">
            <FaPhoneAlt className="text-5xl font-bold mb-5"></FaPhoneAlt>
            <h2 className="text-2xl font-bold font-play">Talk to Donate us</h2>
            <p className="font-bold">
              {" "}
              This is completly free website so we have to take your donation to
              keep our service . If you want to donate us then you can talk to
              our customer care team anytime
            </p>
            <h1 className="font-bold text-3xl mt-5">+880123456789</h1>
            <h1 className="font-bold text-3xl mt-3">+880123456789</h1>
          </div>
          <div className="w-full  mx-auto h-[400px] px-5 bg-white flex flex-col rounded-2xl justify-center items-center border-2 border-gray-300">
            <LuMessageSquare className="text-5xl font-bold mb-5"></LuMessageSquare>
            <h1 className="text-2xl font-bold font-play">
              Contact Customer Support
            </h1>
            <p className="font-bold">
              Sometimes you need a little help from your friends. Or a Book vibe
              support rep. Don&nbsp;t worry… we&nbsp;re here for you.
            </p>
            <button className="btn bg-green-500 mt-8 text-white">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] lg:h-[550px] mt-5 mb-60 lg:mt-[400px] lg:mb-40">
        <h1 className="text-5xl font-bold font-play text-center my-5">
          Connect with one of our global offices
        </h1>
        <img
          src="https://i.ibb.co/9sV5KL5/Screenshot-359.png"
          alt=""
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Contact;
