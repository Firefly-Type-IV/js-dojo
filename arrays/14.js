/**
 * Append the year to each book title in a library system.
 * @param {string[]} titles - The array of book titles.
 * @param {number} year - The year to append.
 * @returns {string[]} The new array of book titles with the year appended.
 * @example
 * appendYear(['Book One', 'Book Two'], 2024); // returns ['Book One (2024)', 'Book Two (2024)']
 */
export function appendYear(titles, year) {
  // TODO: Use the map() method to append the year to each title
  // TODO: Return the new array with the year appended to each title
  return titles.map(title => `${title} (${year})`)
}
