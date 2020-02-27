
let n = +prompt('Enter number:');

let res;

const cache = {};

function fibonacciNumber(a) {
    if (a in cache) {
        return cache[a];
    }
    if (a <= 1 && a >= -1) {
        return a;
    }

    if (n > 1) {
        res = fibonacciNumber(a - 1) + fibonacciNumber(a - 2);
    }
    else if (n < -1) {
        res = fibonacciNumber(a + 1) + fibonacciNumber(a + 2);
    }
    cache[a] = res;
    return res;
}

alert(fibonacciNumber(n));
