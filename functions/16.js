/**
 * Checks if a year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 *
 * Example: isLeapYear(2020) should return true.
 */
export function isLeapYear(year) {
  // TODO: Return true if year is divisible by 4 and (not divisible by 100 or divisible by 400)
  return year / 4 && year % 100 || 400 === 0; 
}
