import { useState, useEffect } from "react";
import Link from "next/link";

const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
      throw new Error("Error fetching meal ideas");
    }
    const data = await response.json();
    console.log("data: ", data);
    return data.meals || [];
  } catch (e) {
    console.error("Error fetching meal ideas: ", e);
    return [];
  }
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas p-2 m-4 mt-8 ml-8">
      <div className="ml-3">
        <h3 className="text-orange-200 text-lg">Meal Ideas</h3>
        <p className="text-orange-200 text-lg">Ingredient: {ingredient}</p>

        {ingredient == "" ? (
          <p className="text-orange-200 italic text-m">
            <br></br>Note: No meal ideas available! Select an ingredient on the
            left to view meal ideas.
          </p>
        ) : (
          <ul>
            {meals.map((meal, index) => (
              <li
                key={index}
                className="flex p-2 m-4 bg-orange-200 max-w-sm rounded cursor-pointer"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-14 h-14"
                />
                <Link
                  href={`https://www.themealdb.com/meal/${meal.idMeal}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-3 text-lg font-bold text-amber-900 underline hover:text-blue-600"
                >
                  {meal.strMeal}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
