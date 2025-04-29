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

// array like

const arrayLike = {
  0: "apple",
  1: "banana",
  2: "cherry",
  length: 3,
};

console.log(arrayLike[0]); // apple
console.log(arrayLike.length); // 3

function checkArray() {
  console.log("not array it aray-like", arguments);
  const converArray = [...arguments];
  console.log("converted array", converArray);
  converArray.forEach((item) => console.log(item));
}

checkArray(2, 53, 57);

// anothrer way to conver
const arraylike = document.getElementsByTagName("li");
const convertedArray = Array.from(arraylike);
console.log(convertedArray);

const collectionPromise = Array.fromAsync(document.getElementsByTagName("li"));
console.log("Converted Array", collectionPromise);

// collectionPromise.then((value) => console.log(value));

// const rett = Array.fromAsync({
//   0: Promise.resolve("tapaScript"),
//   1: Promise.resolve("Google"),
//   2: Promise.resolve("Apple"),
//   length: 3,
// }).then((value) => console.log(value));

console.log(ret);

// of()
const a = new Array(2, 3, 4, 5, 6);
const b = [9, 10, 11];

const cad = Array.of(2, true, false, "shuvo", [3, 5, 8]);
console.log(cad);
// =======Array ittarator method======

const customers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1-202-555-0123",
    address: {
      street: "123 Maple St",
      city: "New York",
      zip: "10001",
    },
    isMember: true,
    joinDate: "2022-03-15",
    totalOrders: 12,
    lastOrderAmount: 230.5,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "+1-202-555-0456",
    address: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      zip: "90001",
    },
    isMember: false,
    joinDate: "2023-01-12",
    totalOrders: 3,
    lastOrderAmount: 79.99,
  },
  {
    id: 3,
    name: "Clara Lee",
    email: "clara.lee@example.com",
    phone: "+1-202-555-0789",
    address: {
      street: "789 Pine Rd",
      city: "Chicago",
      zip: "60601",
    },
    isMember: true,
    joinDate: "2021-08-20",
    totalOrders: 25,
    lastOrderAmount: 450.0,
  },
  {
    id: 4,
    name: "David Garcia",
    email: "david.garcia@example.com",
    phone: "+1-202-555-0110",
    address: {
      street: "321 Elm St",
      city: "Houston",
      zip: "77001",
    },
    isMember: true,
    joinDate: "2022-06-05",
    totalOrders: 10,
    lastOrderAmount: 120.75,
  },
  {
    id: 5,
    name: "Emily Brown",
    email: "emily.brown@example.com",
    phone: "+1-202-555-0147",
    address: {
      street: "654 Cedar Blvd",
      city: "Phoenix",
      zip: "85001",
    },
    isMember: false,
    joinDate: "2023-10-01",
    totalOrders: 1,
    lastOrderAmount: 35.99,
  },
  {
    id: 6,
    name: "Frank Wilson",
    email: "frank.wilson@example.com",
    phone: "+1-202-555-0177",
    address: {
      street: "987 Birch Ln",
      city: "Philadelphia",
      zip: "19101",
    },
    isMember: true,
    joinDate: "2020-11-30",
    totalOrders: 33,
    lastOrderAmount: 320.4,
  },
  {
    id: 7,
    name: "Grace Taylor",
    email: "grace.taylor@example.com",
    phone: "+1-202-555-0199",
    address: {
      street: "159 Walnut Ct",
      city: "San Antonio",
      zip: "78201",
    },
    isMember: false,
    joinDate: "2023-04-10",
    totalOrders: 4,
    lastOrderAmount: 99.9,
  },
];

const totalOrders = customers.filter((customers) => {
  return customers.totalOrders >= 5;
});

const customerDetails = [
  {
    customerId: 103,
    firstName: "Robert",
    lastName: "Johnson",
    gender: "Male",
    email: "robert.johnson@example.com",
    phone: "+1-202-555-0133",
    address: "789 Pine Road, Houston, TX",
    city: "Houston",
    state: "TX",
    country: "USA",
    postalCode: "77001",
    isMember: true,
    totalOrders: 22,
    preferredPaymentMethod: "Debit Card",
  },
  {
    customerId: 104,
    firstName: "Emily",
    lastName: "Davis",
    gender: "Female",
    email: "emily.davis@example.com",
    phone: "+1-202-555-0177",
    address: "321 Birch Street, Phoenix, AZ",
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    postalCode: "85001",
    isMember: true,
    totalOrders: 5,
    preferredPaymentMethod: "Bank Transfer",
  },
  {
    customerId: 105,
    firstName: "Michael",
    lastName: "Brown",
    gender: "Male",
    email: "michael.brown@example.com",
    phone: "+1-202-555-0155",
    address: "654 Cedar Lane, Los Angeles, CA",
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    postalCode: "90001",
    isMember: false,
    totalOrders: 3,
    preferredPaymentMethod: "Cash on Delivery",
  },
  {
    customerId: 106,
    firstName: "Olivia",
    lastName: "Wilson",
    gender: "Female",
    email: "olivia.wilson@example.com",
    phone: "+1-202-555-0144",
    address: "987 Maple Ave, Seattle, WA",
    city: "Seattle",
    state: "WA",
    country: "USA",
    postalCode: "98101",
    isMember: true,
    totalOrders: 18,
    preferredPaymentMethod: "Credit Card",
  },
];

customerDetails.map((items) => {
  let title = "";
  if (items.gender === "Male") {
    title = "Mr";
  } else if (items.gender === "Female") {
    title = "Mrs";
  }
  items["fullname"] = `${title} ${items.firstName} ${items.lastName}`;
  return items;
});

const customersss = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 28,
    purchased: ["Laptop", "Mouse", "Keyboard"],
  },
  {
    firstname: "Sarah",
    lastname: "Smith",
    age: 34,
    purchased: ["Phone", "Charger"],
  },
  {
    firstname: "Michael",
    lastname: "Brown",
    age: 42,
    purchased: ["Washing Machine", "Vacuum Cleaner"],
  },
  {
    firstname: "Emily",
    lastname: "Johnson",
    age: 9,
    purchased: ["Shoes", "Bag", "Perfume"],
  },
];

const IsanyCustomerless10 = customersss.some((customer) => {
  return customer.age < 10;
});

console.log(IsanyCustomerless10);

const ccustomers = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 28,
    gender: "male",
    married: false,
    purchased: ["Laptop", "Mouse", "Keyboard"],
    totalCost: 1250, // Laptop - 1000, Mouse - 100, Keyboard - 150
  },
  {
    firstname: "Sarah",
    lastname: "Smith",
    age: 34,
    gender: "female",
    married: true,
    purchased: ["Phone", "Charger"],
    totalCost: 820, // Phone - 800, Charger - 20
  },
  {
    firstname: "Michael",
    lastname: "Brown",
    age: 42,
    gender: "male",
    married: true,
    purchased: ["Washing Machine", "Vacuum Cleaner"],
    totalCost: 1300, // Washing Machine - 800, Vacuum Cleaner - 500
  },
  {
    firstname: "Emily",
    lastname: "Johnson",
    age: 23,
    gender: "female",
    married: false,
    purchased: ["Shoes", "Bag", "Perfume"],
    totalCost: 380, // Shoes - 120, Bag - 150, Perfume - 110
  },
];

const isMarried = ccustomers.every((customer) => {
  return customer.married;
});

console.log(isMarried);

const anyoneUndderTen = ccustomers.find((customer) => {
  return customer.age < 10;
});

console.log("is anyone under 10 age", anyoneUndderTen);

const youngCustomerIndex = ccustomers.findLastIndex((customer) => {
  return customer.age < 10;
});

console.log(youngCustomerIndex); //index 3

const TotalExpence = ccustomers
  .filter((customer) => {
    return customer.married;
  })
  .map((customer) => {
    return customer.totalCost;
  })
  .reduce((ager, kiAshlo) => {
    return ager + kiAshlo;
  }, 0);

console.log("total expence married customers", TotalExpence);

const numb = [1, 3, 4, 5, 6, 7];

let sum = 0;
numb.forEach((items) => {
  sum += items;
});

console.log(sum);

const itarator = numb.entries();
console.log(itarator.next().value); //[0, 1]
console.log(itarator.next().value); //[1, 3]

for (const [index, element] of itarator) {
  console.log(index, element);
}

// 2 4
// 3 5
// 4 6
// 5 7

const itarator2 = numb.values();

for (const value of itarator2) {
  console.log(value);
}
// ভেলু গুলা রিটার্ন করে দিবে।

const arr = [1, 2, 3];

const result = arr.flatMap((num) => [num, num * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
