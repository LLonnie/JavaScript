const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; //Remainder

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.round(2.4);
val = Math.ceil(2.4); // Round Up
val = Math.floor(2.8); // Round Down
val = Math.sqrt(64);
val = Math.abs(-3); 
val = Math.pow(8, 2);
val = Math.min(-2, 33, 4, 1, 55, 6, 3);
val = Math.max(-2, 33, 4, 1, 55, 6, 3);
val = Math.random(); // Returns decimal.

val = Math.random() * 20; // Will return a decimal from 1-19

val = Math.floor(Math.random() * 20 + 1); // Will return whole number from 1 - 20.


console.log(val);