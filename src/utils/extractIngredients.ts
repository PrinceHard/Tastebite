import { ApiResponse, Meal } from "~/types";

export default function extractIngredients(apiResponse: ApiResponse): string[] {
  const ingredients: string[] = [];

  apiResponse.meals.forEach((meal) => {
    for (let i = 1; i <= 20; i++) {
      const ingredientKey: keyof Meal = `strIngredient${i}` as keyof Meal;
      const measureKey: keyof Meal = `strMeasure${i}` as keyof Meal;

      if (meal[ingredientKey] && meal[measureKey]) {
        const ingredientString = `${meal[measureKey]} ${meal[ingredientKey]}`;
        ingredients.push(ingredientString);
      }
    }
  });

  return ingredients;
}
