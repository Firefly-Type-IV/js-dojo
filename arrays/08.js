/**
 * Add a new price to the beginning of the array.
 * @param {number[]} prices - The array of prices.
 * @param {number} newPrice - The new price to add.
 * @returns {number[]} The updated array of prices.
 * @example
 * addNewPrice([5.99, 15.99, 9.99, 25.99, 18.99], 3.99); // returns [3.99, 5.99, 15.99, 9.99, 25.99, 18.99]
 */
export function addNewPrice(prices, newPrice) {
  // TODO: Use the unshift() method to add the new price to the beginning of the array
  // TODO: Return the updated array
  // NOTE: push() & unshift() modify to an array, pop() and shift() remove and return that item from the array.
  prices.unshift(newPrice);
  return prices;
}
