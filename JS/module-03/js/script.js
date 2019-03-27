"use strict";


// Модуль 3 - Домашнее задание


//   Есть массив logins с логинами пользователей.
//   Написать функцию, addLogin(logins, login) которая:
//     1) Получает новый логин и массив всех логинов как аргументы

//     2) Проверяет валидность логина используя вспомогательную 
//        функцию robotGoogles(login), которая проверяет 
//        количество символов логина и возвращает true если логин 
//        подходит под условие длины от 4-х до 16-ти символов 
//        включительно, и false если не подходит.

//     3) Если логин не валиден, прекратить исполнение функции addLogin 
//        и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.

//     4) Если логин валиден, проверить уникальность логина с помощью 
//        функции checkIfLoginExists(logins, login), которая проверяет наличие 
//        логина в массиве logins, возвращая false если такого логина
//        в массиве еще нет, и true если есть.

//     5) Если checkIfLoginExists вернет false, добавить новый логин 
//        в logins и вернуть строку 'Логин успешно добавлен!'. 
//        Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
//        логин в массив и возвращает строку 'Такой логин уже используется!'.
// */

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const maxLength = 16;
const minLength = 4;
let checkUser = true;

const login = prompt(`Введите логин...`);

// check Validation login for length
const robotGoogles = function (login) {
  if (login !== null && login.length >= minLength && login.length <= maxLength) {
    return true;
  } return false;

};

// check for the presence of the entered login in the array
const checkIfLoginExists = function (logins, login) {
  if (logins.includes(login)) {
    return true;
  } return false;

};

const addLogin = function (logins, login) {

  if (robotGoogles(login)) {

    if (checkIfLoginExists(logins, login)) {
      alert(`Логин ${login} уже используется.`);

    } else {
      logins.push(login);
      alert(`Логин ${login} успешно добавлен!`);
      console.log(`${logins}`);
    }

  } else {
    alert(`Ошибка! Логин должен быть от 4 до 16 символов!`);
  }

};

addLogin(logins, login);







// if (userInput !== null) {
//   let validUser = logins.includes(userInput);
//   const inRange = userInput.length >= minLength && userInput.length <= maxLength;

//   if (validUser) {
//     alert(`Логин ${userInput} уже используется.`);
//     console.log(checkUser);

//   } else if (!validUser && inRange) {
//     logins.push(userInput);
//     alert(`Логин ${userInput} успешно добавлен!`);
//     console.log(checkUser);
//   }

//   else {
//     alert(`Ошибка! Логин должен быть от 4 до 16 символов!`);
//     checkUser = false;
//     console.log(checkUser);

//   }
// }

// else {
//   alert(`Досвидос!`);
// }
