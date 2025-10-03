/**
 * Calculate the discounted prices for a sale in an e-commerce store.
 * @param {number[]} prices - The array of original product prices.
 * @param {number} discount - The discount percentage to apply.
 * @returns {number[]} The new array of discounted prices.
 * @example
 * applyDiscount([100, 200, 300], 10); // returns [90, 180, 270]
 */
export function applyDiscount(prices, discount) {
  // TODO: Use the map() method to apply the discount to each price
  // Formula: price - (price * discount / 100)
  // TODO: Return the new array of discounted prices
  return prices.map(price => price - price * discount / 100);
}
