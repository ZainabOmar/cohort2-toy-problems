/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

// function ticTacToe(board){
// 	var counter = 0;
// 	//board = board.toString().split("[")
// 	//board = board[0].split(",")
// 	if (board[0].indexOf(1)===0 && board[1].indexOf(1)===1 && board[2].indexOf(1)===2 || board[0].indexOf(1)===1 && board[1].indexOf(1)===1 && board[2].indexOf(1)===1 ||	board[0].indexOf(1)===2 && board[1].indexOf(1)===2 && board[2].indexOf(1)===2 || board[0].indexOf(1)===2 && board[1].indexOf(1)===1 && board[2].indexOf(1)===0 ||		board[0].indexOf(1)===0 && board[0].indexOf(1)===1 && board[0].indexOf(1)===2 || 		board[1].indexOf(1)===0 && board[1].indexOf(1)===1 && board[1].indexOf(1)===2 ||		board[2].indexOf(1)===0 && board[2].indexOf(1)===1 && board[2].indexOf(1)===2 ) {

// 		return 1;
// }
// if (board[0].indexOf(2)===0 && board[1].indexOf(2)===1 && board[2].indexOf(2)===2 || board[0].indexOf(2)===1 && board[1].indexOf(2)===1 && board[2].indexOf(2)===1 ||  	board[0].indexOf(2)===2 && board[1].indexOf(2)===2 && board[2].indexOf(2)===2 || 	board[0].indexOf(2)===2 && board[1].indexOf(2)===1 && board[2].indexOf(2)===0 || 	board[0].indexOf(2)===0 && board[0].indexOf(2)===1 && board[0].indexOf(2)===2 || 	board[1].indexOf(2)===0 && board[1].indexOf(2)===1 && board[1].indexOf(2)===2 || board[2].indexOf(2)===0 && board[2].indexOf(2)===1 && board[2].indexOf(2)===2 ) {
// 	return 2;
// }
// for (var i = 0; i < board.length; i++) {
// 	if (board[0][i] === 0 || board[1][i] === 0 || board[2][i] === 0) {
// 		counter ++;
// 	}
// }
// if (counter >= 2) {
// 	return -1;
// console.log(counter)
// }
// };

function checkRow(row) {
	var counter1 = 0;
	var counter2 = 0;
	for(var i = 0; i<row.lenght; i++) {
		if (row[i] === 1) {
			counter1 ++;
		}
		if (row[i] === 2) {
			counter2 ++;
		}
	}
	if (counter1 === 3 || counter2 === 3) {
		return true;
	}
}

function checkCol (col) {
	var counter1 = 0;
	var counter2 = 0;
	for(var i = 0; i<col.lenght; i++) {
		if (col[i] === 1) {
			counter1 ++;
		}
		if (col[i] === 2) {
			counter2 ++;
		}
	}
	if (counter1 === 3 || counter2 === 3) {
		return true;
	}
}

// function checkDiagonal (diagonal) {
// 	for (var i = 0; i < Things.length; i++) {
// 		Things[i]
// 	}
// }

function ticTacToe(board){
	for (var i = 0; i < board.length; i++) {
		if(checkRow(board[i]) === true || checkCol(board[i]) === true) {
		
	}

	}
}