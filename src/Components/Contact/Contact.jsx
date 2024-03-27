const Contact = () => {
  return (
    <div className="max-w-7xl container mx-auto flex flex-col items-center">
      <div className="text-4xl font-bold font-play p-4 text-center lg:p-10">
        <h2>Contact With Us</h2>
      </div>
      <div className="w-full lg:w-[50%] h-auto lg:h-[500px] bg-blue-gray-100 rounded-2xl my-10">
        <div className="w-full flex flex-col items-center   h-full text-xl font-bold font-play  mx-auto p-5 rounded-2xl">
          <div className="w-full">
            <div className="w-full mb-5">
              <h3>Your Name:</h3>
              <input
                className="input w-full"
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5">
              <h3>Your Email:</h3>
              <input
                className="input w-full"
                type="email"
                name=""
                id=""
                placeholder="Your Email Address"
              />
            </div>
          </div>
          <div className="w-full">
            <h3>Your Message:</h3>
            <textarea
              className="text-area w-full pl-5 pt-5 rounded-lg"
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
            ></textarea>
          </div>
          <button className="btn mt-2 bg-green-500 w-full text-white">
            Sent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
