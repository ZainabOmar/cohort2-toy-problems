0000011/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var newArr = [];
	var newArr2 = [];
	var newArr3 =[];
	for (var j = 0; j < matrix[0].length; j++) {
		newArr.push(matrix[0][j])
	}
	matrix = matrix.slice(1)
	for (var i = 0; i < matrix.length; i++) {
		newArr2.push(matrix[i].pop())
	}
	newArr = newArr.concat(newArr2)
	var temp = matrix[matrix.length-1]
	for (var t = temp.length-1; t >= 0 ; t--) {
		newArr3.push(temp[t])
	}
	newArr = newArr.concat(newArr3)
	matrix = matrix.length.splice(matrix.length[matrix.length-1], 1)
	console.log(matrix)
	return newArr;
};