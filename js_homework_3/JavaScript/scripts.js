let numA;
let numB;
let oper;

let previousA;
let previousB;

do {
    numA = prompt('Enter first number:', previousA);
    previousA = numA;
} while (isNaN(+numA) || !numA || numA === ' ');


do {
    numB = prompt('Enter second number:', previousB);
    previousB = numB;
} while (isNaN(+numB) || !numB || numB === ' ');

do {
    oper = prompt('Enter operator:')
} while (oper !== '+' && oper !== '-' && oper !== '*' && oper !== '/');


function calculation(number1, number2, operator) {

    let res;
    
    switch (operator) {
        case '+': res = +number1 + +number2;
            break;
        case '-': res = +number1 - +number2;
            break;
        case '*': res = +number1 * +number2;
            break;
        case '/': res = +number1 / +number2;
            break;
    }

    return res;
}

console.log(calculation(numA, numB, oper));