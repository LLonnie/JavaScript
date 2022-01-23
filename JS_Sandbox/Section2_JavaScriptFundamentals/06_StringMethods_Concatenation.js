const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design, web development, web programming'

let val;

val = firstName + lastName;


// Concatenation
val = firstName + ' ' + lastName;


// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age + '.';


// Escaping
val = 'That\'s awesome, I can\'t wait'; 


// Length
val = firstName.length;


// Concat
val = firstName.concat(' ', lastName);


// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];


// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');


// charAt()
val = firstName.charAt('5');


// Get last character of string
val = firstName.charAt(firstName.length - 1);


// Substring()
val = firstName.substring(0, 4);


// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);


// split()
val = str.split(' ');
val = tags.split(',');


// replace()
val = str.replace('Brad', firstName);


// includes()
val = str.includes('Hello');
val = str.includes('foo');

console.log(val);