// console.log(x); //ReferenceError: x is not defined

// const onj = null;
// console.log(onj.name); //TypeError: Cannot read properties of null (reading 'name')

// console.log("hi"; //SyntaxError: missing

// const arr = new Array(-1); //RangeError: Invalid array length

// decodeURIComponent("%"); //URIError: URI malformed

try {
  //if any error here it will go to catch otherwise NO
  console.log("====================================");
  abc;
  console.log("====================================");
} catch (error) {
  console.log("errors here", error);
  console.log(error.message); //actual error message
  console.log(error.name); //errer name like Refrance error, syntex error
  console.log(error.stack); //এখানে কোথায় প্রব্লেম হচ্ছে কত নাম্বার লাইনে সেটা সহ দেখাবে।
}
