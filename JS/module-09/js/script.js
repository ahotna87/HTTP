"use strict";

// class Worker {
//   constructor(name, surname, rate, days){
//     this._name=name;
//     this._surname=surname;
//     this._rate=rate;
//     this._days=days;
//   }
//   getSalary(){
//     this._salary = this._rate*this._days;
//     return this._salary;
//   };
//   getName(){
//     return this._name;
//   };
//   getSurname(){
//     return this._surname;
//   };
//   getRate(){
//     return this._rate;
//   };
//   getDays(){
//     return this._days;
//   };
//   setDays(days){
//     return this._days=days;
//   }
//   setRate(rate){
//     return this._rate=rate;
//   }

// }

// let worker1 = new Worker('Иван', 'Иванов', 10, 31);
// let worker2 = new Worker('Сергей', 'Петрович', 15, 25);

// /*
// console.log(worker1._name); //выведет 'Иван'
// console.log(worker1._surname); //выведет 'Иванов'
// console.log(worker1._rate); //выведет 10
// console.log(worker1._days); //выведет 31
// console.log(worker1.getSalary()); //выведет 310 - то есть 10*31

// console.log(worker2._name); //выведет 'Иван'
// console.log(worker2._surname); //выведет 'Иванов'
// console.log(worker2._rate); //выведет 10
// console.log(worker2._days); //выведет 31
// console.log(worker2.getSalary()); //выведет 310 - то есть 10*31
// */
// console.log(worker1.getName()); //выведет 'Иван'
// console.log(worker1.getSurname()); //выведет 'Иванов'
// console.log(worker1.getRate()); //выведет 10
// console.log(worker1.getDays()); //выведет 31
// console.log(worker1.getSalary()); //выведет 310 - то есть 10*31
// console.log(worker1.getSalary()+worker2.getSalary());
// //Теперь используем сеттер:
// worker1.setRate(20); //увеличим ставку
// worker1.setDays(10); //уменьшим дни
// console.log(worker1.getSalary()); //выведет 200 - то есть 20*10

// class MyString{

//   reverse (string){
//     return string.split('').reverse().join('');
//   };

//   ucFirst (string){
//     return string[0].toUpperCase()+ string.slice(1);
//   };

//   ucWords(string){
//     return string.split(" ").map((el,i,arr) => el[0].toUpperCase()+el.slice(1)).join(' ');
//   }
// }
// let str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// class Validator{
//   isEmail (email){
//     return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email);
//   }
//   isDomain(domain){
//     return /^[a-zA-Z0-9._\-]+\.[a-z]{3}$/.test(domain);
//     }

//     isDate(date){
//     return /^\d\d\.\d\d\.\d\d\d\d$/.test(date);
//     }

//     isPhone(phone){
//     return /^\+\d\d\d\s\(\d\d\)\s\d\d\d-\d\d-\d\d$/.test(phone);
//     }
// }

// let validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+380 (50) 770-41-77')); //тут можете формат своей страны

// class User{
//   constructor(name, surname){
//     this._name=name;
//     this._surname=surname;
//   };
//     getName(){
//         return this._name;
//   };

//    getSurname(){
//         return this._surname;
//   };

//    getFullName (){
//      return this._name+" "+this._surname;
//    };

// }

// class Student extends User{
//   constructor (name, surname, year){
//     super(name, surname);
//     this._year=year;
//   };
//   getYear(){
//     return this._year;
//   }
//   getCourse(){
//     let data= new Date();
//     return data.getFullYear()-this._year;
//   };
//   }
// let student = new Student('Иван', 'Иванов', 2017);

// console.log(student.getName()); //выведет 'Иван'
// console.log(student.getSurname()); //выведет 'Иванов'
// console.log(student.getFullName()); //выведет 'Иван Иванов'
// console.log(student.getYear()); //выведет 2017console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2020
// console.log(student.getCourse());




const watch = document.querySelector(".stopwatch");
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-reset");
const lapBtn = document.querySelector(".js-take-lap");
const clockface = document.querySelector(".js-time");

const js_laps = document.querySelector(".js-laps");


class Timer {
  constructor({ onTick }) {
    this.startTime = null;
    this.deltaTime = null;
    this.timerId = null;
    this.isActiv = false;
    this.onTick = onTick;
    this.pauseTime = null;
  }

  handleStart() {
    if (!this.isActiv) {
      this.isActiv = true;
      this.startTime = Date.now();
      startBtn.textContent = "Pause";
      

      this.timerId = setInterval(() => {
        const currentTime = Date.now() + this.pauseTime;
        this.deltaTime = currentTime - this.startTime;
        
        const timeCount = new Date(this.deltaTime - 10800000);

        const hour = timeCount.getHours();
        const min = timeCount.getMinutes();
        const sec = timeCount.getSeconds();
        const ms = Number.parseInt(timeCount.getMilliseconds() / 10);

        this.onTick({ hour, min, sec, ms });
      }, 10);
    } else {
      startBtn.textContent = "Continue";
      this.isActiv = false;
      this.pauseTime = this.deltaTime;
      clearInterval(this.timerId);
    }
  }
  handleStop() {
    startBtn.textContent = "Start";
    this.isActiv = false;
    clearInterval(this.timerId);
    this.timerId = null;
    this.startTime = null;
    this.pauseTime = null;
    this.deltaTime = 0;
    while (js_laps.firstChild) {
      js_laps.removeChild(js_laps.firstChild);
    }

    this.onTick({ hour: 0, min: 0, sec: 0, ms: 0 });
  }
  handleLaps() {
    if (this.isActiv) {
      startBtn.textContent = "Continue";
      const laps_item = document.createElement("li");

      laps_item.textContent = clockface.textContent; //==================
      js_laps.append(laps_item);
    }
  }
}
const timer = new Timer({
  onTick: updateClockface,
});

const timer1 = new Timer({
  onTick: updateClockface,
});

const timer2 = new Timer({
  onTick: updateClockface,
});

startBtn.addEventListener("click", timer.handleStart.bind(timer));
stopBtn.addEventListener("click", timer.handleStop.bind(timer));
lapBtn.addEventListener("click", timer.handleLaps.bind(timer));

function updateClockface({ hour, min, sec, ms }) {
  clockface.textContent = `${hour}:${String(min).padStart(2, "0")}:${String(
    sec
  ).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
}
watch.append(js_laps);
