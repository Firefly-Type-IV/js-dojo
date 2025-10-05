/**
 * Finds the product of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The product of all numbers smaller than the input.
 *
 * @example
 * // returns 24
 * productSmallerNumbers(5);
 */
export function productSmallerNumbers(input) {
  // TODO: Initialize a variable to hold the product.
  // TODO: Use a for loop to iterate from 1 to one less than the input number.
  // TODO: Multiply each number to the product variable.
  // TODO: Return the product.
  let product = 1;

  const numbers = Array.from({length: input - 1}, (_, i) => i + 1);
  // (_, i) is a concise way to say: "For each step of creating this new array, ignore the default value, but use the index and add 1 to generate an array from 1 to input - 1."

  return numbers.reduce((product, current) => product * current, 1);
  let i = 1;
  while (i < input){
    product *= i;
    i++;
  }
  return product;
}
