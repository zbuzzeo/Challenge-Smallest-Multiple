/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  let i = ceiling;

  function checkI(i) {
    for (let k = 1; k <= ceiling; k++) {
      if (i % k !== 0) {
        return false;
      }
    }
    return true;
  }

  while (!(checkI(i))) { i += ceiling };
  return i;
};