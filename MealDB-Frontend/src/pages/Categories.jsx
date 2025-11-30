import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/categories`)
            .then(res => setCategories(JSON.parse(res.data.data).categories || []));
    }, []);

    return (
        <div className="min-h-screen bg-gray-800 text-white px-6 py-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Explore Meal Categories
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            to={`/search/${cat.strCategory}`}
                            key={cat.idCategory}
                            className="bg-gray-900 border border-gray-700 rounded-xl shadow-lg p-5 transition transform hover:scale-105 hover:shadow-blue-500/30 cursor-pointer"
                        >
                            <img
                                src={cat.strCategoryThumb}
                                alt={cat.strCategory}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />

                            <h2 className="text-xl font-bold mb-2">{cat.strCategory}</h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {cat.strCategoryDescription.substring(0, 120)}...
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
