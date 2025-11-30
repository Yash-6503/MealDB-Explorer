import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-green-500 mb-6">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
