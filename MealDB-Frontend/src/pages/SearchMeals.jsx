import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function SearchMeals() {
    const { urlName } = useParams();

    const [name, setName] = useState(urlName || "");
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (urlName) {
            fetchMealsByName(urlName);
        }
    }, [urlName]);

    const fetchMealsByName = async (mealName) => {
        if (!mealName.trim()) return;
        try {
            const res = await axios.get(`${BASE_URL}/search?name=${mealName}`);
            setResult(JSON.parse(res.data.data).meals || []);
        } catch (err) {
            console.error("Error fetching meals:", err);
            setResult([]);
        }
    };

    const handleSearch = async () => {
        await fetchMealsByName(name);
    };

    return (
        <div className="min-h-screen bg-gray-800 text-white px-6 py-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Discover Your Favorite Meals
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <input
                        type="text"
                        placeholder="Search meal by name"
                        className="w-full sm:w-96 p-3 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button
                        onClick={handleSearch}
                        className="bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 px-6 py-2 sm:py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Search
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {result.map((meal) => (
                        <Link
                            key={meal.idMeal}
                            to={`/meal/${meal.idMeal}`}
                            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:scale-105 hover:shadow-blue-500/30 transition transform duration-300"
                        >
                            <img src={meal.strMealThumb} alt="" className="w-full h-48 object-cover" />
                            <h2 className="text-xl font-semibold p-4">{meal.strMeal}</h2>
                        </Link>
                    ))}
                </div>

                {result.length === 0 && name.trim() !== "" && (
                    <p className="text-gray-400 mt-8 text-lg">No meals found. Try searching something else.</p>
                )}
            </div>
        </div>
    );
}
