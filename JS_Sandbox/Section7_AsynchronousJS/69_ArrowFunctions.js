// Normal Function
// const sayHello = function () {
//   console.log("Hello");
// };

// Arrow Function
// const sayHello = () => {
//   console.log("Hello");
// };

// More compact (One Line Function (Does not need braces))
const sayHello = () => console.log("Hello");

// One Line Returns
const sayAdios = () => "Adios";

// Return object
const returnObject = () => ({
  msg: "I'm an Object",
});

sayHello();

console.log(sayAdios());
console.log(returnObject());

// Single line function with Parameters
const func1 = (name) => console.log(`Hello ${name}`);
func1("Brad");

// Single parameter does not need parenthesis.
const func2 = (name) => console.log(`Hello ${name}`);
func2("Tony");

// Multiple parameters need parenthesis.
const func3 = (firstName, lastName) =>
  console.log(`Hello ${firstName} ${lastName}`);
func3("Brad", "Traversy");

const users = ["Nathan", "John", "William"];
// const nameLengths = users.map(function (name) {
//   return name.length;
// });

// Same as above using arrow function.
const nameLengths = users.map((name) => name.length);
console.log(nameLengths);
