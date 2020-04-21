`use strict`;

// let numberA = +prompt("Введите первое число ", ``);
// let numberB = +prompt("Введите второе число ", ``);
// let sumOfNumbers = 0;

// const isNumeric = function(a, b) {
//   return !isNaN(parseFloat(a, b)) && isFinite(a, b);
// };
// if (isNumeric(numberA, numberB)) {
//   sumOfNumbers = numberA + numberB;
//   alert(`Сумма чисел ${numberA} + ${numberB} равна:\n ${sumOfNumbers}`);
// } else alert("Ошибочка!");

// let numberA = +prompt("Введите первое число ", ``);
// let numberB = +prompt("Введите второе число ", ``);
// let sumOfNumbers = 0;

// const isNumeric = function(a, b) {
//   return !isNaN(parseFloat(a, b)) && isFinite(a, b);
// };
// if (isNumeric(numberA, numberB)) {
//   sumOfNumbers = numberA + numberB;

//   alert(
//     `Сумма чисел ${numberA} + ${numberB} равна:\n ${sumOfNumbers.toFixed(2)}`
//   );
// } else alert("Ошибочка!");

// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   alert(i.toFixed(1));
// }

// function fib(n) {
//   let a = 1,
//     b = 0,
//     x;
//   for (i = 0; i < n; i++) {
//     x = a + b;
//     a = b;
//     b = x;
//   }
//   return b;
// }
// alert(fib(4));

// function fibBinet(n) {
//   let a = (1 + Math.sqrt(5)) / 2;
//   let fibonachi = Math.pow(a, n) / Math.sqrt(5);
//   return fibonachi;
// }

// alert(fibBinet(4));

// let numberA = +prompt("Введите начальное число диапазона", ``);
// let numberB = +prompt("Введите конечное число диапазона ", ``);
// let x = numberA + Math.random() * (numberB - numberA);
// console.log(x);

// function checkSpam(str) {
//   let lower = str.toLowerCase();
//   return alert(!!(~lower.indexOf("viagra") || ~lower.indexOf("xxx")));
// }

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// alert(extractCurrencyValue("$120"));

// function isEmpty(obj) {
//   for (var code in schedule) {
//     return true;
//   }
//   return false;
// }
// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "подъём";

// alert(isEmpty(schedule)); // false

// let fruits = ["Яблоко", "Груша", "Слива"];

// fruits.push("Компютер");
// let lastItem = fruits[fruits.length - 1];
// fruits[fruits.length] = "Компютер";
// alert(lastItem);

// let style = [`Джаз`, ` Блюз`];
// alert(style);

// style.push(` Рок-н-Ролл`);
// alert(style);

// style[style.length - 2] = ` Классика`;
// alert(style);

// style.shift(0);
// alert(style);

// style.unshift(` Рэп`, ` Рэгги`);
// alert(style);

// let arr = ["Яблоко", "Апельсин", "Груша", "Лимон", "Персик", "Абрикос"];

// let rand = Math.floor(Math.random() * arr.length);

// alert(arr[rand]);

// let numbers = [];

// while (true) {
//   let value = prompt("Введите число", 0);

//   if (value === "" || value === null || isNaN(value)) break;

//   numbers.push(+value);
// }

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// alert(sum);

// let filterRange = function (arr, a, b){
//   let result = [];
//   for (let i=0; i < arr.length; i++){
//   if (arr[i]>=a && arr[i]<=b){
//     result.push(arr[i]);
//       }
//   }
//   return result;
// }
// let arr = [5, 4, 3, 8, 0];
// let filtered = filterRange(arr, 3, 5);
// alert( filtered );

// let arr = new Array(101);
// for (let i = 0, j = 0; i <= arr.length - 1 && j <= arr.length; i++, j++) {
//   arr[i] = j;
// }
// alert(arr);

// let arr = [1, -2, 15, 2, 0, 8];
// let rev = function(arr) {
//   return arr.reverse();
// };
// console.log(rev(arr));

var arr = ["HTML", "JavaScript", "CSS"];

let arrSorted = arr.slice(`, `).sort();

alert(arrSorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)
