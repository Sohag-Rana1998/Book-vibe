import { FaChevronDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Read from '../Read/Read';
import WishList from '../WishList/WishList';

const ListedBooks = () => {
  const readBooks = JSON.parse(localStorage.getItem('read') || '[]');
  const wishBooks = JSON.parse(localStorage.getItem('wishlist') || '[]');

  const [displayReadBooks, setReadBooks] = useState([]);
  const [displayWishListBooks, setWishListBooks] = useState([]);

  useEffect(() => {
    setReadBooks(readBooks);
  }, []);

  useEffect(() => {
    setWishListBooks(wishBooks);
  }, []);

  const handleSortByRating = () => {
    const newBooks = readBooks.sort((a, b) => (a.rating > b.rating ? 1 : -1));
    const newWishList = wishBooks.sort((a, b) =>
      a.rating > b.rating ? 1 : -1
    );
    console.log(newBooks);
    setReadBooks(newBooks);
    setWishListBooks(newWishList);
  };

  const handleSortByPages = () => {
    const newBooks = readBooks.sort((a, b) =>
      a.totalPages > b.totalPages ? 1 : -1
    );
    const newWishList = wishBooks.sort((a, b) =>
      a.totalPages > b.totalPages ? 1 : -1
    );
    console.log(newBooks);
    setReadBooks(newBooks);
    setWishListBooks(newWishList);
  };

  const handleSortByPublishYear = () => {
    const newBooks = readBooks.sort((a, b) =>
      a.yearOfPublishing > b.yearOfPublishing ? 1 : -1
    );
    const newWishList = wishBooks.sort((a, b) =>
      a.yearOfPublishing > b.yearOfPublishing ? 1 : -1
    );
    console.log(newBooks);
    setReadBooks(newBooks);
    setWishListBooks(newWishList);
  };

  return (
    <div className="max-w-7xl container mx-auto mt-10 mb-5 lg:mb-40">
      <div className="h-28 w-full  bg-gray-200 rounded-2xl flex items-center justify-center">
        <h1 className="text-5xl  font-play font-bold">Books</h1>
      </div>
      <div>
        <div className="text-center mt-5 ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  m-1 bg-[#23BE0A] flex items-center gap-4 text-white text-lg font-work font-semibold"
            >
              Sort By <FaChevronDown></FaChevronDown>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  text-lg font-work font-semibold text-center"
            >
              <li className="">
                <a onClick={() => handleSortByRating()}>Rating</a>
              </li>
              <li>
                <a onClick={() => handleSortByPages()}>Number of pages</a>
              </li>
              <li>
                <a onClick={() => handleSortByPublishYear()}>Publisher year</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div>
            <div role="tablist" className="tabs tabs-lifted">
              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-lg font-work font-bold"
                aria-label="Read Books"
                defaultChecked
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100  rounded-box "
              >
                <div className="">
                  {displayReadBooks.map(book => (
                    <Read key={book.bookId} book={book}></Read>
                  ))}
                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab text-lg font-work font-bold"
                aria-label="Wishlist Books"
              />
              <div
                role="tabpanel"
                className="tab-content bg-base-100  rounded-box p-6"
              >
                <div>
                  {displayWishListBooks.map(book => (
                    <WishList key={book.bookId} book={book}></WishList>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
