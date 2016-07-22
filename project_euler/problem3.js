// first let's write a function to check if a number is prime

var isPrime = function(number) {
  if (number%2 === 0) {
    return false;  // if the number is even it's not prime
  }
  else {
    var i=0;
      for (i=3; i<= Math.sqrt(number); i+= 2) {
          if (number%i === 0) {
              return false; //bruteforce the odd factors until the square root of the number
          }
      }
  }
  return true;
};



// test for the largest prime

var largestPrimeFactor = function(number) {

  var largest = 0;
  var i=0;
  for (i=1; i<= Math.sqrt(number); i++) {
    if (number%i === 0) {
      if (isPrime(i)) {
        largest = i;
      }
      if (isPrime(number/i)) {
        return (number / i);
      }
    }
  }

  return largest;
};


// it worked :)


// BONUS
// list all the factors of a number
// let's be as simple as possible
// brute force method here

var listFactors = function(number) {

  var list = [];
  var i=0;
  for (i=1; i<= Math.sqrt(number); i++) {
    if (number%i === 0) {
      list.push(i);
      list.push(number/i);
    }
  }

  return list;
};

