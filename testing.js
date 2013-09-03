describe("game", function(){
	
	it ("counts marks on the board", function (){
		var counters = countMarkFrequency(0, 0, 0);
		expect(counters[0]).toBe(3);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 0, 1);
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 0, 2);
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 1, 0);
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 1, 1);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 1, 2);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 2, 0);
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 2, 1);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(0, 2, 2);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(2);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 0, 0);
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(0);
	});
		
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 0, 1);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 0, 2);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 1, 0);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 1, 1);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(3);
		expect(counters[2]).toBe(0);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 1, 2);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 2, 0);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 2, 1);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(1, 2, 2);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(2);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 0, 0);
		expect(counters[0]).toBe(2);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 0, 1);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 0, 2);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(2);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 1, 0);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 1, 1);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(2);
		expect(counters[2]).toBe(1);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 1, 2);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(2);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 2, 0);
		expect(counters[0]).toBe(1);
		expect(counters[1]).toBe(0);
		expect(counters[2]).toBe(2);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 2, 1);
		expect(counters[0]).toBe(0);
		expect(counters[1]).toBe(1);
		expect(counters[2]).toBe(2);
	});
	
	it ("counts marks made on the board", function (){
		var counters = countMarkFrequency(2, 2, 2);
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
	
	it ("checks to see if O can win or if O needs to block X from winning", function(){
		gameStateArray = new Array(0,0,0,0,0,1,0,0,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
		gameStateArray = new Array(0,1,0,0,1,1,0,1,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(false);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
		gameStateArray = new Array(0,2,0,0,2,1,0,2,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(true);
		
		gameStateArray = new Array(1,0,0,1,0,1,1,0,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(false);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,1,0,1,1,1,1,1,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(false);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,2,0,1,2,1,1,2,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
		gameStateArray = new Array(2,0,0,2,0,1,2,0,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(true);
		
		gameStateArray = new Array(2,1,0,2,1,1,2,1,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(null);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
		gameStateArray = new Array(2,2,0,2,2,1,2,2,2);
		expect(checkForWinOrBlock(0,1,2)).toBe(true);
		expect(checkForWinOrBlock(3,4,5)).toBe(null);
		expect(checkForWinOrBlock(6,7,8)).toBe(null);
		
	});
	
	it ("Looks for places for O to progress game play when a win or block is not evident", function(){
		gameStateArray = new Array(0,0,0,0,0,1,0,0,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(true);
		
		gameStateArray = new Array(0,1,0,0,1,1,0,1,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(0,2,0,0,2,1,0,2,2);
		expect(checkForProgression(0,1,2)).toBe(true);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,0,0,1,0,1,1,0,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,1,0,1,1,1,1,1,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,2,0,1,2,1,1,2,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(2,0,0,2,0,1,2,0,2);
		expect(checkForProgression(0,1,2)).toBe(true);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(2,1,0,2,1,1,2,1,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
		
		gameStateArray = new Array(2,2,0,2,2,1,2,2,2);
		expect(checkForProgression(0,1,2)).toBe(null);
		expect(checkForProgression(3,4,5)).toBe(null);
		expect(checkForProgression(6,7,8)).toBe(null);
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
	
	it ("checks to see if O won, X won, or draw", function(){
		gameStateArray = new Array(0,0,0,0,0,1,0,0,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(null);
		expect(endOfGameCheck(6,7,8)).toBe(null);
		
		gameStateArray = new Array(0,1,0,0,1,1,0,1,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(null);
		expect(endOfGameCheck(6,7,8)).toBe(null);
		
		gameStateArray = new Array(0,2,0,0,2,1,0,2,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(null);
		expect(endOfGameCheck(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,0,0,1,0,1,1,0,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(null);
		expect(endOfGameCheck(6,7,8)).toBe(null);
		
		gameStateArray = new Array(1,1,0,1,1,1,1,1,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(false);
		expect(endOfGameCheck(6,7,8)).toBe(false);
		
		gameStateArray = new Array(1,2,0,1,2,1,1,2,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(false);
		expect(endOfGameCheck(6,7,8)).toBe(false);
		
		gameStateArray = new Array(2,0,0,2,0,1,2,0,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(null);
		expect(endOfGameCheck(6,7,8)).toBe(null);
		
		gameStateArray = new Array(2,1,0,2,1,1,2,1,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(false);
		expect(endOfGameCheck(6,7,8)).toBe(false);
		
		gameStateArray = new Array(2,2,0,2,2,1,2,2,2);
		expect(endOfGameCheck(0,1,2)).toBe(null);
		expect(endOfGameCheck(3,4,5)).toBe(false);
		expect(endOfGameCheck(6,7,8)).toBe(true);
	});
	
	it ("checks to see if all cells in the game board array are taken", function(){
		gameStateArray = new Array(0,0,0,0,0,0,0,0,0);
		expect(endOfGameFullBoard()).toBe(false);
		
		gameStateArray = new Array(1,1,1,1,1,1,1,1,1);
		expect(endOfGameFullBoard()).toBe(true);
	});
});
