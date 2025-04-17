// piramid
let star = "*";

for (let num = 1; num <= 10; num++) {
  console.log(star);
  star += "*";
}

// Multiplication
let n = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}

// Find the summation of all odd numbers between 1 to 500 and print them on teh console log.
let sum = 0;
for (let n = 1; n <= 500; n++) {
  if (n % 2 !== 0) {
    sum += n;
  }
}
console.log(sum);

// 4. Skipping Multiples of 3
for (let n = 1; n <= 20; n++) {
  if (n % 3 === 0) continue;
  console.log(n);
}

// task 5

let number = 6789;
let numConvertTostr = number.toString();
let reversedStr = "";
let i = numConvertTostr.length - 1;

while (i >= 0) {
  reversedStr += numConvertTostr[i];
  i--;
}
// এটাকে নাম্বারে দেখাতে সুধু +reversedStr এভাবে লগ করলেই নাম্বার আসবে।
console.log(reversedStr);

// চেকিং হচ্ছে i কি ০ এর থেকে বড় কিনা, বড় হলে একবার লুপ ঘুরতেছে,
// শেষ লাইনে বলা হয়েছে i এর মান ১ কমিয়ে দাও। এভাবে করে যখন i=০ হয়ে যাচ্ছে তখন লুপ বন্ধ হয়ে যাচ্ছে।

// Task -6

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Coll", j);
  }
}
