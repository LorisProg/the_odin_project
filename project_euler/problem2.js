  var fibo = [1, 2];
  
  for (i=2; fibo[i-1] + fibo[i-2]<4000000; i++) {
      
      fibo[i] = fibo[i-1] + fibo[i-2];
  }
  
  console.log(fibo);

var even = [];
  for (i=0; i<fibo.length; i++)  {
      if (fibo[i]%2 === 0) {
          even.push(fibo[i]);
      }
  }
  
console.log(even);

var sum = 0;

for (i = 0; i < even.length; i++) {
    sum = sum + even[i];
}

console.log(sum);