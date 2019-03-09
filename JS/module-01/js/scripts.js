"use strict";

const hotelsSharm = 1;
const hotelsHurgada = 2;
const hotelsTaba = 3;

const hotels1 = "Sharm";
const hotels2 = "Hurgada";
const hotels3 = "Taba";

let places1 = 15;
let places2 = 25;
let places3 = 6;

let hotelsName;
let userConfirm;
let placesConfirm;

const userInput = prompt(
  "Выбирете место отдыха: Sharm - 1, Hurgada - 2, Taba - 3"
);
const hotels = Number(userInput);
const isValidInput =
  userInput !== null &&
  !Number.isNaN(hotels) &&
  userInput > 0 &&
  userInput <= 3;

if (isValidInput) {
  const person = prompt("Введите необходимое количество мест в группе ");
  const personNeed = Number(person);
  const isValidInputperson =
    person != null && !Number.isNaN(personNeed) && person > 0;
  if (!isValidInputperson) {
    alert(`Введите корректное число необходимых мест!`);
  } else {
    if (isValidInputperson && person > 25) {
      alert(`Извините, такого количества мест нет.`);
    }
    if (isValidInputperson) {
      placesConfirm = personNeed <= places3;
      if (placesConfirm) {
        hotelsName = hotels3;
        userConfirm = confirm(
          `В группе ${hotels3} есть необходимое колличество свободных мест. Желаете присоединиться?`
        );
        if (userConfirm) {
          places3 = places3 - personNeed;
          alert(`Приятного путешествия в ${hotelsName}!`);
        }
      }
    }

    if (!placesConfirm || !userConfirm) {
      placesConfirm = personNeed <= places1;
      if (placesConfirm) {
        hotelsName = hotels1;
        userConfirm = confirm(
          `В группе ${hotels1} есть необходимое колличество свободных мест. Желаете присоединиться?`
        );
        if (userConfirm) {
          places1 = places1 - personNeed;
          alert(`Приятного путешествия в ${hotelsName}!`);
        }
      }
    }

    if (!placesConfirm || !userConfirm) {
      placesConfirm = personNeed <= places2;
      if (placesConfirm) {
        hotelsName = hotels2;
        userConfirm = confirm(
          `В группе ${hotels2} есть необходимое колличество свободных мест. Желаете присоединиться?`
        );
        if (userConfirm) {
          places2 = places2 - personNeed;
          alert(`Приятного путешествия в ${hotelsName}!`);
        } else {
          alert(`Нам очень жаль, приходите еще!`);
        }
      }
    }
  }
} else {
  alert(`Ошибка ввода!`);
}
