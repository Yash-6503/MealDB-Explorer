import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function MealDetails() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/meal/${id}`)
            .then(res => setMeal(JSON.parse(res.data.data).meals[0]));
    }, [id]);

    if (!meal) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-100">
            <h1 className="text-2xl">Meal not Found...</h1>
        </div>
    );

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
        }
    }

    const youtubeId = meal.strYoutube ? meal.strYoutube.split("v=")[1] : null;

    return (
        <div className="min-h-screen bg-gray-800 text-gray-100 py-10 px-4 flex justify-center">
            <div className="max-w-4xl w-full flex flex-col space-y-10">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Meal Details
                </h1>

                <div className="w-full">
                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full h-64 md:h-96 object-cover aspect-auto rounded-2xl shadow-lg"
                    />
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-green-400 mb-4">{meal.strMeal}</h1>
                    <p className="text-gray-300 mb-4">{meal.strCategory} | {meal.strArea}</p>

                    <h2 className="text-2xl font-bold text-green-400 mt-4 mb-2">Ingredients</h2>
                    <ul className="list-disc list-inside text-gray-200 space-y-1">
                        {ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>

                    <h2 className="text-2xl font-bold text-green-400 mt-4 mb-2">Instructions</h2>
                    <p className="text-gray-200 whitespace-pre-line mb-4">{meal.strInstructions}</p>

                    {meal.strSource && (
                        <a
                            href={meal.strSource}
                            target="_blank"
                            className="inline-block mt-4 bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg shadow font-semibold transition-colors"
                        >
                            View Full Recipe
                        </a>
                    )}
                </div>

                {youtubeId && (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${youtubeId}`}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}
