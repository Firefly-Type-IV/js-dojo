/**
 * Filter out prices below a certain threshold in an e-commerce store.
 * @param {number[]} prices - The array of product prices.
 * @param {number} threshold - The price threshold.
 * @returns {number[]} The new array of prices strictly above the threshold.
 * @example
 * filterPrices([100, 200, 50, 300], 100); // returns [200, 300]
 */
export function filterPrices(prices, threshold) {
  // TODO: Use the filter() method to get prices above the threshold
  // TODO: Return the new array of filtered prices
  return prices.filter(price => price > threshold);
}
