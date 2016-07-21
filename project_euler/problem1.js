var multiples = new Array();

for (i = 1; i < 1000; i++) {
    if (i%5 === 0) {
        multiples.push(i);
    }
    if (i%3 === 0 && i%5 !== 0) {
        multiples.push(i);
    }
}

var sum = 0;

for (i = 0; i < multiples.length; i++) {
    sum = sum + multiples[i];
}

console.log(sum);