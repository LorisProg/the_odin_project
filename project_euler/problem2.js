// Project Euler problem 2

// function to test if a number is even

var isEven = function(number) {
  if (number%2 === 0) {
    return true;
  }
  return false;
};


// function to add the even Fibonacci number until a target


var addEvenFibo = function(target) {

  var fibo = [1, 2];
  var sum = 2;
  var i = 0;
  
  for (i=2; fibo[i-1] + fibo[i-2] < target; i++) {      
    
    fibo[i] = fibo[i-1] + fibo[i-2];

    if (isEven(fibo[i])) {
      sum += fibo[i];
    }
  }

  return sum;

};

