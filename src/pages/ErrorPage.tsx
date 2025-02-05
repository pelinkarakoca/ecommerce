import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg text-gray-600">Oops! Page not found.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
