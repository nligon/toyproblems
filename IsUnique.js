// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

// O(N), constant time complexity solution using hash table.
var isUnique = function(string) {
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (obj[i]) {
      return false;
    } else {
      obj[i] = true;
    }
  }
  return true;
};

// O(N^2), exponential time complexity solution, without additional data structures.
var isUnique = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i; j < string.length; j++) {
      if (string[i] === string[i + 1]) {
        return false;
      }
    }
  }
  return true;
};