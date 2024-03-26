import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <img src="https://i.ibb.co/cFJL82D/Screenshot-354.png" alt="" />
      <Link to={'/'}>
        <button className="btn mt-5">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
