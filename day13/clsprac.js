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
