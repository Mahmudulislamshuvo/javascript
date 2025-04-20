// ===========Global scope==========
let namee = "Shuvo";

function greatting() {
  console.log("Heloo", namee);
}

console.log(namee);
// namee কে যে কোন জায়গা থেকে access করা যাবে।

// ========Functional Scope========

function toDo() {
  let task = "learing";
  console.log(task);
}

toDo();

// console.log(task);
// function এর বাইরে access করা যাবেনা।

// =========Block Scope=========
{
  //
}
// This is block it can be if else loop for loop

{
  let block = "block scope";
  console.log(block);
}
// console.log(block);
// scope এর বাইরে থেকে কিছু access করা যাবেনা।
// কিন্তু এখানে var দিয়ে access করা যাবে।

{
  var a = "This is Var inside Block";
  console.log(a);
}

console.log("Outside of block accessing", a);
// কারন var function scope এটা block এ থাকলেও বাইরে থেকে access করা জায়।
// কিন্তু ফাংশনের ভেতরের ভার বাইরে থেকে access করা জায়না।
