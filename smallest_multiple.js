/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */

module.exports = function( ceiling ) {
  const numbers = [ ];
  let result = 1;
  let gotSolution = false; // need a tracking variable to fire passes
  // populate array with numbers up to the ceiling
  // if you test the larger numbers first, you can shorten execution time.
  for (let i = ceiling; i >= 1; i--) {
    numbers.push(i);
  }
  
  while (!gotSolution) {
    // every number tested must pass the solution.
    for (let i = 0; i < numbers.length; i++) {
      // test divisibility with result
      if (result % numbers[i] === 0) {
        gotSolution = true;
      } else {
        // increments result, instructs while loop to repeat
        gotSolution = false;
        result++;
        break;
      }
    }
  }

  return result;
};