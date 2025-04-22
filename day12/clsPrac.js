let user = {
  name: "Shuvo",
  age: 27,
};
// নরমালি name এগুলা key কে string আকারে বলতে হয়না। js এটাকে string আবনিয়ে নেয়।
// কখন দিতেই হবে
let user2 = {
  name: "Shuvo",
  age: 27,
  "Is there": true,
  there: "vhugi jiiuy",
  love: true,
};
// এটাকে ধরার নিয়ম আলাদা/
console.log(user2["Is there"]);
// এভাবে।
console.log(user2);

// ===========Delete==========
delete user2["Is there"];
delete user2.there;

console.log(user2);

// ===========dynamic key replace from var=====

const keyy = "age";
console.log(user2[keyy]);
// এটা আগের key এর নাম।

// ===========dynamic key replace from var=====
// let car = prompt("Which is your aim?");

// let fvcar = {
//   [car]: 5,
// };

// console.log(fvcar);
// let car = এখানে যা দিব সেটাই নিচের object এর key হয়ে যাবে।

// ==========Contructor function==========
// নরমাল ফাংশন
function ccar(item) {
  //
}
// কিন্তু Contructor function প্রথম অক্ষর বড় হাতের হতে হবে।
function Carr(name, model) {
  this.name = name;
  this.model = model;
}

const Bmwcar = new Carr("BMW", "X2");
console.log(Bmwcar);
// output Carr {name: 'BMW', model: 'X2'}
// এখানে Contructor function এর নাম সহ দেখা যায়।

const person = new Object();
person.name = "Shuvoo";
person.age = 28;

console.log(person);
// কিন্তু এখানেও আমি function এর নাম সহ দেখতে পারছিনা।

//
//
// =============factory============
function createUser(name, age, sex) {
  return {
    name,
    age,
    sex,
    greeter() {
      console.log(this.name);
    },
  };
}

const user1 = createUser("Shuvo-user", 27, "male");

console.log(user1);
user1.greeter();

let profile = {
  name: "Shuvo",
  company: "xyz",
  message: function () {
    console.log(`${this.name} work at ${this.company} company`);
  },
  // ========Nasted object==========
  address: {
    city: "gazipur",
    post: 1704,
    state: "Dhaka",
  },
  salary: undefined,
};

console.log(profile.name);
console.log(profile.company);
profile.message();
// ==========use In oparator==========
console.log(profile.salary);
// উপরেরটা undefined দিবে কারন বলে দিছি undefined,

// কিন্তু যদি চাই যে এই জিনিসটা exist করে কিনা profile এ তাইলে নিচের মত করে বলব।
console.log("salary" in profile);

console.log("====================================");
console.log("====================");
console.log("====================================");
//
//
// =============for....in============
for (let key in profile) {
  console.log(key);
  //  console.log(key); এই লাইনে সব গুলা key এখাবে মানে object এর key গুলা।
  console.log(profile[key]);
  //   এটাএ মানে (profile[key]) profile এর সব গুলা কী বসে যাচ্ছে মানে সব গুলার ভেলু পেয়ে যাব।
}
//
//
// ===========Object method==========

console.log(Object.keys(profile));
// Object.keys(profile) এটার মাধ্যমে সভ গুলা key দেখতে পাম্য array আকারে।

// =========object compare==========
const fruit = { name: "waterMelon" };
const oneMore = { name: "waterMelon" };

let compObject = fruit === oneMore;
console.log(compObject); // false

//
//
// =========Static Method============

const target = { q: 1, 1: 2 };
const source = { a: 1, b: 2 };

const returnOBJ = Object.assign(target, source);

console.log(returnOBJ);
// এভাবে করা যায়, কিন্তু যদি কক্ষনো এভাবে করি আর ভেতরের key same থাকে তাহলে second object এর ভেলু এর সাথে রিপ্লেস হয়ে যাবে।

const obj3 = {
  a: 1,
  b: { c: 5 },
};

const obj4 = Object.assign({}, obj3);
console.log(obj4);
obj4.b.c = 8;
obj4.a = 180;

console.log("obj3", obj3);
console.log(obj4);
// এখানে যখন কোন nestad object কে কপি করতে হলে ref কপি করে।
//তাই যখন obj4.b.c = 8 করা হয় তখন obj3 তেও বদলে যায়।

const obj5 = structuredClone(obj3);

obj5.a = 56;
obj5.b.c = 90;

console.log("obj5", obj5);
// কোন object কে কপি করতে হলে এভাবে করব।

// ========entries==========
const myObj = {
  a: "Skhiuh",
  b: 87,
};

const myArrObj = Object.entries(myObj);
console.log(myArrObj);

// ========freaze==========

const froze = {
  meat: "cow",
};
Object.freeze(froze);
froze.meat = "chicken";

console.log(froze);
// যত কিছুই করিনা কেন পাল্টাবেনা। delete বা অন্য কিছুই করা যাবেনা

// ========Seal method==========

const trytoSeal = {
  name: "Shuvo",
};

Object.seal(trytoSeal);
delete trytoSeal.name;
trytoSeal.name = "Sumona";

console.log(trytoSeal);
// seal দিয়ে update করা যাবে বাকি কিছু যায়না।

// ========hasOwn==============

console.log(Object.hasOwn(trytoSeal, "adress"));
// Object.hasOwn দিয়ে চেক করা যায় একটা object এর মাঝে যে key দিব সেটা আছে কিনা।

//
//
// ============object distructure==========

const userrProfile = {
  id: 101,
  name: "John Doe",
  isActive: true,
  contact: {
    email: "john.doe@example.com",
    phone: {
      home: "123-456-7890",
      mobile: "098-765-4321",
    },
    address: {
      street: "123 Main St",
      city: "New York",
      zip: 10001,
    },
  },
  hobbies: ["reading", "cycling", "traveling"],
  education: [
    {
      level: "High School",
      year: 2012,
      institute: "NY High School",
    },
    {
      level: "Bachelor's",
      year: 2016,
      institute: "City University",
    },
  ],
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  },
};

const { settings, contact, salaryy = "37k" } = userrProfile;
console.log(contact);

// ===========alias==============
// কখন use করি, যখন আমার ফাইলে অনেক api থেকে ডেটা আস্তেছে যেগুলার name conflit হতে পারে তাই use করব alias

const { name: studentName } = userrProfile;

// ==========access nested object value=======
const {
  settings: { notifications },
} = userrProfile;

console.log(notifications);

// ========distructuring function pera========

function sendEmail({ contact: { email } }) {
  console.log(`sent email to ${email}`);
}
//
sendEmail(userrProfile);

function createUserProfile() {
  return {
    id: 102,
    name: "Alice Smith",
    isVerified: false,
    social: {
      twitter: "@alice_smith",
      github: "alice-smith",
      followers: {
        twitter: 1200,
        github: 450,
      },
    },
    posts: [
      {
        id: 1,
        title: "My first blog",
        tags: ["intro", "life"],
        comments: [
          {
            user: "bob",
            message: "Great post!",
          },
          {
            user: "charlie",
            message: "Thanks for sharing!",
          },
        ],
      },
      {
        id: 2,
        title: "Learning JavaScript",
        tags: ["javascript", "coding"],
        comments: [],
      },
    ],
    preferences: {
      notifications: {
        email: true,
        sms: false,
      },
      language: "en",
    },
  };
}

const {
  social: { followers },
  preferences: studentpreferences,
} = createUserProfile();

console.log("followers", followers);
console.log("studentpreferences", studentpreferences);

// ========for of===============
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
];

for (let { name, age } of users) {
  console.log(name, age);
}
// one kind of map এর কাজ করতেছে।

// ========Optional chaining============
console.log(users.dep?.name);
