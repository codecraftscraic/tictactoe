describe("game", function(){
	
	it ("counts marks on the board", function (){
		var counters = countMarkFrequency(new Array (0, 0, 0));
		expect(counters[0]).toBe(3);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 0, 1));
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 0, 2));
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 1, 0));
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 1, 1));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 1, 2));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 2, 0));
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 2, 1));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (0, 2, 2));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(2);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 0, 0));
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 0, 1));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 0, 2));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 1, 0));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 1, 1));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(3);
		expect(counters[2]).toBe(0);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 1, 2));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 2, 0));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 2, 1));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (1, 2, 2));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(2);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 0, 0));
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 0, 1));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 0, 2));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(2);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 1, 0));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 1, 1));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(1);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 1, 2));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(2);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 2, 0));
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(2);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 2, 1));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(2);
	});

	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(new Array (2, 2, 2));
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(3);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[0]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[1]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[2]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[3]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[4]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[5]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[6]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[7]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if there is a cell available to play", function(){
		var gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		var cellCheck = cellAvailable(gameStateArray[8]);
		expect(cellCheck).toBe(true);
	});
	
	it ("checks to see if O can win", function(){
		expect(checkForWin(new Array (0,0,0))).toBe(false);
		expect(checkForWin(new Array (0,0,1))).toBe(false);
		expect(checkForWin(new Array (0,0,2))).toBe(false);
	
		expect(checkForWin(new Array (0,1,0))).toBe(false);
		expect(checkForWin(new Array (0,1,1))).toBe(false);
		expect(checkForWin(new Array (0,1,2))).toBe(false);

		expect(checkForWin(new Array (0,2,0))).toBe(false);
		expect(checkForWin(new Array (0,2,1))).toBe(false);
		expect(checkForWin(new Array (0,2,2))).toBe(true);

		expect(checkForWin(new Array (1,0,0))).toBe(false);
		expect(checkForWin(new Array (1,0,1))).toBe(false);
		expect(checkForWin(new Array (1,0,2))).toBe(false);

		expect(checkForWin(new Array (1,1,0))).toBe(false);
		expect(checkForWin(new Array (1,1,1))).toBe(false);
		expect(checkForWin(new Array (1,1,2))).toBe(false);
		
		expect(checkForWin(new Array (1,2,0))).toBe(false);
		expect(checkForWin(new Array (1,2,1))).toBe(false);
		expect(checkForWin(new Array (1,2,2))).toBe(false);

		expect(checkForWin(new Array (2,0,0))).toBe(false);
		expect(checkForWin(new Array (2,0,1))).toBe(false);
		expect(checkForWin(new Array (2,0,2))).toBe(true);

		expect(checkForWin(new Array (2,1,0))).toBe(false);
		expect(checkForWin(new Array (2,1,1))).toBe(false);
		expect(checkForWin(new Array (2,1,2))).toBe(false);

		expect(checkForWin(new Array (2,2,0))).toBe(true);
		expect(checkForWin(new Array (2,2,1))).toBe(false);
		expect(checkForWin(new Array (2,2,2))).toBe(false);
	});
	
	it ("checks to see if O needs to block X from winning", function(){
		expect(checkForBlock(new Array (0,0,0))).toBe(false);
		expect(checkForBlock(new Array (0,0,1))).toBe(false);
		expect(checkForBlock(new Array (0,0,2))).toBe(false);
	
		expect(checkForBlock(new Array (0,1,0))).toBe(false);
		expect(checkForBlock(new Array (0,1,1))).toBe(true);
		expect(checkForBlock(new Array (0,1,2))).toBe(false);

		expect(checkForBlock(new Array (0,2,0))).toBe(false);
		expect(checkForBlock(new Array (0,2,1))).toBe(false);
		expect(checkForBlock(new Array (0,2,2))).toBe(false);

		expect(checkForBlock(new Array (1,0,0))).toBe(false);
		expect(checkForBlock(new Array (1,0,1))).toBe(true);
		expect(checkForBlock(new Array (1,0,2))).toBe(false);

		expect(checkForBlock(new Array (1,1,0))).toBe(true);
		expect(checkForBlock(new Array (1,1,1))).toBe(false);
		expect(checkForBlock(new Array (1,1,2))).toBe(false);
		
		expect(checkForBlock(new Array (1,2,0))).toBe(false);
		expect(checkForBlock(new Array (1,2,1))).toBe(false);
		expect(checkForBlock(new Array (1,2,2))).toBe(false);

		expect(checkForBlock(new Array (2,0,0))).toBe(false);
		expect(checkForBlock(new Array (2,0,1))).toBe(false);
		expect(checkForBlock(new Array (2,0,2))).toBe(false);

		expect(checkForBlock(new Array (2,1,0))).toBe(false);
		expect(checkForBlock(new Array (2,1,1))).toBe(false);
		expect(checkForBlock(new Array (2,1,2))).toBe(false);

		expect(checkForBlock(new Array (2,2,0))).toBe(false);
		expect(checkForBlock(new Array (2,2,1))).toBe(false);
		expect(checkForBlock(new Array (2,2,2))).toBe(false);
	});
	
	it ("Looks for places for O to progress game play when a win or block is not evident", function(){
		expect(checkForProgression(new Array (0,0,0))).toBe(false);
		expect(checkForProgression(new Array (0,0,1))).toBe(false);
		expect(checkForProgression(new Array (0,0,2))).toBe(true);
	
		expect(checkForProgression(new Array (0,1,0))).toBe(false);
		expect(checkForProgression(new Array (0,1,1))).toBe(false);
		expect(checkForProgression(new Array (0,1,2))).toBe(false);

		expect(checkForProgression(new Array (0,2,0))).toBe(true);
		expect(checkForProgression(new Array (0,2,1))).toBe(false);
		expect(checkForProgression(new Array (0,2,2))).toBe(false);

		expect(checkForProgression(new Array (1,0,0))).toBe(false);
		expect(checkForProgression(new Array (1,0,1))).toBe(false);
		expect(checkForProgression(new Array (1,0,2))).toBe(false);

		expect(checkForProgression(new Array (1,1,0))).toBe(false);
		expect(checkForProgression(new Array (1,1,1))).toBe(false);
		expect(checkForProgression(new Array (1,1,2))).toBe(false);
		
		expect(checkForProgression(new Array (1,2,0))).toBe(false);
		expect(checkForProgression(new Array (1,2,1))).toBe(false);
		expect(checkForProgression(new Array (1,2,2))).toBe(false);

		expect(checkForProgression(new Array (2,0,0))).toBe(true);
		expect(checkForProgression(new Array (2,0,1))).toBe(false);
		expect(checkForProgression(new Array (2,0,2))).toBe(false);

		expect(checkForProgression(new Array (2,1,0))).toBe(false);
		expect(checkForProgression(new Array (2,1,1))).toBe(false);
		expect(checkForProgression(new Array (2,1,2))).toBe(false);

		expect(checkForProgression(new Array (2,2,0))).toBe(false);
		expect(checkForProgression(new Array (2,2,1))).toBe(false);
		expect(checkForProgression(new Array (2,2,2))).toBe(false);
	});
	
	it ("checks for blanks (0s) in a given three cell array", function(){
		var allZeroArray = new Array(0,0,0);
		var zeroZeroSomethingArray = new Array(0,0,1);
		var zeroSomethingZeroArray = new Array(0,1,0);
		var zeroSomethingSomethingArray = new Array(0,1,1);
		var somethingZeroZeroArray = new Array(1,0,0);
		var somethingSomethingZeroArray = new Array(1,1,0);
		
		expect(findFirst0InArray(allZeroArray)).toBe(0);
		expect(findFirst0InArray(zeroZeroSomethingArray)).toBe(0);
		expect(findFirst0InArray(zeroSomethingZeroArray)).toBe(0);
		expect(findFirst0InArray(zeroSomethingSomethingArray)).toBe(0);
		expect(findFirst0InArray(somethingZeroZeroArray)).toBe(1);
		expect(findFirst0InArray(somethingSomethingZeroArray)).toBe(2);
	});
	
	it ("checks for very first blank (0) available in the entire game board array", function(){
		gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(0);
		
		gameStateArray = new Array(1,0,0,0,0,0,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(1);
		
		gameStateArray = new Array(1,1,0,0,0,0,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(2);
		
		gameStateArray = new Array(1,1,1,0,0,0,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(3);
		
		gameStateArray = new Array(1,1,1,1,0,0,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(4);
		
		gameStateArray = new Array(1,1,1,1,1,0,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(5);
		
		gameStateArray = new Array(1,1,1,1,1,1,0,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(6);
		
		gameStateArray = new Array(1,1,1,1,1,1,1,0,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(7);
		
		gameStateArray = new Array(1,1,1,1,1,1,1,1,0);
		expect(findFirst0InGameBoardArray(gameStateArray)).toBe(8);
	});
	
	it ("checks to see if all cells in the game board array are taken", function(){
		gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		expect(endOfGameFullBoard()).toBe(false);
		
		gameStateArray = new Array(1,1,1,1,1,1,1,1,1);
		expect(endOfGameFullBoard()).toBe(true);
	});
	
	it ("gets all rows on the board and returns a full board array", function(){
		gameStateArray = new Array(0,1,2,0,1,2,0,1,2);
		expect(getRows()).toEqual([[0,1,2],[3,4,5],[6,7,8]]);
	});
	
	it ("gets all columns on the board and returns a full board array", function(){
		gameStateArray = new Array(0,1,2,0,1,2,0,1,2);
		expect(getColumns()).toEqual([[0,3,6],[1,4,7],[2,5,8]]);
	});
	
	it ("gets all diagonals on the board and returns a new array including both diagonals", function(){
		gameStateArray = new Array(0,1,2,0,1,2,0,1,2);
		expect(getDiagonals()).toEqual([[0,4,8],[2,4,6]]);
	});
});
