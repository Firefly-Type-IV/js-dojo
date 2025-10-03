/**
 * Add a new temperature to the end of the array.
 * @param {number[]} temperatures - The array of temperatures.
 * @param {number} newTemp - The new temperature to add.
 * @returns {number[]} The updated array of temperatures.
 * @example
 * addTemperature([22, 23, 19, 25, 21], 26); // returns [22, 23, 19, 25, 21, 26]
 */
export function addTemperature(temperatures, newTemp) {
  // TODO: Use the push() method to add the new temperature to the end of the array
  // TODO: Return the updated array
  // temperatures is the name of the array
  // push() method for add to end of the array
  // newTemp is the variable holding the new value
  temperatures.push(newTemp);
  return temperatures
}
