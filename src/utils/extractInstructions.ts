import {ApiResponse} from "../types"

export default function extractInstructions(apiResponse: ApiResponse): string[] {
  const instructions: string[] = [];

  apiResponse.meals.forEach((meal) => {
    const steps = meal.strInstructions.split('\r\n');
    instructions.push(...steps);
  });

  return instructions;
}
