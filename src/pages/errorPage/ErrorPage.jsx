import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-base-300 px-4">
      <h1 className="text-7xl font-bold text-error">Oops!</h1>

      <p className="text-2xl mt-2">Something went wrong</p>

      <p className="text-gray-600 mt-2">
        {error?.statusText || error?.message || "Unknown error"}
      </p>

      <Link to="/" className="btn btn-primary mt-8">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
