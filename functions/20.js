/**
 * Determines the price of a movie ticket based on age and membership status.
 * @param {number} age - The age of the person.
 * @param {boolean} isMember - True if the person is a member.
 * @returns {number} The price of the movie ticket.
 *
 * Example: ticketPrice(17, false) should return 8.
 */
export function ticketPrice(age, isMember) {
  // TODO: Determine the price based on the age and membership status
  // Prices: $8 for children (under 18), $10 for adults, $6 for seniors (65+)
  // Members get a $2 discount
  // Initialise variable 'fee' as a number.
  let fee = 0;
  if (age >= 65){
    fee = 6;
    // Check highest age bracket first.
  } else if (age < 18){
    fee = 8;
    // Child.
  } else {
    fee = 10;
    // Remaining age group (18 to 64).
  }
  if (isMember){
    return fee - 2;
  }
  return fee;
  // Ternary operator applies discount if isMember is true, otherwise applies 0: const discount = isMember ? 2 : 0;
}
