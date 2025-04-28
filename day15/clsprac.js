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
