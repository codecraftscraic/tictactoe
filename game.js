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

function checkRowForWinOrBlock(row, image)
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
	
	if (image === "O" && ocounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else if (image === "X" && xcounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkColumnForWinOrBlock(column, image)
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
	
	if (image === "O" && ocounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else if (image === "X" && xcounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkDiagonalOneForWinOrBlock(image)
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
	
	if (image === "O" && ocounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else if (image === "X" && xcounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else
	{
		return null;
	}
}

function checkDiagonalThreeForWinOrBlock(image)
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
	
	if (image === "O" && ocounter === 2 && blankcounter === 1)
	{
		return blankcellid;
	}
	else if (image === "X" && xcounter === 2 && blankcounter === 1)
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
	
	if (ocounter === 1 && xcounter === 0 && blankcounter != 0)
	{
		return blankcellid;
	}
}

function checkForProgressionDiagonalThree()
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
	
	if (ocounter === 1 && xcounter === 0 && blankcounter > 0)
	{
		return blankcellid;
	}
}

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
	else if ((cellAvailable(document.getElementById("cell5")) === true) && (getImageVisible("cell5", "X") != "visible"))
	{
		console.log("25");
		setImageVisible("cell5", true, "O");
	}
	else if ((cellAvailable(document.getElementById("cell1")) === true) && (getImageVisible("cell1", "X") != "visible"))
	{
		console.log("26");
		setImageVisible("cell1", true, "O");
	}
	//corner defense
	else if ((getImageVisible("cell1", "X") === "visible") && (getImageVisible("cell9", "X") === "visible")
			&& (getImageVisible("cell6", "O") != "visible") && (getImageVisible("cell6", "X") != "visible"))
	{
		console.log("27");
		setImageVisible("cell6", "visible", "O");
	}
	else if ((getImageVisible("cell3", "X") === "visible") && (getImageVisible("cell7", "X") === "visible") && (getImageVisible("cell6", "O") != "visible"))
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
	if ((endOfGameCheckRow(1) === false) && (endOfGameCheckRow(2) === false) && (endOfGameCheckRow(3) === false) && (endOfGameCheckColumn(1) === false)
		&& (endOfGameCheckColumn(2) === false) && (endOfGameCheckColumn(3) === false) && (endOfGameCheckDiagonalOne() === false) && (endOfGameCheckDiagonalThree() === false))
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
