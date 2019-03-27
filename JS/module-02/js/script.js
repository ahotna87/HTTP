"use strict";


const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attempts = 3;
let userPassword;
let truePassword;

do {
  userPassword = prompt("Введите, пожалуйста, пароль... ");
  if (userPassword !== null) {
    truePassword = passwords.includes(userPassword);

    if (truePassword) {
      alert("Добро пожаловать!");
      break;
    }

    if (!truePassword) {
      attempts -= 1;
      if (attempts > 0) {
        alert(`Неверный пароль, попробуйте еще раз! \r\У Вас осталось ${attempts} попытки.`);
      }
      else {
        alert("Ваш аккаунт заблокирован!");
      }
    }

  } else {
    alert(`ДОСВИДОС!`);
  }

} while (userPassword !== null && attempts > 0);

