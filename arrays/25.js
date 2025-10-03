/**
 * Add a new score, remove scores below 50, and increase each remaining score by 20%.
 * @param {number[]} scores - The array of scores.
 * @param {number} newScore - The new score to add.
 * @returns {number[]} The new array of modified scores.
 * @example
 * updateScores([45, 55, 65, 75], 85); // returns [66, 78, 90, 102]
 */
export function updateScores(scores, newScore) {
  // TODO: Use the push() method to add the new score to the array
  // TODO: Use the filter() method to keep scores that are 50 or above
  // TODO: Use the map() method to increase each remaining score by 20% using the formula: score * 1.2
  // TODO: Return the new array of modified scores
  scores.push(newScore)
  return scores
    .filter(score => score >= 50)
    .map(score => score * 1.2)
}
