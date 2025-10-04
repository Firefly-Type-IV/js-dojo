/**
 * Adjusts the amount of ingredients needed based on the number of servings.
 * @param {number} baseAmount - The base amount of the ingredient for one serving.
 * @param {number} servings - The number of servings.
 * @returns {number} The adjusted amount of the ingredient.
 *
 * Example: ingredientAmount(2, 4) should return 8.
 */
export function ingredientAmount(baseAmount, servings) {
  // TODO: return the adjusted amount by multiplying baseAmount and servings
  return baseAmount * servings;
}
