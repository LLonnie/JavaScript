// // Bringing in (importing) standard JS module.
// const person = require("./myModule1");
// console.log(person);

// Bringing in (importing) ES2015 Module
import { person } from "./myModule2";
console.log(person);

import * as mod from "./myModule2"; // Import everything from module.
console.log(mod.sayHello());

// Example of importing a default export.
import greeting from "./myModule2";
console.log(greeting);
