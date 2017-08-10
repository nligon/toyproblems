// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer

// naive implementation:

/*

function squareDigits(num) {
  //may the code be with you
  // convert the num to a string
  var inputString = num.toString();
  // create a results string
  var results = '';
  // loop over the input string
  for (var i = 0; i < inputString.length; i++) {
    // for each integer, square it and push to results
    results = results.concat(Math.pow(inputString[i], 2));
  };
  // convert results to integer, return
  return parseInt(results);
}

*/

// Single-line implementation ES6 / Array.prototype.reduce implementation
const squareDigits = num =>
  ~~('' + num).split('').reduce((total, val) => total + val * val, '');

// tests:
console.log((squareDigits(1234) === 14916) ? 'pass' : 'fail');