import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function RandomMeal() {
    const [meal, setMeal] = useState(null);

    const fetchRandom = () => {
        axios.get(`${BASE_URL}/random`)
            .then(res => setMeal(JSON.parse(res.data.data).meals[0]));
    };

    useEffect(() => { fetchRandom(); }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-800 text-gray-100 py-10 px-4">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Random Meal Generator
            </h1>

            <button
                onClick={fetchRandom}
                className="bg-green-600 hover:bg-green-500 cursor-pointer transition-colors text-white px-6 py-3 rounded-lg shadow-lg font-semibold mb-8"
            >
                I'm feeling hungry
            </button>

            {meal && (
                <div className="w-full max-w-sm bg-gray-900 rounded-xl shadow-xl overflow-hidden transition-transform transform hover:scale-105">
                    <Link
                        key={meal.idMeal}
                        to={`/meal/${meal.idMeal}`}
                    >
                    
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-green-400 mb-2">{meal.strMeal}</h2>
                        <p className="text-gray-300 text-sm mb-2">{meal.strCategory} | {meal.strArea}</p>
                        <a
                            href={meal.strSource || "#"}
                            target="_blank"
                            className="inline-block mt-2 text-green-500 hover:text-green-400 font-medium"
                        >
                            View Recipe
                        </a>
                    </div>
                    </Link>
                </div>
            )}
        </div>
    );
}
