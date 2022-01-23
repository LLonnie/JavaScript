// Create some arrays

const numbers = [46,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Pear', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value
val = numbers[3];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays
// Add on to the end of array
numbers.push(250)

// Add on to the front of array
numbers.unshift(120);

// Take off from the end
numbers.pop();

// Take off from the beginning
numbers.shift();

// Splice values out of array.
// numbers.splice(1, 1); // (start, end)
numbers.splice(1, 3); // (start, end)

// Reverse an array
numbers.reverse();

// Concatenate Array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort(); // This sorts by first number, not whole number so 100 is before 23.

// Use the compare function for sorting numbers.
val = numbers.sort(function(x, y) {
  return x - y;
})

// Reverse sort numbers.
val = numbers.sort(function(x, y) {
  return y - x;
})

// Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers)
console.log('Val is: ' + val);