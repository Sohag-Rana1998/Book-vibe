import Banner from '../Banner/Banner';
import BooksCards from '../BooksCards/BooksCards';

const Home = () => {
  return (
    <div className="max-w-7xl container mx-auto">
      <Banner></Banner>
      <BooksCards></BooksCards>
    </div>
  );
};

export default Home;
