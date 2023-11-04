import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="max-w-6xl mx-auto text-center">
      <div className="flex justify-center items-center md:mt-14">
      <img className="w-4/6" src="https://i.ibb.co/hfH5HWG/404-page-not-found-illustration-2048x998-yjzeuy4v.png" alt="" />
      </div>
      <h1 className="font-serif text-center font-bold md:text-5xl text-blue-950  mt-6">Page Not Found</h1>
      <Link to="/" className="text-xl text-center underline text-blue-600 hover:text-blue-800 "> Go Home</Link>
        </div>
    );
};

export default ErrorPage;