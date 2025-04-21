//---------------Task-1---------------------
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();
// এখানে ভালু দিবে প্রথমে ১ পরে ২ কারন।
// এখানে closure হচ্ছে। outer() ফাংশনের কাজ এরখানেই শেষ।
// const counter = outer(); এই লাইনে পুরো ফাংশন এখানে দিচ্ছে যখনি কল করব counter(); তহন inner() ফাংশন রান হবে
// count এর ভেলু closure এর জন্য মনে রাখছে তাই। যখনি কল করবে আগের ভালু মনে রেখে পরের কাজ করতেছে
// ২বার কল করাতে ভালু চেঞ্জ হয়ে ১ থেকে ২ হলো কারন প্রথমে count ছিল ১ পরে আবার কল করাতে ২ হবে closure সবসময় latest ভেলু মনে রাখে
// এখন যদি আবার কল করি latest ভেলু আর সাথে এরো ১ যোগ হবে।

//---------------Task-2---------------------
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
// উপরের মত একি কাজ করবে ওখানে ভেলু আসবে ১০০ কিন্তু কল করার উপায় আলাদা
// এখানে
// const inner = testClosure();
// console.log(inner());
// এভাবে না করে, testClosure()() এরোকম করা হয়েছে। একি কাজ করতেছে।

//---------------Task-3---------------------

function counting() {
  let count = 0;

  document.getElementById("countbtn").addEventListener("click", () => {
    count++;
    console.log("Counting count", count);
  });
}

counting();

//---------------Task-4-------------------

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(500));

//---------------Task-5-------------------
// 5. What happens if a closure references an object?
// answer is : ii. The object remains in memory as long as the closure exists

//---------------Task-6-------------------
function counterr() {
  let z = 0;
  return {
    increment: (item) => {
      z += item;
      console.log("incrementing", z);
      return z;
    },
    decrement: (item) => {
      z -= item;
      console.log("decrement", z);
      return z;
    },
    reset: () => {
      z = 0;
      console.log("reset", z);
      return z;
    },
  };
}

const countervalue = counterr();
console.log(countervalue.increment(5));
console.log(countervalue.decrement(30));
console.log(countervalue.reset());
