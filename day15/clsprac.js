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

const flatArr = [1, 2, 3, 4, 5, [6, 7, 8]];
console.log(flatArr.flat());

const deepArray = [1, 2, [3, 4, [5, [4, 6, [4, 8, [7, 6, [7]]]]]]];
const flatArray = deepArray.flat(Infinity);
console.log("jkhi", flatArray);

const employees = [
  { name: "John Smith", post: "Manager", department: "Sales" },
  { name: "Emma Johnson", post: "Sales Executive", department: "Sales" },
  { name: "Noah Williams", post: "Sales Coordinator", department: "Sales" },
  { name: "Olivia Brown", post: "Sales Analyst", department: "Sales" },
  { name: "Liam Garcia", post: "Software Engineer", department: "IT" },
  { name: "Ava Martinez", post: "Frontend Developer", department: "IT" },
  { name: "Elijah Anderson", post: "Backend Developer", department: "IT" },
  { name: "Sophia Thomas", post: "QA Tester", department: "IT" },
  { name: "William Taylor", post: "Accountant", department: "Finance" },
  { name: "Isabella Moore", post: "Financial Analyst", department: "Finance" },
  { name: "James Jackson", post: "Auditor", department: "Finance" },
  { name: "Mia White", post: "HR Executive", department: "Human Resources" },
  { name: "Benjamin Harris", post: "Recruiter", department: "Human Resources" },
  { name: "Lucas Thompson", post: "HR Manager", department: "Human Resources" },
];

const groupby = Object.groupBy(employees, ({ department }) => department);
console.log(groupby);

const employeess = [
  { name: "John Smith", department: "Sales", salary: 3200 },
  { name: "Emma Johnson", department: "Sales", salary: 5400 },
  { name: "Noah Williams", department: "Sales", salary: 2800 },
  { name: "Olivia Brown", department: "Sales", salary: 6200 },

  { name: "Liam Garcia", department: "IT", salary: 7000 },
  { name: "Ava Martinez", department: "IT", salary: 4700 },
  { name: "Elijah Anderson", department: "IT", salary: 3500 },
  { name: "Sophia Thomas", department: "IT", salary: 5200 },

  { name: "William Taylor", department: "Finance", salary: 4100 },
  { name: "Isabella Moore", department: "Finance", salary: 5800 },
  { name: "James Jackson", department: "Finance", salary: 3900 },

  { name: "Mia White", department: "Human Resources", salary: 4300 },
  { name: "Benjamin Harris", department: "Human Resources", salary: 5600 },
  { name: "Charlotte Martin", department: "Human Resources", salary: 3600 },
  { name: "Lucas Thompson", department: "Human Resources", salary: 6100 },
];

const moreThen5KsalarGroup = Object.groupBy(employeess, ({ salary }) => {
  return salary >= 5000 ? "More then 5k" : "Less then 5k";
});

console.log(moreThen5KsalarGroup);

// toReverse()
// toSorted()
// toSpliced()
// with()

const numbre2 = [1, 2, 3, 4, 5, 6, 7];
const newArray = numbre2.with(2, 10);
console.log(newArray);

const anotherArr = numbre2.with(-2, 90);
console.log(anotherArr);
