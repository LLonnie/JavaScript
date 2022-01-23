let val;

// Converting to Strings
// Number to string
val = String(5);
val = String(4+4);

// Boolean to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4])

// toString()
val = (5).toString();
val = (true).toString();


// Converting to Numbers
// String to Number
val = Number('5');

// Boolean to Number
val = Number(true); // Returns 1
val = Number(false); // Returns 0
val = Number(null); // Returns 0

val = Number('hello'); // Returns NaN (Not a Number)
val = Number([1, 2, 3]); // Returns NaN (Not a Number)

// parseInt()
val = parseInt('100.30'); // Returns an Integer

// parseFloat()
val = parseFloat('100.50'); // Returns Decimal

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // Only works on strings.
console.log(val.toFixed(1)); // Only works on numbers.



// Type Cohersion
const val1 = 5;
const val2 = '6';
const sum = val1 + val2;
// const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);