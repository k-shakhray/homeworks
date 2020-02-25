console.log('Multiple of 5:');

let num;

do {
    num = +prompt('Enter your number:');
} while (!Number.isInteger(num) || isNaN(num) || ' ');

if (num >= 5) {
    for (let a = 0; a <= num; a++) {
        if (a % 5 === 0) console.log(a);
    }
} else {
    console.log('Sorry, no numbers');
}

console.log(' ');

/////////////////////////////////////////////////////////////////////

console.log('Prime numbers:');

let m;
let n;

do {
    m = +prompt('Enter first number:');
} while (isNaN(m) || !(m >= 2) || !Number.isInteger(m));
do {
    n = +prompt('Enter second number:');
} while (isNaN(n) || !(n >= m) || !Number.isInteger(n));

let isPrime;

for (let a = m; a <= n; a++) {
    let sqrt = Math.round(Math.sqrt(a));
    for (let b = 2; b < sqrt + 1; b++) {
        if (a % b === 0) {
            isPrime = false;
            break;
        }
        isPrime = true;
    }
    if (isPrime) {
        console.log(a);
    }
}


