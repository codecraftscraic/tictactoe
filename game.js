/**
 * @author Jennifer Jensen
 */

function setImageVisible(id, visible, image) 
{
var img = document.getElementById(id+image);
img.style.visibility = (visible ? 'visible' : 'hidden');
}

function getImageVisible(id, image)
{
	var img = document.getElementById(id+image);
	return(img.style.visibility);
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

function checkRowForWinOrBlock(row)
{
	var startingcell = 1+3*(row-1);
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 1), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 1), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+1));
	}
	
	if ((getImageVisible("cell"+(startingcell + 2), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 2), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+2));
	}
	
	if (ocounter === 2)
	{
		return blankcellid;
	}
	else if (xcounter === 2)
	{
		return blankcellid;
	}
	else if (blankcounter != 0)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkColumnForWinOrBlock(column)
{
	var startingcell = column;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 3), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 3), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+3));
	}
	
	if ((getImageVisible("cell"+(startingcell + 6), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 6), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+6));
	}
	
	if (ocounter === 2)
	{
		return blankcellid;
	}
	else if (xcounter === 2)
	{
		return blankcellid;
	}
	else if (blankcounter === 1)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkDiagonalOneForWinOrBlock()
{
	var startingcell = 1;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 4), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 4), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+4));
	}
	
	if ((getImageVisible("cell"+(startingcell + 8), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 8), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+8));
	}
	
	if (ocounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else if (xcounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkDiagonalThreeForWinOrBlock()
{
	var startingcell = 3;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 2), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 2), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+2));
	}
	
	if ((getImageVisible("cell"+(startingcell + 6), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 6), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+6));
	}
	
	if (ocounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else if (xcounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkForProgressionRow(row)
{
	var startingcell = 1+3*(row-1);
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 1), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 1), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+1));
	}
	
	if ((getImageVisible("cell"+(startingcell + 2), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 2), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+2));
	}
	
	if (ocounter === 1 && xcounter === 0)
	{
		return blankcellid;
	}
}
function checkForProgressionColumn(column)
{
	var startingcell = column;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 3), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 3), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+3));
	}
	
	if ((getImageVisible("cell"+(startingcell + 6), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 6), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+6));
	}
	
	if (ocounter === 1 && xcounter === 0)
	{
		return blankcellid;
	}
}

function checkForProgressionDiagonalOne()
{
	var startingcell = 1;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 4), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 4), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+4));
	}
	
	if ((getImageVisible("cell"+(startingcell + 8), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 8), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+8));
	}
	
	if (ocounter === 1 && xcounter === 0)
	{
		return blankcellid;
	}
}

function checkForProgressionDiagonalThree()
{
	var startingcell = "cell3";
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 2), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 2), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+2));
	}
	
	if ((getImageVisible("cell"+(startingcell + 6), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 6), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+6));
	}
	
	if (ocounter === 1 && xcounter === 0)
	{
		return blankcellid;
	}
}

function oPlay()
{
	var cellToPlay;
	//first play
	if ((cellAvailable(document.getElementById("cell5")) === true) && (getImageVisible("cell5", "X") != "visible"))
	{
		setImageVisible("cell5", true, "O");
	}
	else if ((cellAvailable(document.getElementById("cell1")) === true) && (getImageVisible("cell1", "X") != "visible"))
	{
		setImageVisible("cell1", true, "O");
	}
	//remainder of game
	else if ((getImageVisible("cell1", "X") === "visible") && (getImageVisible("cell9", "X") === "visible"))
	{
		setImageVisible("cell6", "visible", "O");
	}
	else if ((getImageVisible("cell3", "X") === "visible") && (getImageVisible("cell7", "X") === "visible"))
	{
		setImageVisible("cell6", "visible", "O");
	}
	else if ((cellToPlay = checkRowForWinOrBlock(1)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if	((cellToPlay = checkRowForWinOrBlock(2)) != null)
	{
		//alert("first "+cellToPlay);
		setImageVisible(cellToPlay, true, "O");
		//alert("second "+cellToPlay);
	}
	else if ((cellToPlay = checkRowForWinOrBlock(3)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(1)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(2)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkColumnForWinOrBlock(3)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkDiagonalOneForWinOrBlock()) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkDiagonalThreeForWinOrBlock()) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionRow(1)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionRow(2)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionRow(3)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionColumn(1)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionColumn(2)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionColumn(3)) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionDiagonalOne()) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	else if ((cellToPlay = checkForProgressionDiagonalThree()) != null)
	{
		setImageVisible(cellToPlay, true, "O");
	}
	//else if ((getImageVisible("cell1", "X") === "visible") && (getImageVisible("cell9", "X") === "visible"))
	//{
		//setImageVisible("cell6", "visible", "O");
	//}
	//else if ((getImageVisible("cell3", "X") === "visible") && (getImageVisible("cell7", "X") === "visible"))
	//{
		//setImageVisible("cell6", "visible", "O");
	//}
}

function endOfGameCheckRow(row)
{
	var startingcell = 1+3*(row-1);
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 1), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 1), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+1));
	}
	
	if ((getImageVisible("cell"+(startingcell + 2), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 2), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+2));
	}
	
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
	var startingcell = column;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 3), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 3), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+3));
	}
	
	if ((getImageVisible("cell"+(startingcell + 6), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 6), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+6));
	}
	
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
	var startingcell = 1;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 4), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 4), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+4));
	}
	
	if ((getImageVisible("cell"+(startingcell + 8), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 8), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+8));
	}
	
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
	var startingcell = 3;
	var ocounter = 0;
	var blankcounter = 0;
	var xcounter = 0;
	var blankcellid = 0;
	
	if ((getImageVisible("cell"+startingcell, "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+startingcell, "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+startingcell);
	}
	
	if ((getImageVisible("cell"+(startingcell + 2), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 2), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+2));
	}
	
	if ((getImageVisible("cell"+(startingcell + 6), "O") === "visible"))
	{
		ocounter = ocounter + 1;
	}
	else if ((getImageVisible("cell"+(startingcell + 6), "X") === "visible"))
	{
		xcounter = xcounter + 1;
	}
	else
	{
		blankcounter = blankcounter + 1;
		blankcellid = ("cell"+(startingcell+6));
	}
	
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
	var fullboardcounter = 0;
	
	if (endOfGameCheckRow(1) === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckRow(2) === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckRow(3) === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckColumn(1) === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckColumn(2) === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckColumn(3) === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckDiagonalOne() === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	else if (endOfGameCheckDiagonalThree() === false)
	{
		fullboardcounter = fullboardcounter + 1;
	}
	
	if (fullboardcounter === 8)
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
	//alert(cell.id);
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
