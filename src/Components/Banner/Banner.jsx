import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="max-w-7xl container mx-auto h-auto lg:h-[550px] bg-gray-200 rounded-3xl flex flex-col-reverse lg:flex-row  justify-around items-center p-5">
      <div className="text-center lg:text-left">
        <h1 className="font-play text-4xl lg:text-6xl font-bold">
          Books to freshen <br /> up your bookshelf
        </h1>

        <NavLink to={'/listed-books'}>
          {' '}
          <button className="btn font-bold text-xl font-work text-white bg-[#23BE0A] mt-4 lg:mt-10">
            View The List{' '}
          </button>
        </NavLink>
      </div>
      <div className="w-full lg:w-[320px] h-60 lg:h-[400px]">
        <img
          className="w-full h-full"
          src="https://i.ibb.co/K9cRc0X/banner.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
