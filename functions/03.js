/**
 * Calculates the distance that can be traveled with a given amount of fuel.
 * @param {number} fuelAmount - The amount of fuel in liters.
 * @param {number} fuelEfficiency - The fuel efficiency in kilometers per liter.
 * @returns {number} The distance that can be traveled.
 *
 * Example: travelDistance(20, 15) should return 300.
 */
export function travelDistance(fuelAmount, fuelEfficiency) {
  // TODO: return the distance by multiplying fuelAmount and fuelEfficiency
  return fuelAmount * fuelEfficiency;
}
