/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */



var largestProductOfThree = function(array) {
	var result = 1;
	var x = 0;
	var counter = 0;
	for (var i = 0; i < array.length; i++) {
		if (array[i] < 0) {
			counter++;
		}
	}
	if (counter === 0 || counter === array.length) {
		for (var i = 3; i > 0; i--) {
			x = Math.max(...array)
			result = result * x
			array.splice(array.indexOf(x))
		}
	}
	return result;
};
