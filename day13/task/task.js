"use strict";
// Task -1 ===============
console.log(this);

const insideobj1 = {
  name: "Shuvo",
  age: 26,
  getfunc: function greetings() {
    console.log(this.name);
  },
};

insideobj1.getfunc();

function standalone() {
  console.log(this);
}

standalone();

const arrowAlone = () => {
  console.log(this);
};

arrowAlone();

const userobj2 = {
  name: "Shuvo",
  getfresh: () => {
    console.log(this.name);
  },
};

console.log(userobj2.getfresh());

// still little confusetion about that one
function Animal(type) {
  this.type = type;
  this.show = function () {
    console.log(this.type);
  };
}

const cat = new Animal("Cat");
cat.show();

// ===========Task-2==========
const user = {
  name: "tapaScript",
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};

const userArr = user.greet();
userArr();
// এখানে যেটা ছিল তাতে undefined দেখাচ্ছিল কারন,
// আরো ফাংশন কোন this বানায়না তাই, তার পারেন্ট এর this দেখতেছিল user যার কারনে সুধু undefined দেখাচ্ছিল।
// সমাধান করলাম এটাকে একটা ফাংশনে মুরে দিয়ে আর পুরো arrow ফাংশন কে রিটার্ন করে দিলাম।

// ==========Task-3============
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet.bind(obj);
greetFn();

// এখানে সমস্যা ছিল, greet হচ্ছে একটা মেথড তাই মেথড এর পেরেন্ট ছিল অব্জেক্ট। কিন্তু অব্জেক্ট এর this করলে পাবে
