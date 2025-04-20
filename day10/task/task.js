// ============Task-1==============
let user = "Alice";

function outer() {
  function inner() {
    console.log(user); //Bob
  }
  let user = "Bob";
  inner();
}

outer();

// সবার আগে প্রিন্ট হবে।
// console.log(user); Bob এটা কারন নিজের scope খুজে না পেলে বাইরে আসতে থাকবে। বাইরে এসেই Bob পেয়ে যাবে আর বের হবেনা।

// ============Task-2==============
let total = 0; // Global, bad practice

function add(num) {
  total += num;
  return total; // এটাই mistake ছিল কারন
}

add(5);
add(10);
console.log(total); //15

// =============Task-3============

function parant() {
  let ParantVar = "Log from parant variable";
  function childd() {
    console.log(ParantVar);
  }
  childd();
}

parant();

// =============Task-4==============
function getlopp(num) {
  for (let a = 0; a < num; a++) {
    let variable = 10 + a;
  }
  //   console.log(variable);
}

getlopp(5);
// না access করা যাবেনা variable কে।
// কারন scope এর নিয়ম অনুজায়ি কোন কিছুর ভেতরের কিছুকে acess করতে পারেনা, কিন্তু যদি globally থাকত তাহলে access করতে পারত।

// ============Task-5=============
function one() {
  let dec = 5;
}
function two() {
  one();
  //   console.log(dec);
}

two();
// না এটাকে access করতে পারবেনা কারন একটা ব্লকের কিছু অন্য ব্লক এ ব্যাবহার করা যাবেনা।

// ====================Task-6=================
// console.log(a);
// let a = 10;
// এখানে GEC হবে, যার মধ্যে
// CP: it will find a function js will store it in a memory, then it will get a varible it will store it a = undefined.CP
// EP: it will read from first line, in first line it will get a function log()
//   FEC:
//     CP: there is no varibale and no function nothing to do here.CP
//     EP: it will find a so it will throgh a error
//     came out call stack
// then it will assign a = 10

// =====================Task-7===================
function showAge() {
  let age = 25;
  console.log(age);
}

// console.log(age);
// age acessible only inside of function scope, cause is decleared in function scope
// C: It will cause an error

// =================Task-8=================
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
// output হবে "Hi" কারন
// এখানে প্রথমে outer() ফাংশন কল হবে তার পর execute এ যাবে, তার পর পাবে ভেরিয়েবল আর ফাংশন তার পর কল হবে
// inner() এখানে এসে দেখবে console.log(message); প্রথমে নিজের scope এ খুজবে message নামের কিছু আছে কিনা, না পেলে তার scope থেকে বের হবে
// বের হয়ে দেখবে এখানে আছে let message = "Hi"; সরাসরু "Hi" নিয়ে inner() call stack থেকে বের হবে। পরে outer() stack এর কাজ শেষ করবে।

// =====================Task-9=========================
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log("from inner", x);
  }

  inner();
}

outer();

// GEC:
//   CP: x= undefined
//       outer()= memory
//   EP: x = "Global"
//       inner()= ভেতরে এভাবেই সব করে আসবে।
// এখানে "Inner" দেখাবে।

// ====================Task-10==================
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();
// এখানে -১, -২ প্রিন্ট হচ্ছে কারন ফাংশন ২বার কল হয়েছে।
