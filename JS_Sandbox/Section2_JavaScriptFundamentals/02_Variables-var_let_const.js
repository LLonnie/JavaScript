// Variables
// var, let, const

// Declaring a variable
var name = 'John Doe';
console.log(name);

// Changing variables
name = 'Steve Smith';
console.log(name);

// Initializing a variable
var greeting; // This will set it to undefined.
console.log(greeting);

// Assigning a variable a value.
greeting = 'You suck!';
console.log(greeting);

// Rules and Conventions with variable names.
  // Can include (letters, number, _, $)
  // Variable names cannot start with a number.
  // var 1name = 'John';

  // Multi word variables
  var firstName = 'John'; // Camel case
  var first_name = 'Sara'; // Underscore Convention.
  var FirstName = 'Tom'; // Pascal case


// Let
  // Works very similar to (var), but has advantages in block level scoping.
  let phone = '801-888-9999';
  console.log(phone);
  let phoneNumber;
  console.log(phoneNumber);
  phoneNumber = '123456789';
  console.log(phoneNumber);


// Const
  // This is a set variable and cannot be reassigned.
  const email = 'johndoe@test.com';
  console.log(email);

  // Below will error
  // email = 'sara@gmail.com';

  // Value has to be assigned.
  // This will error.
  // const email2;

  // You can reassign values in an object like below, but a const cannot be set to a new object.
  const person = {
    name: 'John',
    age: 30
  }
  console.log(person);

  person.name = 'Sara'
  person.age = 32;
  console.log(person);

  // Same thing with arrays, the contents can be changed, but it cannot be set to a new array.

  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
  numbers.push(6);
  console.log(numbers);