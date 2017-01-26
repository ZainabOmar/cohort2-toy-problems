/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch1 = function (array, target) {
  for (var i = 0; i < array.length; i++) {
  	if (array[i] === target) {
  		return i;
  	}
  }
};


var binarySearch2 = function (array, target) {
	// var maxInd = array.length-1;
	// var minInd = 0;
	// var midInd = Math.floor(maxInd-minInd/2);
	//var arr1 = x.splice(Math.floor(x.length/2), Math.ceil(x.lenght/2))
	var arr2 = Math.floor(array.length/2);
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i]===target) {
			return i;
		}
	}
	for (var j = 0; j < arr2.length; j++) {
		if (arr2[j] === target) {
			return j;
		}
	}
	return -1;
};