// Task two atm machine
const cashammount = 100;

switch (cashammount) {
  case 100:
    console.log("100 withdewal sucessful");
    break;
  case 200:
    console.log("200 withdewal sucessful");
    break;
  case 300:
    console.log("300 withdewal sucessful");
    break;
  case 400:
    console.log("400 withdewal sucessful");
    break;
  case 500:
    console.log("500 withdewal sucessful");
    break;

  default:
    console.log("invalid ammount");
    break;
}

// calculator made useing switch case
let input1 = 19;
let input2 = 19;

const oparator = "*";

switch (oparator) {
  case "+":
    console.log(input1 + input2);
    break;
  case "-":
    console.log(input1 - input2);
    break;
  case "*":
    console.log(input1 * input2);
    break;
  case "/":
    console.log(input1 / input2);
    break;

  default:
    console.log("invadid for calculate");
    break;
}

// ticket price
let age = 68;

if (age < 18) {
  console.log("for Children ticket price is $3");
} else if (age >= 18 && age <= 60) {
  console.log("for Adults  ticket price is $10");
} else {
  console.log("Seniors (60+ years): ticket price is $8");
}

// Horoscope Sign Checker
const birthMonth = "February";

switch (birthMonth) {
  case "January":
    console.log("Zodiac sign: Capricorn / Aquarius");
    break;
  case "February":
    console.log("Zodiac sign: Aquarius / Pisces");
    break;
  case "March":
    console.log("Zodiac sign: Aries");
    break;
  case "April":
    console.log("Zodiac sign: Aries / Taurus");
    break;
  case "May":
    console.log("Zodiac sign: Taurus / Gemini");
    break;
  case "June":
    console.log("Zodiac sign: Gemini / Cancer");
    break;
  case "July":
    console.log("Zodiac sign:  Cancer / Leo");
    break;
  case "August":
    console.log("Zodiac sign:  Leo / Virgo");
    break;
  case "September":
    console.log("Zodiac sign: Virgo / Libra");
    break;
  case "October":
    console.log("Zodiac sign: Libra / Scorpio");
    break;
  case "November":
    console.log("Zodiac sign: Scorpio / Sagittarius");
    break;
  case "December":
    console.log("Zodiac sign: Sagittarius / Capricorn");
    break;

  default:
    console.log("invaid moth");
    break;
}

// 6. Which Triangle?
let TriangleA = 50;
let TriangleB = 90;
let TriangleC = 80;

if (TriangleA === TriangleB && TriangleB === TriangleC) {
  console.log("You made a Equilateral Triangle.");
} else if (TriangleA === TriangleB || TriangleB === TriangleC) {
  console.log("You made a  Isosceles Triangle");
} else {
  console.log("You made a  Scalene Triangle.");
}
