/**
 * Add a new daily step count, remove counts below 5000, and increase each remaining count by 1000.
 * @param {number[]} stepCounts - The array of daily step counts.
 * @param {number} newStepCount - The new daily step count to add.
 * @returns {number[]} The new array of modified step counts.
 * @example
 * updateStepCounts([4000, 7000, 3000, 8000], 6000); // returns [8000, 9000, 7000]
 */
export function updateStepCounts(stepCounts, newStepCount) {
  // TODO: Use the push() method to add the new step count to the array
  // TODO: Use the filter() method to keep step counts that are 5000 or above
  // TODO: Use the map() method to increase each remaining step count by 1000
  // TODO: Return the new array of modified step counts
  stepCounts.push(newStepCount);
  const bonusCount = stepCounts
    .filter(stepCount => stepCount >= 5000)
    .map(stepCount => stepCount + 1000 );
  return bonusCount
}
