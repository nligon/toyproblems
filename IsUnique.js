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
}

var someString = 'abbc';
console.log(isUnique(someString));