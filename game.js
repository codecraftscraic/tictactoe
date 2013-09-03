/**
 * @author Jennifer Jensen
 */

var BLANKSPOT = 0;
var MARK_X = 1;
var MARK_O = 2;

var gameStateArray = new Array();
gameStateArray[0] = 0;
gameStateArray[1] = 0;
gameStateArray[2] = 0;
gameStateArray[3] = 0;
gameStateArray[4] = 0;
gameStateArray[5] = 0;
gameStateArray[6] = 0;
gameStateArray[7] = 0;
gameStateArray[8] = 0;

//on click, sets X or O to visible
function setMarkVisible(id, visible, mark) 
{
	var mark = document.getElementById(id+mark);
	mark.style.visibility = (visible ? 'visible' : 'hidden');
}

//checks to see if cell is available for a mark
function cellAvailable(cell)
{
	return (gameStateArray[cell] === BLANKSPOT);
}

//counts the marks on the board
function countMarkFrequency(cell1, cell2, cell3)
{
	var ocounter = 0;
	var xcounter = 0;
	var blankcounter = 0;
	
	if (cell1 === MARK_O)
	{
		ocounter = ocounter + 1;
	}
	else if (cell1 === MARK_X)
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
	}
	
	if (cell2 === MARK_O)
	{
		ocounter = ocounter + 1;
	}
	else if (cell2 === MARK_X)
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
	}
	
	if (cell3 === MARK_O)
	{
		ocounter = ocounter + 1;
	}
	else if (cell3 === MARK_X)
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
	}
	
	return new Array(blankcounter, xcounter, ocounter);
	
}

//checks for a winning opportunity or a need to block X from winning
function checkForWinOrBlock(cell1, cell2, cell3)
{
	var counters = countMarkFrequency(gameStateArray[cell1], gameStateArray[cell2], gameStateArray[cell3]);
	
	if (counters[2] === 2 && counters[0] === 1)
	{
		return true;
	}
	else if (counters[1] === 2 && counters[0] === 1)
	{
		return false;
	}
	else
	{
		return null;
	}
}

//if no opportunity to win or need to block, starts the progression of play towards an O win
function checkForProgression(cell1, cell2, cell3)
{
	var counters = countMarkFrequency(gameStateArray[cell1], gameStateArray[cell2], gameStateArray[cell3]);
	
	if (counters[2] === 1 && counters[1] === 0)
	{
		return true;
	}
	else
	{
		return null;
	}
}

//find first blank in given array
function findFirst0InArray(cellArray) 
{
	return (cellArray.indexOf(0));
}

//looks for first blank on the game board
function findFirst0InGameBoardArray() 
{
	return (gameStateArray.indexOf(0));
}

function playMark(arrpos, mark)
{
	if (mark === "X")
	{
		gameStateArray[arrpos] = MARK_X;
		setMarkVisible("cell"+arrpos, "visible", "X");
	}
	else if (mark === "O")
	{
		gameStateArray[arrpos] = MARK_O;
		setMarkVisible("cell"+arrpos, "visible", "O");
	}
	else
	{
		console.log("I didn't play an X or an O. You missed a case!")
	}
}

//handles O's response to an X play
function oPlay()
{
	//main game play
	//check for win
	if (checkForWinOrBlock(0, 1, 2) === true)
	{
		console.log("1");
		var cellArray = new Array(gameStateArray[0], gameStateArray[1], gameStateArray[2]);
		var givenArray = new Array (0, 1, 2);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if	(checkForWinOrBlock(3, 4, 5) === true)
	{
		console.log("2");
		var cellArray = new Array(gameStateArray[3], gameStateArray[4], gameStateArray[5]);
		var givenArray = new Array (3, 4, 5);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(6, 7, 8) === true)
	{
		console.log("3");
		var cellArray = new Array(gameStateArray[6], gameStateArray[7], gameStateArray[8]);
		var givenArray = new Array (6, 7, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(0, 3, 6) === true)
	{
		console.log("4");
		var cellArray = new Array(gameStateArray[0], gameStateArray[3], gameStateArray[6]);
		var givenArray = new Array (0, 3, 6);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(1, 4, 7) === true)
	{
		console.log("5");
		var cellArray = new Array(gameStateArray[1], gameStateArray[4], gameStateArray[7]);
		var givenArray = new Array (1, 4, 7);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(2, 5, 8) === true)
	{
		console.log("6");
		var cellArray = new Array(gameStateArray[2], gameStateArray[5], gameStateArray[8]);
		var givenArray = new Array (2, 5, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(0, 4, 8) === true)
	{
		console.log("7");
		var cellArray = new Array(gameStateArray[0], gameStateArray[4], gameStateArray[8]);
		var givenArray = new Array (0, 4, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(2, 4, 6) === true)
	{
		console.log("8");
		var cellArray = new Array(gameStateArray[2], gameStateArray[4], gameStateArray[6]);
		var givenArray = new Array (2, 4, 6);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	//check for block
	else if (checkForWinOrBlock(0, 1, 2) === false)
	{
		console.log("9");
		var cellArray = new Array(gameStateArray[0], gameStateArray[1], gameStateArray[2]);
		var givenArray = new Array (0, 1, 2);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if	(checkForWinOrBlock(3, 4, 5) === false)
	{
		console.log("10");
		var cellArray = new Array(gameStateArray[3], gameStateArray[4], gameStateArray[5]);
		var givenArray = new Array (3, 4, 5);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(6, 7, 8) === false)
	{
		console.log("11");
		var cellArray = new Array(gameStateArray[6], gameStateArray[7], gameStateArray[8]);
		var givenArray = new Array (6, 7, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(0, 3, 6) === false)
	{
		console.log("12");
		var cellArray = new Array(gameStateArray[0], gameStateArray[3], gameStateArray[6]);
		console.log(cellArray);
		var givenArray = new Array (0, 3, 6);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
		console.log(findFirst0InArray(cellArray));
	}
	else if (checkForWinOrBlock(1, 4, 7) === false)
	{
		console.log("13");
		var cellArray = new Array(gameStateArray[1], gameStateArray[4], gameStateArray[7]);
		var givenArray = new Array (1, 4, 7);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(2, 5, 8) === false)
	{
		console.log("14");
		var cellArray = new Array(gameStateArray[2], gameStateArray[5], gameStateArray[8]);
		var givenArray = new Array (2, 5, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(0, 4, 8) === false)
	{
		console.log("15");
		var cellArray = new Array(gameStateArray[0], gameStateArray[4], gameStateArray[8]);
		var givenArray = new Array (0, 4, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForWinOrBlock(2, 4, 6) === false)
	{
		console.log("16");
		var cellArray = new Array(gameStateArray[2], gameStateArray[4], gameStateArray[6]);
		var givenArray = new Array (2, 4, 6);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	//first play
	else if (gameStateArray[4] === BLANKSPOT)
	{
		console.log("25");
		playMark(4, "O");
	}
	else if (gameStateArray[0] === BLANKSPOT)
	{
		console.log("26");
		playMark(0, "O");
	}
	//corner defense
	else if (gameStateArray[0] === MARK_X && gameStateArray[8] === MARK_X && gameStateArray[4] === MARK_O)
	{
		console.log("27");
		playMark(5, "O");
	}
	else if (gameStateArray[2] === MARK_X && gameStateArray[6] === MARK_X && gameStateArray[4] === MARK_O && gameStateArray[5] === BLANKSPOT)
	{
		console.log("28");
		playMark(5, "O");
	}
	//check for a move to play if can't win or block
	else if (checkForProgression(0, 1, 2) === true)
	{
		console.log("17");
		var cellArray = new Array(gameStateArray[0], gameStateArray[1], gameStateArray[2]);
		var givenArray = new Array (0, 1, 2);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(3, 4, 5) === true)
	{
		console.log("18");
		var cellArray = new Array(gameStateArray[3], gameStateArray[4], gameStateArray[5]);
		var givenArray = new Array (3, 4, 5);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(6, 7, 8) === true)
	{
		console.log("19");
		var cellArray = new Array(gameStateArray[6], gameStateArray[7], gameStateArray[8]);
		var givenArray = new Array (6, 7, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(0, 3, 6) === true)
	{
		console.log("20");
		var cellArray = new Array(gameStateArray[0], gameStateArray[3], gameStateArray[6]);
		var givenArray = new Array (0, 3, 6);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(1, 4, 7) === true)
	{
		console.log("21");
		var cellArray = new Array(gameStateArray[1], gameStateArray[4], gameStateArray[7]);
		var givenArray = new Array (1, 4, 7);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(2, 5, 8) === true)
	{
		console.log("22");
		var cellArray = new Array(gameStateArray[2], gameStateArray[5], gameStateArray[8]);
		var givenArray = new Array (2, 5, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(0, 4, 8) === true)
	{
		console.log("23");
		var cellArray = new Array(gameStateArray[0], gameStateArray[4], gameStateArray[8]);
		var givenArray = new Array (0, 4, 8);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	else if (checkForProgression(2, 4, 6) === true)
	{
		console.log("24");
		var cellArray = new Array(gameStateArray[2], gameStateArray[4], gameStateArray[6]);
		var givenArray = new Array (2, 4, 6);
		playMark(givenArray[findFirst0InArray(cellArray)], "O");
	}
	//dead game but blanks to play
	else
	{
		console.log("29");
		var nextAvailableBlankCell = findFirst0InGameBoardArray();
		if (nextAvailableBlankCell != -1)
		{
			playMark(nextAvailableBlankCell, "O");
		}
	}
}

//checks to see if the game is over with a winner
function endOfGameCheck(cell1, cell2, cell3)
{
	var counters = countMarkFrequency(gameStateArray[cell1], gameStateArray[cell2], gameStateArray[cell3]);
	
	if (counters[2] === 3)
	{
		return true;
	}
	else if (counters[0] === 0)
	{
		return false;
	}
	else
	{
		return null;
	}
}

//checks to see if the board is full and if game is a draw
function endOfGameFullBoard()
{	
	return (findFirst0InGameBoardArray() === -1);
}

//handles play of game, alerts to the end of the game.
function play(cell, cellnumber) 
{
	if (cellAvailable(cellnumber) === false)
	{
		alert("That spot is taken, please choose again");
	}
	else
	{
		playMark(cellnumber, "X");
		oPlay();
		if (endOfGameCheck(0, 1, 2) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(3, 4, 5) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(6, 7, 8) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(0, 3, 6) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(1, 4, 7) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(2, 5, 8) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(0, 4, 8) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheck(2, 4, 6) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameFullBoard() === true)
		{
			alert("Draw! Refresh page to play again!");
		}
	}
}
