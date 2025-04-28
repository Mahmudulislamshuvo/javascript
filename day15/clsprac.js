// Simple Arr
const mixedArr = [100, "Shuvo", {}];

const salad = ["apple", "mango", "mashroom", "banana", "fruit"];

function Car(model) {
  this.model = model;
}

const bmwCar = new Car("BMW X1");
console.log(bmwCar);

// =======Array contructor funct==========
const AnotherSalad = new Array("apple", "mango", "mashroom", "banana", "fruit");
console.log(AnotherSalad);

const twoArr = new Array(2);

console.log(salad[3]);

const ret = salad.push("love");
console.log(salad);

const unshift = salad.unshift("LOL");
console.log(salad);

const ppop = salad.pop();
console.log(salad);

const shiff = salad.shift();
console.log(shiff);
console.log(salad);

// =========slice========
const sliceslad = salad.slice(0, 2);
console.log("Salad slice", sliceslad);

const sliceSlald = salad.slice("mashroom");
console.log("Salad slice 2", sliceSlald);

console.log(Array.isArray([]));
console.log(Array.isArray({}));
console.log(Array.isArray({ name: "Shuvo" }));
console.log(Array.isArray(["shuvo", "sumona"]));

// array distructure

const [nameTomatto, nameMashroom] = ["tommatto", "mashroom"];
console.log(nameTomatto);

const [apple, blank, mashroom] = ["apple", , "mashroom"];
console.log(apple, mashroom);

const fruits = ["mango", "lemon", "tomato", ["junkfruit", "carrot", "veg"]];
const veg = fruits[3];
const carrot = veg[1];
console.log(carrot);

console.log(fruits[3][1]);

const spread = ["Shuvo", "Sumona", "Am", "Jam", "kola", "labu", "pani"];

const [firstindexValue, secondIndexValue, ...rest] = spread;
console.log(firstindexValue); //shuvo
console.log(secondIndexValue); // sumona
console.log(rest); // rest index value print
console.log(spread);

// swap variable
let sumona = "sumona";
let shuvo = "shuvo";

[shuvo, sumona] = [sumona, shuvo];
console.log(shuvo);
console.log(sumona);

const vegg = ["alu", "begun", "lau"];
const notveg = ["apple", "komla", "angur"];

const mixing = [...vegg, ...notveg];
console.log(mixing);

const arr1 = [12, 213, 23, 45];
const arr2 = new Array(10);

console.log(arr1.length);
console.log(arr2.length);

arr1.length = 2 ** 32 - 1;
console.log(arr1); // 4294967295

const arrr1 = [1, 3, 5];
const arrr2 = [2, 4, 6];

const mergeArray = arrr1.concat(arrr2);
console.log(mergeArray);

const numberrs = [1, 3, 5, 7, "ujg"];
const jined = numberrs.join();
console.log(jined);

console.log([].join()); // return ""

// fill method

// const colors = ["red", "blue", "green", "golden"];
// console.log(colors);
// colors.fill("pink");
// console.log(colors);

const colors = ["red", "blue", "green", "golden"];

colors.fill("blue", 1, 3);

console.log(colors);

const names = ["tom", "sumona", "mog", "shuvo"];
console.log(names.includes("sumona"));
console.log(names.includes("june"));

console.log(names.indexOf("sumona")); //it will show index number from LEFT TO RIGHT
console.log(names.lastIndexOf("shuvo")); //RIGHT TO LEFT

console.log(names.reverse());

const namess = [
  "Sumona Akter",
  "Shuvo Hossain",
  "Rakib Hasan",
  "Mim Sultana",
  "Jannat Ara",
  "Hasan Mahmud",
  "Tania Akter",
];

console.log(namess.sort());

const num = [5, 23, 10, 38, 97, 868];
console.log(num.sort());
num.sort(function (a, b) {
  return a - b;
});

// splice mrthod
const usaNames = [
  "Emily",
  "James",
  "Michael",
  "Olivia",
  "Ethan",
  "Sophia",
  "Daniel",
  "Ava",
  "Matthew",
  "Isabella",
];
// at
console.log(usaNames.at(1));
console.log(usaNames.at(-1));
console.log(usaNames.at(-4));

const upadtedSplice = usaNames.splice(0, 2, "shuvo");
console.log(usaNames);

// copywithin
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.copyWithin(0, 3, 5);
console.log(numbers); // [4, 5, 3, 4, 5, 6, 7, 8, 9]

const array = [1, 2, 3, 4, 5, 6, 7];
array.copyWithin(0, 3, 6);
console.log(array); //[4, 5, 6, 4, 5, 6, 7];
