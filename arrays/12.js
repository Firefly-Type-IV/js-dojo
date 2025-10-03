/**
 * Add a hashtag to each trending topic on a social media app.
 * @param {string[]} topics - The array of trending topics.
 * @returns {string[]} The new array of topics with hashtags.
 * @example
 * addHashtags(['coding', 'javascript', 'webdev']); // returns ['#coding', '#javascript', '#webdev']
 */
export function addHashtags(topics) {
  // TODO: Use the map() method to add a hashtag to each topic
  // TODO: Return the new array of topics with hashtags
  // Pure & imPure functions, pure functions do not affect the original array/ object i.e. filter(), map() but imPure functions like push() as you can never determine its output solely reading it
  return topics.map(topic => `#${topic}`)
}
