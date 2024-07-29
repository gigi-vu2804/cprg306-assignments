"use client";
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

// const fetchMealIngredients = async (mealId) => {
//   try {
//     const response = await fetch(
//       `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
//     );
//     if (!response.ok) {
//       throw new Error("Error fetching meal ingredients");
//     }
//     const data = await response.json();
//     console.log("data: ", data);
//     return data.meals || [];
//   } catch (e) {
//     console.error("Error fetching meal ingredients: ", e);
//     return [];
//   }
// };

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="meal-ideas p-2">
      <div className="ml-3">
        <h3 className="text-orange-200 text-lg">Meal Ideas</h3>
        <p className="text-orange-200 text-lg">Ingredient: {ingredient}</p>

        {ingredient === "" ? (
          <p className="text-orange-200 italic text-m">
            <br></br>Note: No meal ideas available! Select an ingredient on the
            left to view meal ideas.
          </p>
        ) : (
          <ul>
            {meals.map((meal, index) => (
              <Link
                key={meal.idMeal}
                href={`https://www.themealdb.com/meal/${meal.idMeal}`}
                target="_blank"
                rel="noreferrer"
              >
                <li
                  key={index}
                  className="flex p-2 m-2 bg-orange-200 max-w-sm rounded cursor-pointer hover:bg-blue-500 transition duration-150 ease-in-out"
                >
                  <p className="ml-1 text-lg font-bold text-amber-900 ">
                    {meal.strMeal}
                  </p>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
