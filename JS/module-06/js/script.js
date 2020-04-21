"use strict";

// function Animal(name, age, paws) {
//   this.name = name;
//   this.age = age;
//   this.paws = paws;
//   this.run = () => console.log("I can run !!!");
// }

// const rat = new Animal("Remi", 5, 4);

// const cat = new Animal("Vasya", 6, 4);

// const dog = new Animal("Vasya", 6, 4, false);

// Animal.prototype.tail = true;

// console.log(rat);
// console.log(cat);

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }

  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      return this._toppings.push(topping);
    }
  }
  removeTopping(topping) {
    return (this._toppings = this._toppings.filter(
      (toppings) => toppings !== topping
    ));
  }

  get getToppings() {
    return this._toppings;
  }

  get getHamburgerSize() {
    return this._size;
  }

  get getStuffing() {
    return this._stuffing;
  }

  calculatePrice(tee) {
    const totalPrice =
      this._toppings.reduce(
        (acc, item) => acc + Hamburger.TOPPINGS[item].price,
        0
      ) +
      Hamburger.STUFFINGS[this._stuffing].price +
      Hamburger.SIZES[this._size].price;
    return totalPrice;
  }

  calculateCalories() {
    const totalCalories =
      this._toppings.reduce(
        (acc, item) => acc + Hamburger.TOPPINGS[item].calories,0) +
      Hamburger.STUFFINGS[this._stuffing].calories +
      Hamburger.SIZES[this._size].calories;
    return totalCalories;
  }
}

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 60,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";
Hamburger.STUFFING_TOMATO = "STUFFING_TOMATO";

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
  [Hamburger.STUFFING_TOMATO]: {
    price: 30,
    calories: 13,
  },
};

Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";
Hamburger.TOPPING_MUSTARD = "TOPPING_MUSTARD";

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 1,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
  [Hamburger.TOPPING_MUSTARD]: {
    price: 5,
    calories: 3,
  },
};

const hamburger = new Hamburger(
  Hamburger.SIZE_SMALL,
  Hamburger.STUFFING_TOMATO,
);

hamburger.addTopping(Hamburger.TOPPING_SPICE);
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
hamburger.addTopping(Hamburger.TOPPING_MUSTARD);

console.log("Calories: ", hamburger.calculateCalories());
console.log("Price: ", hamburger.calculatePrice());

console.log("Price with sauce: ", hamburger.calculatePrice());

console.log(
  "Is hamburger large: ",
  hamburger.getHamburgerSize === Hamburger.SIZE_LARGE
); // -> true

hamburger.removeTopping(Hamburger.TOPPING_SPICE);

console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1

console.log("ИТОГО :");
console.log("finalToppingsList", hamburger._toppings);
console.log(" finalPrice: ", hamburger.calculatePrice());
console.log(" finalCalories: ", hamburger.calculateCalories());
