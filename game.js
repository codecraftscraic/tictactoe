/**
 * @author Jennifer Jensen
 */

var gameStateArray = new Array();
gameBoardArray[0] = 0;
gameBoardArray[1] = 0;
gameBoardArray[2] = 0;
gameBoardArray[3] = 0;
gameBoardArray[4] = 0;
gameBoardArray[5] = 0;
gameBoardArray[6] = 0;
gameBoardArray[7] = 0;
gameBoardArray[8] = 0;

function setImageVisible(id, visible, image) 
{
var img = document.getElementById(id+image);
img.style.visibility = (visible ? 'visible' : 'hidden');
}

function cellAvailable(cell)
{
	if ((getImageVisible(cell.id, "X") != "visible") && (getImageVisible(cell.id, "O") != "visible"))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function countMarkFrequency(cell1, cell2, cell3)
{
	var ocounter = 0;
	var xcounter = 0;
	var blankcounter = 0;
	
	if (cell1 === 2)
	{
		ocounter = ocounter + 1;
	}
	else if (cell1 === 1)
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
	}
	
	if (cell2 === 2)
	{
		ocounter = ocounter + 1;
	}
	else if (cell2 === 1)
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
	}
	
	if (cell3 === 2)
	{
		ocounter = ocounter + 1;
	}
	else if (cell3 === 1)
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
	}
	
	return new Array(blankcounter, xcounter, ocounter);
	
}

function checkForWinOrBlock(cell1, cell2, cell3)
{
	var counters = countMarkFrequency(cell1, cell2, cell3);
	
	if (ocounter === 2 && blankcounter === 1)
	{
		return true;
	}
	else if (xcounter === 2 && blankcounter === 1)
	{
		return false;
	}
	else
	{
		return null;
	}
}

function checkForProgression(cell1, cell2, cell3)
{
	var counters = countMarkFrequency(cell1, cell2, cell3);
	
	if (ocounter === 1 && xcounter === 0)
	{
		return true;
	}
	else
	{
		return null;
	}
}

//in the case where O doesn't need to go for win or block, just make a move.
function findFirstBlank()
{	
	for (cell = 1; cell <10; cell++)
	{
		if (cellAvailable(document.getElementById("cell"+cell)) === true)
		{
			return "cell"+cell;	
		}
	}
	
	return null;
}

function oPlay()
{
	var cellToPlay;
	//main game play
	if ((cellToPlay = checkRowForWinOrBlock(1, "O")) != null)
	{
		console.log("1");
		setImageVisible(cellToPlay, true, "O");
	}
	else if	((cellToPlay = checkRowForWinOrBlock(2, "O")) != null)
	{
		console.log("2");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkRowForWinOrBlock(3, "O")) != null)
	{
		console.log("3");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(1, "O")) != null)
	{
		console.log("4");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(2, "O")) != null)
	{
		console.log("5");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(3, "O")) != null)
	{
		console.log("6");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkDiagonalOneForWinOrBlock("O")) != null)
	{
		console.log("7");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkDiagonalThreeForWinOrBlock("O")) != null)
	{
		console.log("8");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkRowForWinOrBlock(1, "X")) != null)
	{
		console.log("9");
		setImageVisible(cellToPlay, true, "O");
	}
	else if	((cellToPlay = checkRowForWinOrBlock(2, "X")) != null)
	{
		console.log("10");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkRowForWinOrBlock(3, "X")) != null)
	{
		console.log("11");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(1, "X")) != null)
	{
		console.log("12");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(2, "X")) != null)
	{
		console.log("13");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(3, "X")) != null)
	{
		console.log("14");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkDiagonalOneForWinOrBlock("X")) != null)
	{
		console.log("15");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkDiagonalThreeForWinOrBlock("X")) != null)
	{
		console.log("16");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionRow(1)) != null)
	{
		console.log("17");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionRow(2)) != null)
	{
		console.log("18");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionRow(3)) != null)
	{
		console.log("19");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionColumn(1)) != null)
	{
		console.log("20");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionColumn(2)) != null)
	{
		console.log("21");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionColumn(3)) != null)
	{
		console.log("22");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionDiagonalOne()) != null)
	{
		console.log("23");
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionDiagonalThree()) != null)
	{
		console.log("24");
		setImageVisible(cellToPlay, true, "O");
	}
	
	//first play
	else if ((cellAvailable(document.getElementById("cell5")) === true) && (checkSpotAvailable("cell5", "X") != "visible"))
	{
		console.log("25");
		setImageVisible("cell5", true, "O");
	}
	else if ((cellAvailable(document.getElementById("cell1")) === true) && (checkSpotAvailable("cell1", "X") != "visible"))
	{
		console.log("26");
		setImageVisible("cell1", true, "O");
	}
	//corner defense
	else if ((checkSpotAvailable("cell1", "X") === "visible") && (checkSpotAvailable("cell9", "X") === "visible")
			&& (checkSpotAvailable("cell6", "O") != "visible") && (checkSpotAvailable("cell6", "X") != "visible"))
	{
		console.log("27");
		setImageVisible("cell6", "visible", "O");
	}
	else if ((checkSpotAvailable("cell3", "X") === "visible") && (checkSpotAvailable("cell7", "X") === "visible") && (checkSpotAvailable("cell6", "O") != "visible"))
	{
		console.log("28");
		setImageVisible("cell6", "visible", "O");
	}
	//dead game but blanks to play
	else if ((cellToPlay = findFirstBlank()) != null)
	{
		console.log("29");
		setImageVisible(cellToPlay, true, "O");
	}
}

function endOfGameCheckRow(row)
{
	countMarkFrequency();
	
	if (ocounter === 3)
	{
		return true;
	}
	else if (blankcounter === 0)
	{
		return false;
	}
	else
	{
		return null;
	}
}

function endOfGameCheckColumn(column)
{
	countMarkFrequency();
	
	if (ocounter === 3)
	{
		return true;
	}
	else if (blankcounter === 0)
	{
		return false;
	}
	else
	{
		return null;
	}
}

function endOfGameCheckDiagonalOne()
{
	countMarkFrequency();
	
	if (ocounter === 3)
	{
		return true;
	}
	else if (blankcounter === 0)
	{
		return false;
	}
	else
	{
		return null;
	}
}

function endOfGameCheckDiagonalThree()
{
	countMarkFrequency();
	
	if (ocounter === 3)
	{
		return true;
	}
	else if (blankcounter === 0)
	{
		return false;
	}
	else
	{
		return null;
	}
}

function endOfGameFullBoard()
{	
	if ((endOfGameCheckRow(1) === false) && 
		(endOfGameCheckRow(2) === false) && 
		(endOfGameCheckRow(3) === false) && 
		(endOfGameCheckColumn(1) === false) && 
		(endOfGameCheckColumn(2) === false) && 
		(endOfGameCheckColumn(3) === false) && 
		(endOfGameCheckDiagonalOne() === false) && 
		(endOfGameCheckDiagonalThree() === false))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function play(cell) 
{
	if (cellAvailable(cell) != true)
	{
		alert("That spot is taken, please choose again");
	}
	else if (cellAvailable(cell) === true)
	{
		setImageVisible(cell.id, "visible", "X");
		oPlay();
		if (endOfGameCheckRow(1) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckRow(2) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckRow(3) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckColumn(1) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckColumn(2) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckColumn(3) === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckDiagonalOne() === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameCheckDiagonalThree() === true)
		{
			alert("Game Over, I win! Please refresh page to play again.");
		}
		else if (endOfGameFullBoard() === true)
		{
			alert("Draw! Refresh page to play again!");
		}
	}
}
