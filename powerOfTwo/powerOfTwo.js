/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var temp = num%70
	var n = 0;
	var x = 0;
	//var array1 = temp.toString().split("")
	if(num>=69) {
		for (var i = temp; i < 0; i--) {
			n = Math.pow(2, 69)
			n.toString().split("")
			for (var j = 0; j < n.length; j++) {
				x += parseFloat(n[j])
			}
		}
	}

	return ;
}