// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
console.log(a);
console.log(b);

// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);

// Objects
({ a, b, ...rest2 } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b);
console.log(rest2);

// Array Destructuring
const people = ["John", "Beth", "Mike"];
const [person1, person2, person3] = people;
console.log(person1);
console.log(person2);
console.log(person3);

// Parse Array returned from function
function getPeople() {
  return ["John", "Beth", "Mike"];
}

let pers1, pers2, pers3;
[pers1, pers2, pers3] = getPeople();
console.log(pers1);
console.log(pers2);
console.log(pers3);

// Object Destructuring

const person = {
  name: "John Doe",
  age: 32,
  city: "Miami",
  gender: "Male",
};

// Old ES5 Way
// const name = person.name,
//   age = person.age,
//   city = person.city;

// New ES6 Destructuring
const { name, age, city } = person;
console.log(name, age, city);
