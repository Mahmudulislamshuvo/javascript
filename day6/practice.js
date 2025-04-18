// ========define a function=========
function doSomething() {
  console.log("Prining....");
}

// call or invoke function
// কল না করলে ফাংশন কাজ করবেনা।
doSomething();

// ==========Functon as an Expression=======
let iamFunction = function () {
  console.log("Print me");
};

console.log(iamFunction);
// Output=====
// ƒ () {
//   console.log("Print me");
// }

// =======Perameters and Argument===========
function Perameter(a, b) {
  let numberr = a + b;
  return numberr;
}
// =========this is expresstion==========
let result = Perameter(20, 50);

function double(x) {
  return 2 * x;
}

console.log("duble value is", double(result));

// =========default perameters=========
function calc(a, b) {
  return 2 * (a + b);
}

const resVer = calc(2);
console.log(resVer); // NaN দেখাবে কারন b এর ভালু সেট করা হয়নাই
// মুলত b এখানে undefined আছে তাই
// (a + b) = 2 + undefined = NaN । এখন
// ২ যখন undefined এর সাথে গুন হবে দেখাবে NaN

function calce(a, b = 0) {
  return 2 * (a + b);
}

const resVerr = calce(2);
console.log("Actual Default value", resVerr);

// ==========Rest Perameter==========
function calculateThis(a, b) {
  console.log(a, b);
}

calculateThis(1, 2, 3, 4, 5, 6, 7, 8, 9);
// এখানে এখন লগ এ দেখাচ্ছে 1, 2 কিন্তু বাকি গুলা গেল কই?
//বাকি গুলা দেখতে ...rest এভাবে লিখতে হবে আর শেষে লিখতে হবে।
function calculateThiss(a, b, ...rest) {
  console.log(a, b, rest);
}
// ...rest এটা একটা এরে রিটান করে
calculateThiss(1, 2, 3, 4, 5, 6, 7, 8, 9);

//  1 2 [3, 4, 5, 6, 7, 8, 9] এরোকম।

//============ Nested function=================
function outer() {
  function inner() {}
}
// inner() কে সুধু মাত্র outer function এর মদ্ধেই কল করতে পারব তার বাইরে করলে কাজ করবেনা।
// যদি আমি রিটান করে দেই outer থেকে তাইলে ব্যাবহার করা যাবে
// Example
function outerr() {
  return function innerr() {};
}
const innerFunc = outerr();
console.log(innerFunc());
// এভাবে।

// ==============Call back function===============
function foo(func) {
  console.log("foo");
  func();
}

foo(function () {
  console.log("function");
});
// এখানে নিচের perameter হিসেবে পুরো ফাংশন দিয়ে দেওয়া হয়ছে, annonymous function
// function তো কল না করলে কাজ করেনা তাই, foo ফাংশনে পেরামিটারকে কল কর হয়েছে।

// ===============Pure function===============
let greetings = "Hi";

function greeter(name) {
  return greetings + name;
}

console.log(greeter("Shuvo"));
console.log(greeter("Shuvo"));
greetings = "Hola";
console.log(greeter("Shuvo"));
console.log(greeter("Shuvo"));
console.log(greeter("Shuvo"));
// // output
// HiShuvo
// HiShuvo
// HolaShuvo
// HolaShuvo
// HolaShuvo
// Defination: এইযে বাইরে থেকে ফাংশনের ভেলু বা কাজ পালটিয়ে দেওয়া গেল
// এটা pure ফাংশন না। pure এর কোন কিছুই বাইরে থেকে বদলানো যাবেনা।

// ========Highter order function=========
// এটা ২ ভাবে কাজ করে একটা হলো।

function getCamera(camera) {
  camera();
}

getCamera(function () {
  console.log("another function inside getCamera func");
});
// another way

function returnFunc() {
  return function () {
    console.log("another way like this");
  };
}
const retfunc = returnFunc();

retfunc();

// ==========Arrow function==========
// simple syntex
let arrowfunction = () => {
  console.log("This is Arrow function");
};
arrowfunction();
// another way

let arrowfunctionn = () => console.log("This is Arrow function");
// যদি একটা বিষয় নিয়ে কাজ করি তাইলে, {} এটার মধ্যে দিয়ে রিটান করতে হবেনা। এটা অটো রিটান হয়ে যাবে।
arrowfunctionn();
// কিন্তু যদি অন্য ভাবে করি
let thisIsArr = (item) => {
  return item + "Shuvo";
};
console.log(thisIsArr("Hello"));
// এখানে, রিটান করা লাগবে নাইলে কাজ করবেনা।

// ==========IIFE============
// syntex
(function () {
  console.log("IIFE");
})();
// এখানে প্রথম () এ function থাকবে পরেরটা তে থাকবে আরগুমেন্ট
(function (count) {
  console.log("IIFE", count);
})(1);
// এভাবে
// কখন use করি?
// এই ফাংশনের Dom এর সাথে কোন কাজ নেই যখনি js file load হবে সাথে সাথে এটা রান হবে কারো জন্য অপেক্ষা করবেনা।

// ===========call stack============
// এটা নরমাল syntex
function one() {
  console.log("This is one");
}
function two() {
  console.log("This is two");
}
function three() {
  console.log("This is three");
}

one();
two();
three();
// twist এখানে

function one1() {
  console.log("This is one1");
}
function two2() {
  console.log("This is two2");
  one1();
}
function three3() {
  console.log("This is three3");
  two2();
}
three3();
// প্রথমে three3() কল হবে তার মাঝে গিয়ে দেখবে two2() কল করা যাবে two2 এর কাছে অইটার কাজ করতে দেখবে one1() কল করা, এখানে কি হবে আগে ১ পরে ২ তার পরে ৩ এর কাজ শেষ হবে

//============ Recursion============

function fetchData(count) {
  console.log("fetching data from Db...", count);

  // fetchData(count - 1); error এর জন্য comment করা হয়েছে
}

fetchData(5);
// এরোকম করলে কি হচ্ছে একনে?
// function রান হচ্ছে , রান হয়ে দেখতেছে তাকে আবার কল করা হয়ছে এভাবে যে infinite loop এর মত কল হবে।
// এটাকে prevent করতে,
function fetchData(count) {
  console.log("fetching data from Db...", count);
  if (count === 0) {
    console.log("No more data for fech here");
    return;
  }
  fetchData(count - 1);
}

fetchData(5);
