/**
 * Checks if a number is between two other numbers.
 * @param {number} num - The number to check.
 * @param {number} lower - The lower bound.
 * @param {number} upper - The upper bound.
 * @returns {boolean} True if num is strictly between lower and upper, false otherwise.
 *
 * Example: isBetween(5, 1, 10) should return true.
 */
export function isBetween(num, lower, upper) {
  // TODO: Return true if num is greater than lower and less than upper
  return upper > num && num > lower;
}
