/**
 * Checks if a person is eligible to vote based on age, citizenship, and registration status.
 * @param {number} age - The age of the person.
 * @param {boolean} isCitizen - True if the person is a citizen.
 * @param {boolean} isRegistered - True if the person is registered to vote.
 * @returns {boolean} True if the person is eligible to vote, false otherwise.
 *
 * Example: canVote(20, true, true) should return true.
 */
export function canVote(age, isCitizen, isRegistered) {
  // TODO: Return true if age is 18 or older, isCitizen is true, and isRegistered is true
  return age >= 18 && isCitizen && isRegistered;
}
