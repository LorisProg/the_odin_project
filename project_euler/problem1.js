// Project Euler problem 1
// function which calculates the sum of the multiples of integrer below a target

var multipleSum = function(x, y, target) {

	var sum = 0;
    var i = 0;
	for (i = 1; i < target; i++) {
    	if (i%x === 0) {
        	sum += i;
    	}
    	else if (i%y === 0) {
        	sum += i;
    	}
	}
	return sum;
};

