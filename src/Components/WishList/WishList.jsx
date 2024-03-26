import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { IoPeopleSharp } from 'react-icons/io5';

const WishList = ({ book }) => {
  return (
    <div className="hero mx-auto mt-20 shadow-2xl rounded-3xl border-2 border-gray-200">
      <div className="hero-content h-auto w-full justify-around items-start flex-col  lg:flex-row">
        <img
          src={book.image}
          className="max-w-sm w-full lg:w-60 h-80 border-2 border-gray-500 p-5  ml-0 bg-base-200 rounded-lg shadow-2xl"
        />
        <div>
          <h2 className="text-2xl font-bold font-play mt-5 mb-3">
            {book.bookName}
          </h2>
          <p className="font-work font-semibold">By: {book.author}</p>
          <div className="flex flex-col lg:flex-row gap-5 my-5 justify-between items-start lg:items-center text-lg font-bold font-work">
            <div className="text-lg my-5  items-center  font-bold text-[#23BE0A]  flex  justify-between  gap-3">
              <span className="text-black hidden md:block lg:block">Tag</span>
              {book.tags.map((tag, index) => (
                <div key={index} className=" ">
                  <h2 className="bg-[#F3F3F3] p-2 rounded-3xl">#{tag}</h2>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-lg font-semibold font-work">
              <IoLocationOutline></IoLocationOutline>
              Year of Publishing:
              <span>{book.yearOfPublishing}</span>
            </div>
          </div>
          <div className="flex items-start lg:items-center flex-col lg:flex-row justify-between gap-3">
            <div className="flex items-start lg:items-center gap-3">
              <p>
                <IoPeopleSharp></IoPeopleSharp>
              </p>
              <p>Publisher: {book.publisher}</p>
            </div>
            <div className="flex items-center gap-3">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M9 16.5V17.25M12 14.25V17.25M15 12V17.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z"
                    stroke="#131313"
                    stroke-opacity="0.6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p>Page: {book.totalPages}</p>
            </div>
          </div>
          <div className="font-work  font-semibold flex flex-col lg:flex-row items-start justify-between lg:items-center w-full space-y-5">
            <p className="bg-blue-100 mt-4 p-3 rounded-3xl text-[#328EFF]">
              Category: {book.category}
            </p>
            <p className="bg-orange-100 p-3 rounded-3xl  text-[#FFAC33]">
              Rating:{book.rating}
            </p>
            <Link to={`/book-details/${book.bookId}`}>
              {' '}
              <button className="p-3 rounded-3xl text-white text-lg font-bold bg-[#23BE0A]">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
