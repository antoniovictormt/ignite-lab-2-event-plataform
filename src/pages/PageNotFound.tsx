import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex items-center justify-center">
      <div className="px-10 lg:px-40 py-8 lg:py-20 bg-gray-700 border border-gray-500 rounded">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-red-500 text-9xl">404</h1>
          <h6 className="mb-2 text-2xl font-bold text-center md:text-3xl">
            Page not found
          </h6>

          <p className="mb-8 text-center md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="/"
            className="px-8 py-4 mt-4 bg-green-500 uppercase rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
