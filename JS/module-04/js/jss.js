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

function Cashier(name, products) {
  this.name = name;  //строка, имя, передается при вызове конструктора
  this.products = products; //объект база данных продуктов, передается при вызове конструктора
  this.totalPrice = 0; //число, общая стоимость покупок текущего покупателя, всегда начинается с 0
  this.customerMoney = 0; //число, сумма введенная пользователем в prompt при запросе денег, всегда начинается с 0
  this.changeAmount = 0; //число, сдача, всегда начинается с 0

  this.countTotalPrice = function (order) {
    for (let item in order) {
      this.totalPrice += order[item] * this.products[item];
    } return this.totalPrice;
  } //метод, получает список покупок, считает общую сумму исходя из поля products

  this.getCustomerMoney = function () {
    this.customerMoney = prompt(`Сумма Ваших покупок составляет ${this.totalPrice} \n Укажите сумму, которую дал клиент`);
  } //метод, при вызове показывает prompt, в котором указана общая сумма покупок из поля totalPrice.

  this.countChange = function () {
    if (this.totalPrice <= this.customerMoney) {
      this.changeAmount = this.customerMoney - this.totalPrice;
      return alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    }

    return alert(`Очень жаль, что-то пошло не так, приходите еще.`);

  } //метод, считает сдачу, разницу между общей суммой покупок и деньгами покупателя.

  this.reset = function () {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }// метод, сбрасывает поля totalPrice, customerMoney и changeAmount в 0.

  this.serve = function (order) {
    console.log(`Здравствуйте, Вас обслуживает кассир `, this.name);

    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();
    this.reset();
    console.log(`totalPrice = ${this.totalPrice}, customerMoney = ${this.customerMoney}, changeAmount = ${this.changeAmount}`);

  }  //метод, вызывается при обслуживании пользователя. 
  //Получает order - список покупок пользователя, вызывает метод countTotalPrice для подсчета общей суммы, 
  //getCustomerMoney для запроса денег покупателя, 
  //countChange для подсчета сдачи при успешном вводе пользователя. При успешном обслуживании возвращает 
  //строку `Спасибо за покупку, ваша сдача ${сдача}`, при неудачном 'Очень жаль, что-то пошло не так, приходите еще'.
  //Вызывает метод reset при любом исходе обслуживания.
}


/* Заказ пользователя хранится в виде объекта следующего формата. "имя-продукта":"количество-единиц" */
const order1 = { bread: 2, milk: 2, apples: 1, cheese: 1 };
const order2 = { bread: 1, milk: 1, apples: 1, chicken: 2, cheese: 2, tea: 2 };
const order3 = { bread: 3, apples: 5, cheese: 1, candy: 4 };
const order4 = { milk: 3, apples: 4, chicken: 1, candy: 6, cheese: 3 };
const order5 = { bread: 2, milk: 2, cheese: 1, tea: 5 };
/* Создадим кассиров */
const vasya = new Cashier("Vasya", products);
const anna = new Cashier("Anna", products);
const mango = new Cashier('Mango', products);

console.log(`Список товаров и цены нашего магазина`, products);

vasya.serve(order1);
anna.serve(order2);
vasya.serve(order3);
anna.serve(order4);
mango.serve(order5);
