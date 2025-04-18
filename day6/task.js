console.log("====================================");
console.log("Task.js");
console.log("====================================");

// Celsius to Fahrenheit
function Fahrenheit(Celsius) {
  console.log(Celsius * (9 / 5) + 32);
}

Fahrenheit("This is Fahrenheit", 20);

// compare number
function compareNum(num1, num2) {
  if (num1 > num2) {
    console.log("num1 bigger", num1);
  } else if (num2 > num1) {
    console.log("num2 bigger", num2);
  }
}

compareNum(20, 986);

// IsPalindrome
function IsPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      console.log("Mismatch");
    }
    return false;
  }
  return true;
}

console.log("Yes it is Palindrome", IsPalindrome("sir"));

// Find Factorial of a Number
function factorialNum(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorialNum(5));

// Task-5 count Vowels
function countVawels(srting) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < srting.length; i++) {
    if (vowels.includes(srting[i])) {
      count++;
    }
  }
  console.log(count);
}

countVawels("amul");

// task-6  Capitalize the First Letter
function UpperCaseFunc(strr) {
  let words = strr.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word[0].toUpperCase() + word.slice(1);
  }
  console.log(words.join(" "));
}

UpperCaseFunc("Hi how are you dear?");

// Task-7 Use an IIFE to Print “Hello, JavaScript!”
(function (item) {
  console.log(item);
})("Hellow");

// Task-8 Simple Callback Function
function callback() {
  console.log("This is main function");
}

callback(function () {});

// Task-9

function f1() {
  console.log("This is f1");
}
function f2() {
  f1();
  console.log("This is f2");
}
f2();
