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
	
});
