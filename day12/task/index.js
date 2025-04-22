// ======Task-1=========
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");
// ?? এটা nullish অপারেটর যেটার মাধ্যমে চেকিং হচ্ছে
// user.age  এর মধ্যে age টা undefined কিনা? যদি undefined হয় তাহলে "Not provided" দেখিয়ে দিও।

// ======Task-2=========
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
// Nothing will happen here freeze object not going to change in any way

// ======Task-3=========
const personn = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name,
  company,
  company: {
    location: { city },
  },
} = personn;

console.log("name", name);
console.log("company", company);
console.log("city", city);

// =========Task-4============
const students = [
  {
    name: "Rahim",
    age: 20,
    grades: [85, 90, 78],
  },
  {
    name: "Karim",
    age: 22,
    grades: [88, 92, 81],
  },
  {
    name: "Fatema",
    age: 19,
    grades: [91, 85, 89],
  },
];

function greadeCalc() {
  students.forEach((student) => {
    let sum = 0;
    for (let i = 0; i < student.grades.length; i++) {
      sum = sum + student.grades[i];
    }
    const average = sum / student.grades.length;
    console.log(average);
  });
}

greadeCalc();

// ===========Task-5============
let bookInventory = {
  "Atomic Habits": {
    author: "James Clear",
    price: 20,
    quantity: 15,
    inStock: true,
  },
  "The Alchemist": {
    author: "Paulo Coelho",
    price: 18,
    quantity: 0,
    inStock: false,
  },
  "JavaScript: The Good Parts": {
    author: "Douglas Crockford",
    price: 25,
    quantity: 5,
    inStock: true,
  },
};

function checkStock(items) {
  if (bookInventory[items]) {
    const book = bookInventory[items];
    book?.inStock
      ? console.log(`${items} is in stock. Quantity: ${book.quantity}`)
      : console.log(` ${items} is out of stock.`);
  } else {
    console.log(`${items} This book is not in our inventory.`);
  }
}

checkStock("The Alchemist");

function restorck(name, stockamnt) {
  let book = bookInventory[name];
  if (!book.inStock) {
    book.inStock = true;
    book.quantity += stockamnt;
    console.log("Restock value", book);
  } else {
    console.log(`${name} This book is not in our inventory.`);
  }
}

restorck("The Alchemist", 10);

console.log(bookInventory);

// =============Task-6==============

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
// Object.keys() হলো object এর নাম গুলা কে define করে।
// Object.entries() হলো ভেতরে key সহ ভেলু সহ একাটা Array বানিয়ে দেয়।

// ================Task-7================
// How do you check if an object has a certain property?
console.log(Object.hasOwn(bookInventory, "The Alchemist")); //true
// hasOwn method দিয়ে চেক করা যায়।

// ==============Task-8==============
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name); //Doe
// যখন newPerson = person কোন object কে এভাবে assign করি তখন js কোন নতুন object memory তে বানায়না এগেরটা point করে রাখে
// তাই যখন newPerson.name = "Doe"; এভাবে চেঞ্জ করে দিলাম তখন person এর ভেলু এর নাম ও চেঞ্জ হয়ে যায়।

// ===========Task-9==============
const original = {
  name: "Shuvo",
  info: {
    age: 25,
    address: { city: "Dhaka" },
  },
};

const copy = structuredClone(original);
copy.info.age = 30;
copy.info.address.city = "Chittagong";

console.log(original.info.age); //  25
console.log(original.info.address.city); //  Dhaka
// এভাবে এঈ মেঠড এ structuredClone(original)

// ============tASK-10================
const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

for (let { name, address, age } of users) {
  console.log(name, address, age);
}
