import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
const BookDetails = () => {
  const { bookId } = useParams();
  const booksData = useLoaderData();
  const [displayData, setDisplayData] = useState({});

  useEffect(() => {
    const singleBook = booksData?.find(book => book.bookId == bookId);
    setDisplayData(singleBook);
  }, [bookId, booksData]);

  const {
    image,
    author,
    bookName,
    rating,
    tags,
    category,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = displayData;

  const savedToRead = JSON.parse(localStorage.getItem('read') || '[]');
  const savedToWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

  const [reads, setReads] = useState(savedToRead);
  const [wishlist, setWishlist] = useState(savedToWishlist);

  const handleRead = book => {
    const isExist = reads.find(read => read.bookId == book.bookId);
    if (!isExist) {
      setReads([...reads, book]);
      toast.success('Book added to your Reading list successfully');
    } else {
      toast.warn('You already read this book.');
    }
  };

  const handleWishList = book => {
    const allBook = [...reads, ...wishlist];
    const isExist = allBook.find(read => read.bookId == book.bookId);
    if (!isExist) {
      setWishlist([...wishlist, book]);
      toast.success('Book added to your wishlist successfully');
    } else {
      toast.warn(
        'You have already added this book to your wishlist or reading list'
      );
    }
  };

  useEffect(() => {
    localStorage.setItem('read', JSON.stringify(reads));
  }, [reads]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className="max-w-7xl container h-auto mx-auto">
      <div className="flex flex-col w-full  lg:flex-row  my-5  justify-between gap-10">
        <div className="bg-[#F3F3F3] w-full  rounded-2xl">
          <div className="flex justify-center items-center h-full ">
            <img src={image} alt="" className="max-w-lg container  p-5 " />
          </div>
        </div>

        <div className="w-full h-full flex px-5 flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold font-play mb-3">{bookName}</h1>
            <p className="font-work font-semibold">By: {author}</p>
            <div className="divider w-full border-dashed"></div>
            <p className="font-work font-semibold">{category}</p>
            <div className="divider w-full border-dashed"></div>
            <p className="font-work font-semibold mb-3">
              <span className="font-bold">Review: </span>
              {review}
            </p>
          </div>

          <div className="text-lg  mt-4 font-bold text-[#23BE0A] font-work flex justify-between flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center">
            <h4 className="text-black hidden md:block lg:block">Tag</h4>
            {tags?.map((tag, index) => (
              <div key={index} className=" ">
                <h2 className="bg-[#F3F3F3] p-2 rounded-3xl">#{tag}</h2>
              </div>
            ))}
          </div>
          <div className="divider w-full border-dashed"></div>
          <div className="w-full space-y-4">
            <h2 className="font-work">
              <span className="mr-9">Number of Pages:</span>
              <span className="font-bold">{totalPages}</span>
            </h2>
            <h2 className="font-work ">
              <span className="mr-24">Publisher:</span>
              <span className="font-bold">{publisher}</span>
            </h2>
            <h2 className="font-work ">
              <span className="mr-9">Year of Publishing:</span>
              <span className="font-bold">{yearOfPublishing}</span>
            </h2>
            <h2 className="font-work ">
              <span className="mr-[120px]">Rating:</span>
              <span className="font-bold">{rating}</span>
            </h2>
          </div>
          <div className="font-work text-lg font-semibold mt-6">
            <button
              onClick={() => handleRead(displayData)}
              className="btn mr-6"
            >
              Read
            </button>
            <button
              onClick={() => handleWishList(displayData)}
              className="btn bg-[#50B1C9] text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
