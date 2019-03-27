"use strict";

const hotels1 = "Sharm";
const hotels2 = "Hurgada";
const hotels3 = "Taba";

let Sharm = 15;
let Hurgada = 25;
let Taba = 6;

let hotelsName;
let userConfirm;
let placesConfirm;

const person = prompt("Введите необходимое количество мест в группе ");
const personNeed = Number(person);
const isValidInputperson = !Number.isNaN(personNeed) && person > 0;

// Check validation
if (person == null) {
  alert(`Ну и ладно, Пока!!!`);
} else if (!isValidInputperson) {
  alert(`Введите корректное число необходимых мест!`);
} else {
  if (
    isValidInputperson &&
    person > Sharm &&
    person > Hurgada &&
    person > Taba
  ) {
    alert(`Извините, такого количества мест нет.`);
  }

  // Check Taba group

  if (isValidInputperson) {
    placesConfirm = personNeed <= Taba;
    if (placesConfirm) {
      hotelsName = hotels3;
      userConfirm = confirm(
        `В группе ${hotels3} есть необходимое колличество свободных мест. Желаете присоединиться?`
      );
      if (userConfirm) {
        Taba = Taba - personNeed;
        alert(`Приятного путешествия в ${hotelsName}!`);
      }
    }
  }

  // Check Sharm group

  if (!placesConfirm || !userConfirm) {
    placesConfirm = personNeed <= Sharm;
    if (placesConfirm) {
      hotelsName = hotels1;
      userConfirm = confirm(
        `В группе ${hotels1} есть необходимое колличество свободных мест. Желаете присоединиться?`
      );
      if (userConfirm) {
        Sharm = Sharm - personNeed;
        alert(`Приятного путешествия в ${hotelsName}!`);
      }
    }
  }

  // Check Hurgada group

  if (!placesConfirm || !userConfirm) {
    placesConfirm = personNeed <= Hurgada;
    if (placesConfirm) {
      hotelsName = hotels2;
      userConfirm = confirm(
        `В группе ${hotels2} есть необходимое колличество свободных мест. Желаете присоединиться?`
      );
      if (userConfirm) {
        Hurgada = Hurgada - personNeed;
        alert(`Приятного путешествия в ${hotelsName}!`);
      } else {
        alert(`Нам очень жаль, приходите еще!`);
      }
    }
  }
}
