/**
 * Convert each temperature from Celsius to Fahrenheit in a weather app.
 * @param {number[]} tempsCelsius - The array of temperatures in Celsius.
 * @returns {number[]} The new array of temperatures in Fahrenheit.
 * @example
 * convertToFahrenheit([0, 20, 30]); // returns [32, 68, 86]
 */
export function convertToFahrenheit(tempsCelsius) {
  // TODO: Use the map() method to convert each temperature to Fahrenheit
  // Formula: (Celsius * 9/5) + 32
  // TODO: Return the new array with temperatures in Fahrenheit
  function inFahrenheit(Celsius){
    const Fahrenheit = (Celsius * 9/5) + 32;
    return Fahrenheit
  }
  return tempsCelsius.map(inFahrenheit)
}
