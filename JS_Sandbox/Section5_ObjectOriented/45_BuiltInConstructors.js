// STRINGS

const name1 = "Jeff";
const name2 = new String("Jeff"); // This is an object, not a Primitive String.

name2.foo = "bar";

// console.log(name1);
// console.log(name2);

// console.log(typeof name2);

// if (name2 === "Jeff") {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

// NUMBERS
const num1 = 5;
const num2 = new Number(5);

// console.log(num1);
// console.log(num2);

// BOOLEAN
const bool1 = true;
const bool2 = new Boolean(true);

// console.log(bool1);
// console.log(bool2);

// FUNCTIONS
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return x + y");

console.log(getSum2(1, 1));

// OBJECTS

const john1 = {
  name: "John",
};
const john2 = new Object({
  name: "John",
});

// console.log(john1);
// console.log(john2);

// ARRAYS

const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

// console.log(arr1);
// console.log(arr2);

// REGULAR EXPRESSIONS
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re1);
console.log(re2);
