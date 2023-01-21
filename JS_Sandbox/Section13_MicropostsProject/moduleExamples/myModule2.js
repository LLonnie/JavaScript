// ES2015 Modules

export const person = {
  name: "John",
  age: 30,
};

export function sayHello() {
  return `Hello ${person.name}`;
}

const greeting = "Hello World";
export default greeting; // This makes it so destructure brackets "{}" are not needed on import.
