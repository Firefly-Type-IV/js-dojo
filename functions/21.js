/**
 * Checks if a number is within a specific range and is even.
 * @param {number} num - The number to check.
 * @param {number} lower - The lower bound of the range.
 * @param {number} upper - The upper bound of the range.
 * @returns {boolean} True if the number is strictly within the range and is even, false otherwise.
 *
 * Example: isWithinRangeAndEven(8, 1, 10) should return true.
 */
export function isWithinRangeAndEven(num, lower, upper) {
  // TODO: Return true if num is greater than or equal to lower, less than or equal to upper, and even
  return num > lower && num < upper && num % 2 ===0;
  const isWithinRange = num > lower && num < upper;
  const isEven = num % 2 === 0;
  return isWithinRange && isEven;
}
