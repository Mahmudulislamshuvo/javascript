let a = 10;
let b = 20;

console.log(a + b); // 30
console.log(a - b); // -10
console.log(b - a); // 10
console.log(a * b); // 200
console.log(a / b); // 0.5

let count = 5;

console.log(count++);
console.log("====================================");
console.log(count);
console.log("====================================");

console.log("cow" && "horse");

// task-1 find odd and even
let a = 5;
let b = 10;

console.log(a / 2); // it's returning 2.5 means odd
console.log(b / 2); // it's returing 5 means even

// task-2  driving license
let requiredAge = 18;
// is he eligible for license
let personA = 17;
let personB = 19;

console.log(
  personB >= requiredAge ? "Eligibe for licence" : "not eligible licence"
);

// task-3 Salary ctc
let salary = 12300;

let annualSalary = salary * 12;

let tweentyPersentCTC = (annualSalary / 100) * 20;

console.log(salary);
console.log(annualSalary, "Anuall salary");
console.log(tweentyPersentCTC, "CTC");

// task-4 traffic light task
let light = "green"; //in that variable green can be chnage in red or yellow

console.log(
  light === "red"
    ? "Stop it's redlight"
    : light === "yellow"
    ? "Wait for green light"
    : "green light you may go"
);

// electricity bill
let oneUnitPrice = 150;
let dailyUnitUse = 5;
let monthUsage = dailyUnitUse * 30;
console.log("Total unit in a month", monthUsage);
console.log("after 20% discount", monthUsage - (monthUsage / 100) * 20);
monthUsage = (monthUsage - (monthUsage / 100) * 20) * 150;
console.log("Total TK", monthUsage);

// leap year checking
let year = 2025;
let is_Leapyear = year % 4 === 0;
console.log(is_Leapyear ? "Yes it is leap year" : "not it's not leap year");

// finding max number
let p = 10;
let q = 20;
let r = 30;

let maxNumber = p > r ? (p > r ? p : r) : q > r ? q : r;
console.log(maxNumber);
