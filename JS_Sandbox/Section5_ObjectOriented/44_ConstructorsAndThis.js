// FUNCTIONS are called METHODS when they are inside of OBJECTS.

// // Object Literal
// const brad = {
//     name: 'Brad',
//     age: 27
// }


// "THIS" refers to current instance of the object.

// Person constructor
function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    console.log(this); // This will log each time a Person is instantiated.
}

// console.log(this); // This will return the window object.
// const brad = new Person('Brad', 30);
// const john = new Person('John', 25);

// console.log(brad);
// console.log(john.age);

const brad = new Person('Brad', '9/15/1994');
console.log(brad);
console.log(brad.calculateAge());