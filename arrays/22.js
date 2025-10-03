/**
 * Add a new follower, remove followers with even IDs, and prefix each remaining follower ID with 'ID-'.
 * @param {number[]} followerIDs - The array of follower IDs.
 * @param {number} newFollowerID - The new follower ID to add.
 * @returns {string[]} The new array of modified follower IDs.
 * @example
 * updateFollowers([1, 2, 3, 4], 5); // returns ['ID-1', 'ID-3', 'ID-5']
 */
export function updateFollowers(followerIDs, newFollowerID) {
  // TODO: Use the push() method to add the new follower ID to the array
  // TODO: Use the filter() method to keep follower IDs that are odd
  // TODO: Use the map() method to prefix each remaining ID with 'ID-'
  // TODO: Return the new array of modified follower IDs
  followerIDs.push(newFollowerID);
  return followerIDs
    .filter(id => id % 2 !== 0)
    .map(id => `ID-${id}`);
}
