// ===========Clousure===========
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}

const func = outer();
console.log(func());

// another Example

function outerCount() {
  let count = 0;
  return function innerCount() {
    count++;
    console.log(count);
  };
}

const outerName = outerCount();

outerName();
outerName();
outerName();
// এখানে const outerName = outerCount(); এই লাইনে
// outerCount এর execution শেষ হয়ে গেল। outerName এটাকে লগ করলে দেখতে পাব ভেতরে এরো একটা ফাংশন আছে।
// outerName() যখন কল করব তখন innerCount এর মাঝে count এর ভালু কিন্তু আগেরটা থেকে গেছে মানে ছিল 0 এখন যতবারি কল করব
// ততবারি count এর ভেলু নিয়ে কাজ করতে পারবে কারন যে নিজে মনে রেখেছে a এর ভেলু কি ছিল। সেটা নিয়েই কাজ করবে
// এখানে কিন্তু outerCount() আর কাজ করছেনা তাই let count = 0; এটাও নেই বলা যায়।
// Note: আমি কিন্তু কক্ষনই এটা বাইরে বের করতে পারবনা ডিরেক্টলি কারন যেটা করতে পারবনা।
// Closure এর মাধ্যমে তুমি এমন variable তৈরি করতে পারো যা বাইরে থেকে দেখা যায় না, কিন্তু function এর ভেতরে safely access করা যায়। এটাকে বলা হয় data encapsulation।

// ============Real world Example================

function CreateBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("depisted amount :", amount, "Current Balance:", balance);
    },
    withdrewal: (amount) => {
      if (balance < amount) {
        console.log("Insufficiant Balance");
      } else {
        balance = balance - amount;
        console.log("withdrewal amount :", amount, "Current Balance:", balance);
      }
    },
    checkBalance: () => console.log(balance),
  };
}

const MybankAccount = CreateBankAccount(100);

console.log(MybankAccount.deposit(500));
console.log(MybankAccount.withdrewal(50));
console.log(MybankAccount.checkBalance());
// closure আগের ভেলু মনে রাখে তার মাঝে।

function dealingWithBigData() {
  let bigData = new Array(10000000).fill("*");

  return function () {
    console.log(bigData[3]);
  };
}

const variable12 = dealingWithBigData();

console.log(variable12());
// উপরের bigData তে বড় একটা ডাটা আছে। যখন আমি বলতেছি যে, bigData[3] তখম কিন্তু মেমরিতে পুরো bigData এর ডাটা এ লোড হয়ে থাকবে।
// gerbadge collector এসে এটাকে সরাবেণা কারন আমি এটার ref নিচে দিয়ে রেখেছি।

function incrementBtn() {
  let count = 0;
  document.getElementById("btn").addEventListener("click", function () {
    count++;
    console.log(`Button click ${count} times`);
  });
}
incrementBtn();
