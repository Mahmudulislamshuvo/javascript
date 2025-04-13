function testScope() {
  if (true) {
    var a = "I am var";
    let b = "I am let";
    const c = "I am const";
  }

  console.log(a); // ✅ কাজ করবে: "I am var"
  console.log(b); // ❌ Error: b is not defined
  console.log(c); // ❌ Error: c is not defined
}

testScope();

// ### 🔸 `var a = "I am var";`

// - `var` হলো **function scoped**, মানে হলো এটা শুধু ফাংশনের ভিতর যেকোনো জায়গা থেকে এক্সেস করা যাবে।
// - উপরের কোডে `a` পুরো `testScope` ফাংশনের জন্য available।

// ### 🔸 `let b = "I am let";`

// - `let` হলো **block scoped**, মানে হলো `{}` এর ভিতরেই সীমাবদ্ধ থাকে।
// - তাই `if` ব্লকের বাইরে `b` এক্সেস করতে গেলে error দিবে: `ReferenceError: b is not defined`

// ### 🔸 `const c = "I am const";`

// - `const`ও **block scoped** — একদম `let` এর মতোই আচরণ করে।
// - তাই `c` এর ক্ষেত্রেও `if` ব্লকের বাইরে গেলে error দিবে।
