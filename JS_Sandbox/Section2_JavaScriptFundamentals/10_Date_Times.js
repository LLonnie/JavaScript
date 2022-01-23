
// Declaring a date
const today = new Date();
// const birthday = new Date('9-15-1994')
// const birthday = new Date('9-15-1994 11:30:00');
// const birthday = new Date('September 15 1995');
const birthday = new Date('9/15/1994');

let val;

// Val as an object
val = today;

// Val as a string
val = today.toString();

// Get month
// Dates are zero based, so January is 0, Feb = 1, etc..
val = today.getMonth();

// Get day of month (date).
val = today.getDate();

// Get day of week.
val = today.getDay();

// Get year
val = today.getFullYear();

// Get hours
val = today.getHours();

// Get Minutes
val = today.getMinutes();

// Get Seconds
val = today.getSeconds();

// Get Milliseconds
val = today.getMilliseconds();

// Get current timestamp
val = today.getTime(); // This is the amount of seconds since epoc time.

// Set month
birthday.setMonth(2);

// Set day of month (date)
birthday.setDate(12);

// Set Year
birthday.setFullYear(1985);

// Set Hours
birthday.setHours(3);

// Set Minutes
birthday.setMinutes(30);

// Set Seconds
birthday.setSeconds(25);

console.log(birthday);