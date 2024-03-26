import { Link } from 'react-router-dom';
import { IoLocationOutline } from 'react-icons/io5';
import { IoPeopleSharp } from 'react-icons/io5';

const Read = ({ book }) => {
  return (
    <div className="mt-14  w-full bg-base-100 h-full shadow-xl border-2 rounded-2xl border-gray-400 ">
      <div className="rounded-3xl h-70 w-full lg:h-96 bg-[#F3F3F3]">
        <img
          src={book.image}
          alt=""
          className="w-[50%] h-full mx-auto my-auto px-0 lg:px-16 lg:py-10"
        />
      </div>
    </div>
  );
};

export default Read;
