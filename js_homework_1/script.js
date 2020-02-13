
/*
    1. Обьяснить своими словами разницу между обьявлением переменных через var, let и const:

Переменная var действует в рамках функции, тогда как let в рамках блока, не может выйти за скобки {}

const - это константа. При попытке ее изменить js выдаст ошибку

let - простая переменная которую можно переназначить в любое время
*/


/*
    2. Почему объявлять переменную через var считается плохим тоном?:

var может существовать до того как её объявили. Пример:
  alert(text);
  var text = "abcd";

А ещё var просто устарел
*/


let age;

do {
    age = +prompt('Enter your age:');
} while (isNaN(age) === true);

let name = prompt('Enter your name:');

if (age < 18) {
    alert('You are not allowed to visit this website')
}

else if (age >= 18 && age <=22) {
    let confirmResult = confirm('Are you sure you want to continue?');

    if (confirmResult) {
        alert('Welcome, ' + name)
    }

    else {
        alert('You are not allowed to visit this website');
    }
}

else {
    alert('Welcome, ' + name);
}