import React from "react";
import { Link } from "react-router-dom";

export default function MealCard({ meal }) {
    return (
        <div className="meal-card">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="meal-info">
                <h4>{meal.strMeal}</h4>
                <p>{meal.strArea ? meal.strArea : ""}</p>
                <Link to={`/meal/${meal.idMeal}`}>View details</Link>
            </div>
        </div>
    );
}
