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
	if (getImageVisible(cell.id, "X") != "visible" && getImageVisible(cell.id, "O") != "visible")
	{
		return true;
	}
	else
	{
		return false;
	}
}

function centerSquare()
{
	if ((cellAvailable(document.getElementById("cell5")) === true) && (getImageVisible("cell5", "X") != "visible"))
	{
		setImageVisible("cell5", true, "O");
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
		centerSquare();
	}
	

	//TODO AI
	//TODO game end, red C appears
}
