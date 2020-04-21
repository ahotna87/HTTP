'use strict';

class Worker {
  constructor(name, surname, rate, days){
    this._name=name;
    this._surname=surname;
    this._rate=rate;
    this._days=days;
  }
  getSalary(){
    this._salary = this._rate*this._days;
    return this._salary;
  }

    
}

let worker1 = new Worker('Иван', 'Иванов', 10, 31);
let worker2 = new Worker('Сергей', 'Петрович', 15, 25);

console.log(worker1._name); //выведет 'Иван'
console.log(worker1._surname); //выведет 'Иванов'
console.log(worker1._rate); //выведет 10
console.log(worker1._days); //выведет 31
console.log(worker1.getSalary()); //выведет 310 - то есть 10*31

console.log(worker2._name); //выведет 'Иван'
console.log(worker2._surname); //выведет 'Иванов'
console.log(worker2._rate); //выведет 10
console.log(worker2._days); //выведет 31
console.log(worker2.getSalary()); //выведет 310 - то есть 10*31

console.log(worker1.getSalary()+worker2.getSalary());

function getSumSalary(){
  return reduce((acc, salary) => acc+Worker.getSalary(),0);
};
console.log(getSumSalary());