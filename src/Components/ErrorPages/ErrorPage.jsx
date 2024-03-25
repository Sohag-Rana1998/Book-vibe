import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex h-screen justify-center items-center text-5xl">
      OPPS.
      <Link to={'/'}>
        <button className="btn">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
