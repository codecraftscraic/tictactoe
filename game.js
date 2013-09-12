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

//returns the marks in a given array
function markArray(cellIndex1, cellIndex2, cellIndex3)
{
	return new Array (gameStateArray[cellIndex1], gameStateArray[cellIndex2], gameStateArray[cellIndex3]);
}

//gets all rows
function getRows()
{
	var rowOneArray = new Array(0,1,2);
	var rowTwoArray = new Array(3,4,5);
	var rowThreeArray = new Array(6,7,8);
	return new Array(rowOneArray, rowTwoArray, rowThreeArray);
}

//gets all columns
function getColumns()
{
	var columnOneArray = new Array(0,3,6);
	var columnTwoArray = new Array(1,4,7);
	var columnThreeArray = new Array(2,5,8);
	return new Array(columnOneArray, columnTwoArray, columnThreeArray);
}

//gets all diagonals
function getDiagonals()
{
	var diagonalOneArray = new Array(0,4,8);
	var diagonalTwoArray = new Array(2,4,6);
	return new Array(diagonalOneArray, diagonalTwoArray);
}

//counts the marks on the board
function countMarkFrequency(cellArray)
{
	var ocounter = 0;
	var xcounter = 0;
	var blankcounter = 0;
	
	for (var i=0; i<3; i++)
	{
		if (cellArray[i] === MARK_O)
		{
			ocounter = ocounter + 1;
		}
		else if (cellArray[i] === MARK_X)
		{
			xcounter = xcounter + 1;
		}
		else
		{
			blankcounter = blankcounter + 1;
		}
	}
	
	return new Array(blankcounter, xcounter, ocounter);
	
}

//checks for winning opportunity
function checkForWin(cellArray)
{
	var counters = countMarkFrequency(cellArray);
	
	if (counters[2] === 2 && counters[0] === 1)
	{
		return true;
	}
}

//check for a block opportunity
function checkForBlock (cellArray)
{
	var counters = countMarkFrequency(cellArray);
	
	if (counters[1] === 2 && counters[0] === 1)
	{
		return true;
	}
}

//if no opportunity to win or need to block, starts the progression of play towards an O win
function checkForProgression(cellArray)
{
	var counters = countMarkFrequency(cellArray);
	
	if (counters[2] === 1 && counters[1] === 0)
	{
		return true;
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

//plays the mark required in the cell
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
	var rows = getRows();
	console.log("checkForWin for loops");
	for (var i=0; i<rows; i++)
	{
		console.log("in row checkForWin");
		var marks = markArray(rows[i][0], rows[i][1], rows[i][2]);
		
		if (checkForWin(marks) === true)
		{
			var givenArray = new Array (rows[i][0], rows[i][1], rows[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return true;
		}
	}
	
	var columns = getColumns();
	for (var i=0; i<columns; i++)
	{
		console.log("in column checkForWin");
		var marks = markArray(columns[i][0], columns[i][1], columns[i][2]);
		
		if (checkForWin(marks) === true)
		{
			var givenArray = new Array (columns[i][0], columns[i][1], columns[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return true;
		}
	}
	
	var diagonals = getDiagonals();
	for (var i=0; i<diagonals; i++)
	{
		console.log("in diagonal checkForWin");
		var marks = markArray(diagonals[i][0], diagonals[i][1], diagonals[i][2]);
		
		if (checkForWin(marks) === true)
		{
			var givenArray = new Array (diagonals[i][0], diagonals[i][1], diagonals[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return true;
		}
	}
	
	//check for block
	console.log("You have reached checkForBlock");
	rows = getRows();
	for (var i=0; i<rows; i++)
	{
		console.log("In checkForBlock loop");
		var marks = markArray(rows[i][0], rows[i][1], rows[i][2]);
		
		if (checkForBlock(marks) === true)
		{
			console.log("in checkForBlock if statement");
			var givenArray = new Array (rows[i][0], rows[i][1], rows[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return false;
		}
	}
	
	columns = getColumns();
	for (var i=0; i<columns; i++)
	{
		var marks = markArray(columns[i][0], columns[i][1], columns[i][2]);
		
		if (checkForBlock(marks) === true)
		{
			var givenArray = new Array (columns[i][0], columns[i][1], columns[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return false;
		}
	}
	
	diagonals = getDiagonals();
	for (var i=0; i<diagonals; i++)
	{
		var marks = markArray(diagonals[i][0], diagonals[i][1], diagonals[i][2]);
		
		if (checkForBlock(marks) === true)
		{
			var givenArray = new Array (diagonals[i][0], diagonals[i][1], diagonals[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return false;
		}
	}
	
	//first play
	if (gameStateArray[4] === BLANKSPOT)
	{
		console.log("25");
		playMark(4, "O");
		return false;
	}
	else if (gameStateArray[0] === BLANKSPOT)
	{
		console.log("26");
		playMark(0, "O");
		return false;
	}
	//corner defense
	else if (gameStateArray[0] === MARK_X && gameStateArray[8] === MARK_X && gameStateArray[4] === MARK_O && gameStateArray[5] === BLANKSPOT)
	{
		console.log("27");
		playMark(5, "O");
		return false;
	}
	else if (gameStateArray[2] === MARK_X && gameStateArray[6] === MARK_X && gameStateArray[4] === MARK_O && gameStateArray[5] === BLANKSPOT)
	{
		console.log("28");
		playMark(5, "O");
		return false;
	}
	
	//check for a move to play if can't win or block
	rows = getRows();
	for (var i=0; i<rows; i++)
	{
		var marks = markArray(rows[i][0], rows[i][1], rows[i][2]);
		
		if (checkForProgression(marks) === true)
		{
			var givenArray = new Array (rows[i][0], rows[i][1], rows[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return false;
		}
	}
	
	columns = getColumns();
	for (var i=0; i<columns; i++)
	{
		var marks = markArray(columns[i][0], columns[i][1], columns[i][2]);
		
		if (checkForProgression(marks) === true)
		{
			var givenArray = new Array (columns[i][0], columns[i][1], columns[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return false;
		}
	}
	
	diagonals = getDiagonals();
	for (var i=0; i<diagonals; i++)
	{
		var marks = markArray(diagonals[i][0], diagonals[i][1], diagonals[i][2]);
		
		if (checkForProgression(marks) === true)
		{
			var givenArray = new Array (diagonals[i][0], diagonals[i][1], diagonals[i][2]);
			playMark(givenArray[findFirst0InArray(marks)], "O");
			return false;
		}
	}
	
	//dead game but blanks to play
	console.log("29");
	var nextAvailableBlankCell = findFirst0InGameBoardArray();
	if (nextAvailableBlankCell != -1)
	{
		playMark(nextAvailableBlankCell, "O");
		return false;
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
		var oPlayReturn = oPlay();
		if (oPlayReturn === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameFullBoard() === true)
		{
			alert("Draw! Refresh page to play again!");
		}
	}
}
