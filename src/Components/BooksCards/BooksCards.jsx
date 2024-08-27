import useBooksData from '../../useBooksData/useBooksData';
import SingleCard from '../SingleCard/SingleCard';

const BooksCards = () => {
  const { booksData } = useBooksData();

  return (
    <div className="max-w-7xl container mx-auto">
      <div className="my-10">
        <h1 className="text-5xl text-center font-play font-bold">Books</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {booksData.map(book => (
          <SingleCard key={book.bookId} book={book}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default BooksCards;
