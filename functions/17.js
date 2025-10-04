/**
 * Checks if a person can open a bank account based on age and residency status.
 * @param {number} age - The age of the person.
 * @param {boolean} isResident - True if the person is a resident, false otherwise.
 * @returns {boolean} True if the person is 18 or older and is a resident, false otherwise.
 *
 * Example: canOpenBankAccount(20, true) should return true.
 */
export function canOpenBankAccount(age, isResident) {
  // TODO: Return true if age is 18 or older and isResident is true
  return age >= 18 && isResident;
}
