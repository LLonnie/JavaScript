// If syntax

// if(something) {
//   do something
// } else {
//   do something else
// }

const id = 100; // single = assigns values.

// // Equal To
// if(id == 100) { // == compares values
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not Equal To
// if(id != 101) { // == compares values
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Equal To Value and Type
// if(id === 100) { // === compares values and types
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Not Equal To Value and Type
// if(id !== 100) { // === compares values and types
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Test if undefined
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('No ID');
// }

// // Greater Than
// if(id > 200) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Less Than
// if(id < 150) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Greater Than or Equal To
// if(id >= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Less Than or Equal To
// if(id <= 99) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Else If
const color = 'yellow';

// if(color === 'red') {
//   console.log('Color is red');
// } else if(color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is neither red or blue.')
// }



// Logical Operators
const name = 'Steve';
const age = 20;

// && is the AND logical operator
if(age > 0 && age < 12) {
  console.log(`${name} is a child.`);
} else if(age >= 13 && age <= 19) {
  console.log(`${name} is a teenager.`);
} else {
  console.log(`${name} is an adult.`)
}

// || is the OR logical operator
if(age < 16 || age > 65) {
  console.log(`${name} can not run in the race.`);
} else {
  console.log(`${name} is registered for the race.`)
}



// Ternary Operator
// Short hand way of doing conditionals

console.log(id === 100 ? 'CORRECT' : 'INCORRECT')



// If statements work without curly braces.
// Without Braces
if(id === 100)
  console.log('CORRECT');
else
  console.log('INCORRECT');