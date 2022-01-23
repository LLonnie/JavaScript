// FUNCTION DECLARATIONS

function greet(firstName = 'Steve', lastName = 'Smith'){ //This is how you declare default inputs in es6.

  // Setting default inputs Before es6
  // if(typeof firstName === 'undefined'){
  //   firstName = 'Steve'
  // }
  // if(typeof lastName === 'undefined'){
  //   lastName = 'Smith'
  // }
  // console.log('Hello');
  return `Hello ${firstName} ${lastName}`;
}

// console.log(greet('John', 'Doe'));


// FUNCTION EXPRESSIONS
// unnamed functions are called anonymous functions.

const square = function(x = 3){
  return x*x;
};

// console.log(square(8));


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
// (function(){
//   console.log('IFFE Ran..');
// })();

// (function(name){
//   console.log(`${name} ran the IFFE.`);
// })('Charles');


// PROPERTY METHODS
// When a function is put inside of an object it is called a method.

const todo = {
  add: function(){
    console.log('Add todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function(id){
  console.log(`Delete todo ${id}`);
}

todo.add();
todo.edit(21);
todo.delete(14);