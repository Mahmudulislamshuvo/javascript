"use strict";

const employee = {
  id: "A87678JGJ",
  firstname: "Sumona",
  lastname: "A",

  returnThis: function () {
    return this;
  },

  getFullname: function () {
    return `${this.firstname} ${this.lastname}`;
  },
};

console.log("employee id", employee.id);
console.log("employee returnThis", employee.returnThis());

console.log("Full name", employee.getFullname());

const tom = {
  name: "Tom",
  age: 10,
};
const jerry = {
  name: "jerry",
  age: 4,
};

function GreatMe(obj) {
  obj.lagMessage = function () {
    console.log(`${this.name} is ${this.age} years old`);
  };
  console.log("updated obj", obj);
}

GreatMe(jerry);
jerry.lagMessage();

function outer() {
  console.log("this is outer function", this);
  return function inner() {
    console.log("This is inner function", this);
  };
}

console.log(outer());

// ======in arrow function============

const getFood = () => this;

console.log("Arrow function this", getFood());

const food = {
  name: "mango",
  color: "yello",
  //   getdesc: () => `${this.name} is ${this.color}`,
  //   getdesc: function () {
  //     return `${this.name} is ${this.color}`;
  //   },
  getdesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};

// console.log(food.getdesc()());
const descfunc = food.getdesc();
console.log(descfunc());

function greating() {
  console.log(`Hello ${this.name} belongs to ${this.address}`);
}

const user = {
  name: "Shvuo",
  address: "Dhaka",
};

greating.call(user);
// =======call function========
const likes = function (hobby, honny2) {
  console.log(`${this.name} likes those ${hobby},${honny2} `);
};

const person = {
  name: "Shuvo",
};

likes.call(person, "travel", "hiking");
// ========apply() function========
const hobbiesApply = ["Hiking with Sumona", "Traveling she Around the world"];
likes.apply(person, hobbiesApply);

// =======bind method

const likess = function (hobby, honny2) {
  console.log(`${this.name} likes those ${hobby},${honny2} `);
};
const prson = {
  name: "Sumona",
};

const SumonaLkes = likess.bind(prson, "Ice-cream", "Travel");
SumonaLkes();

const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + " is a " + this.animal);
  };
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();

const obj = {
  name: "Bob",
  greet: function () {
    console.log(`${this.name}`);
  },
};

const greetfunc = obj.greet;
greetfunc.call(obj);
