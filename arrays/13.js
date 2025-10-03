/**
 * Double the number of likes on each video on a video-sharing app.
 * @param {number[]} likes - The array of likes on videos.
 * @returns {number[]} The new array of likes doubled.
 * @example
 * doubleLikes([100, 200, 300]); // returns [200, 400, 600]
 */
export function doubleLikes(likes) {
  // TODO: Use the map() method to double each like count
  // TODO: Return the new array with doubled likes
  function double(like){
    return 2 * like;
  }
  // return likes.map(double);
  // Arrow functions are a concise way to write js functions, as the function keyword is omitted and return is implied.
  return likes.map(like => 2 * like);
}
