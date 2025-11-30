import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-gray-800 text-white h-full">

            <div
                className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-6"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')" }}
            >
                <div className="backdrop-blur-sm bg-black/40 p-10 rounded-2xl shadow-xl">
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg ">
                        Discover Delicious Meals 🍽️
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl">
                        Search, explore categories, and find random recipes
                    </p>

                    <Link
                        to="/search"
                        className="mt-4 md:mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg md:text-xl rounded-xl shadow-lg transition-transform hover:scale-105"
                    >
                        Search Meals
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 pb-16">

                <Link
                    to="/categories"
                    className="p-6 rounded-2xl shadow-xl bg-gray-900 border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300"
                >
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">Categories</h3>
                    <p className="text-gray-300">
                        Explore meals by different food categories.
                    </p>
                </Link>

                <Link
                    to="/search"
                    className="p-6 rounded-2xl shadow-xl bg-gray-900 border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300"
                >
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">Search Meals</h3>
                    <p className="text-gray-300">
                        Find any meal by name and view detailed instructions.
                    </p>
                </Link>

                <Link
                    to="/random"
                    className="p-6 rounded-2xl shadow-xl bg-gray-900 border border-gray-700 hover:border-blue-500 hover:scale-105 transition duration-300"
                >
                    <h3 className="text-2xl font-bold text-blue-400 mb-3">Random Meal</h3>
                    <p className="text-gray-300">
                        Get a random new recipe to try instantly!
                    </p>
                </Link>

            </div>
        </div>
    );
}
