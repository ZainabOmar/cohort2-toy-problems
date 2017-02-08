
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Example:
 * translateRomanNumeral("XXI") // 21
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Example:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var translateRomanNumeral = function(romanNumeral){
	var DIGIT_VALUES = {
	  I: 1,
	  V: 5,
	  X: 10,
	  L: 50,
	  C: 100,
	  D: 500,
	  M: 1000
	};
	var array = romanNumeral.split("")
	for (var i = 0; i < array.length; i++) {
		for(var key in DIGIT_VALUES) {
			if(array[i]=== key) {
				array[i] = DIGIT_VALUES[key]
			}
		}
	}
	var result = 0;
	var array2 = array.sort();
	var array3 = array.sort(function(a, b){return a-b})
	console.log(array3)
	//for (var i = array.length - 1; i >= 0; i--) {
		if(array.sort()===false) {
			return null;
		}
		// if(array[i]>array[i-1]) {
		// 	result = array[i]-array[i-1]
		// }
	// 	else if (array[i]<=array[i-1]){
	// 		result += array[i]
	// 	}
	// }
	//return result;
}