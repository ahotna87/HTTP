"use strict";

// Модуль 4 - Домашнее задание
// /*
//   Создайте объект кассира, который получает список продуктов и деньги, 
//   подсчитывает общую стоимость продуктов, и в зависимости от того
//   хватает денег или нет, уведомляет покупателя о результате.
// */

// /*
//   Есть заранее известная база данных товаров, 
//   в формате "имя-товара":"цена за одну единицу"
// */ 
// const products = {
//   bread: 10,
//   milk: 15,
//   apples: 20,
//   chicken: 50,
//   pork: 80,
//   cheese: 60,
//   tea: 20,
//   candy: 25
// };

// /* 
//   Необходимо создать функцию-конструктор Cashier для объектов кассира,
//   чтобы можно было создать сколько угодно кассиров.


//   Поля объекта кассира: 
//     - name - строка, имя, передается при вызове конструктора

//     - products - объект база данных продуктов, передается при вызове конструктора

//     - totalPrice - число, общая стоимость покупок текущего покупателя, всегда начинается с 0 

//     - customerMoney - число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0 

//     - changeAmount - число, сдача, всегда начинается с 0

//     - countTotalPrice(order) - метод, получает список покупок, считает общую сумму исходя из поля products

//     - getCustomerMoney() - метод, при вызове показывает prompt, в котором указана общая 
//         сумма покупок из поля totalPrice. Ожидает ввода пользователя и записывает результат ввода в поле customerMoney.
//         Проверить что пользователь ввел число. Также customerMoney должна быть не меньше чем totalPrice. 
//         Просит покупателя ввести сумму до тех пор, пока не будет введена корректная сумма - число, 
//         равное или больше чем totalPrice. Если пользователь нажмет Cancel, то функция возвращает null.

//     - countChange() - метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.

//     - reset() - метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.

//     - serve(order) - метод, вызывается при обслуживании пользователя. Получает order - список покупок пользователя, 
//         вызывает метод countTotalPrice для подсчета общей суммы, getCustomerMoney для запроса денег покупателя, 
//         countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
//         строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
//         Вызывает метод reset при любом исходе обслуживания.
// */

// function Cashier(name, products) {
//   // код
//   // не забывайте о this при обращении к свойствам и методам будущего объекта
// }

// /*
//   В метод serve будут передаваться объекты следующего формата. "имя-продукта": "количество-единиц"
// */
// const order = {
//   bread: 2,
//   milk: 2,
//   apples: 1,
//   cheese: 1
// };

// /*
//   Ниже приведен пример использования.
// */

// const cashier = new Cashier('Mango', products);

// cashier.serve(order);
// /*
//   При вызове cashier.serve, countTotalPrice посчитает общую сумму равную 20+30+20+60, итого 130
//   Далее выполнение идет по вышеописанному алгоритму.
// */

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};



function Cashier(name) {
  this.name = name;
}


function Cashier({ name, products, totalPrice = 0, customerMoney = 0, changeAmount = 0 }) {
  this.name = name;  //строка, имя, передается при вызове конструктора
  this.products = products; //объект база данных продуктов, передается при вызове конструктора
  this.totalPrice = totalPrice; //число, общая стоимость покупок текущего покупателя, всегда начинается с 0
  this.customerMoney = customerMoney; //число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0
  this.changeAmount = changeAmount; //число, сдача, всегда начинается с 0

  this.countTotalPrice = function (order) {
    for (let item in order) {
      this.totalPrice += order[item] * this.products[item];
    }
    return this.totalPrice;
  } //метод, получает список покупок, считает общую сумму исходя из поля products

  this.getCustomerMoney = function (value) {
    this.customerMoney = value;

  } //метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice.

  this.countChange = function () {
    if (this.customerMoney < this.totalPrice) {
      return false;
    }
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  } //метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.

  this.reset = function () {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }// метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.

  this.serve = function (order) {


  }  //метод, вызывается при обслуживании пользователя. 
  //Получает order - список покупок пользователя, вызывает метод countTotalPrice для подсчета общей суммы, 
  //getCustomerMoney для запроса денег покупателя, 
  //countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
  //строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
  //Вызывает метод reset при любом исходе обслуживания.
}

const cashier = new Cashier('Mango', products);
console.log(cashier);
cashier.getCustomerMoney(120);











function Cashier(foods) {
  this.foods = foods;
  this.money = 0;
  this.sum = 0;

  this.totalPrice = function (cart) {

    for (let i in cart) {
      for (let j in this.foods) {
        if (cart[i] === j) this.sum = this.sum + this.foods[j];
      }
    }
    alert(`goods, ${this.sum}`);
  }

  this.getMoney = function () {
    this.money = prompt('dsfsdfsdf')
  }

  this.change = function () {
    console.log(this.money - this.sum);
  }
}

const vasya = new Cashier({ qwe: 10, rty: 20, vbnm: 30, dfg: 30, wer: 50 });


const cart = ['qwe', 'rty', 'dfg'];
vasya.totalPrice(cart);


vasya.getMoney();

vasya.change();