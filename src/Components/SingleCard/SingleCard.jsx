import { Link } from 'react-router-dom';
import { FaRegStar } from 'react-icons/fa';
const SingleCard = ({ book }) => {
  const { bookId, image, author, bookName, rating, tags, category } = book;
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="h-full py-5">
        <div className="cursor-pointer p-10 w-full bg-base-100 h-full shadow-xl border-2 rounded-2xl border-gray-400">
          <div className="rounded-3xl h-80 bg-[#F3F3F3]  w-full ">
            <img
              src={image}
              alt=""
              className="w-full h-full mx-auto my-auto px-16 py-10"
            />
          </div>

          <div className="text-lg  mt-4 font-bold text-[#23BE0A] font-work flex justify-between items-center">
            {tags.map((tag, index) => (
              <div key={index} className=" ">
                <h2 className="bg-[#F3F3F3] p-2 rounded-3xl">{tag}</h2>
              </div>
            ))}
          </div>
          <div className="text-left py-5 space-y-4 w-full ">
            <h2 className="text-2xl font-bold font-play">{bookName}</h2>
            <p className="font-work font-semibold">By: {author}</p>
            <div className="divider w-full border-dashed"></div>
            <div className="font-work m-0 font-semibold flex justify-between items-center w-full">
              <p>{category}</p>
              <p className="flex items-center gap-3">
                {rating} <FaRegStar></FaRegStar>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleCard;
