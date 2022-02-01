// Each Object has a Prototype
// A Prototype is an Object itself
// All object inhert properties and methods from their Prototypes.

// Object.prototype // Default object prototype
// Person.prototype // Person prototype.

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// Calculate Age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

// Get Full Name
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const john = new Person("John", "Doe", "8/12/90");
const mary = new Person("Mary", "Jane", "March 20 1978");

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried("Smith");
console.log(mary.getFullName());

// This is a part of the Object.prototype
console.log(mary.hasOwnProperty("firstName"));
console.log(mary.hasOwnProperty("getFullName"));
