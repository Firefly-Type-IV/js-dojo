/**
 * Finds the sum of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all numbers smaller than the input.
 *
 * @example
 * // returns 10
 * sumSmallerNumbers(5);
 */
export function sumSmallerNumbers(input) {
  // TODO: Initialize a variable to hold the sum.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Add each number to the sum variable.
  // TODO: Return the sum.
  let sum = 0;
  for (let i = 1; i < input; i++){
    sum += i;
  }
  // Return outside a for loop to ensure the the loop completes its full iteration, unless short-circuit return i.e. Looking for first match.
  return sum;
}
