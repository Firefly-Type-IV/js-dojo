/**
 * Get the even numbers from an array of ages in a social app.
 * @param {number[]} ages - The array of ages.
 * @returns {number[]} The new array containing only even ages.
 * @example
 * filterEvenAges([21, 22, 23, 24, 25]); // returns [22, 24]
 */
export function filterEvenAges(ages) {
  // TODO: Use the filter() method to get even numbers from the array
  // TODO: Return the new array of even ages
  const evenAges = ages.filter(age => age % 2 === 0);
  return evenAges;
}
