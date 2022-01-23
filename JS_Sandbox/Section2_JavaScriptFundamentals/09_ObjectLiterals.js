const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['muisc', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 2021 - this.age; // This is pertaining to the object you are inside of. 
                            // Which is person in this case.
  }
}

let val;

// Get whole object
val = person;

// Get specific value
val = person.firstName;
val = person['firstName']; // Same thing as above, just different syntax.
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val)

// Arrays of objects.
const people = [
  {name: 'John', age: 30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age: 41}
]

// Looping through an array.
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}