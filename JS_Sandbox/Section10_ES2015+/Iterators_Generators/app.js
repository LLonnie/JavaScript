// Iterator Example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Array of names
const namesArray = ["Jack", "Jill", "John"];

//Initialize the iterator and pass in names array
const names = nameIterator(namesArray);
console.log(names.next());
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());

// Generator Example
// Generators can yield (return) multiple values
function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

// Initialize generator
const genTest = sayNames();
console.log(genTest.next());
console.log(genTest.next().value);
console.log(genTest.next().value);
console.log(genTest.next());

// Generator Example of ID Creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
