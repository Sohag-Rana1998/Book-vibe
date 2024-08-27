import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <img src="https://i.postimg.cc/dQ9CkMNN/Screenshot-354.png" alt="" />
      <Link to={"/"}>
        <button className="btn mt-5">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
