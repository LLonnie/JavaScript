// Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// console.log(sym1);
// console.log(sym2);

// Symbols can never be the same, so this will not be equal
console.log(Symbol() === Symbol());

// One of the main reasons for Symbols is for
// Unique Object Keys.
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";
myObj.key3 = "Prop3";
myObj.key4 = "Prop4";

console.log(myObj);

// Symbols are not enumarable in for... in
for (let i in myObj) {
  console.log(myObj[i]);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify(myObj));
