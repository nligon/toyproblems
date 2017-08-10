// Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

// naive implementation
// function deleteNth(arr, x) {
//   var hash = {};
//   var results = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (hash[arr[i]] === undefined) {
//       hash[arr[i]] = 1;
//       results.push(arr[i]);
//     } else if (hash[arr[i]] < x) {
//       results.push(arr[i])
//       hash[arr[i]]++;
//     }
//   }
//   return results;
// }


// implementation using ES6, ternary operators, binary conditionals, and reduce
const deleteNth = (arr, x) => {
  let hash = {};
  return arr.reduce((total, value) => {
    !hash[value] ? hash[value] = 1 : hash[value]++;
    hash[value] <= x && total.push(value);
    return total;
  }, []);
};

console.log(deleteNth([20, 37, 20, 21], 1)) // [20,37,21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]