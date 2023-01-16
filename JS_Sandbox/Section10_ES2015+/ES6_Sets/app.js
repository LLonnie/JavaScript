// SETS - Store unique values of any type.

const set1 = new Set();
set1.add(100);
set1.add("A string");
set1.add({ name: "John" });
set1.add(true);

console.log(set1);
set1.add(100);
console.log(set1);

const set2 = new Set([1, true, "string"]);
console.log(set2);

// Get size
console.log(set1.size);

// Check for values
console.log(set1.has(100));
console.log(set1.has(50 + 50));
console.log(set1.has({ name: "John" })); // This fails because it is a reference value

// Delete from set.
set1.delete(100);
console.log(set1);

// Iterate through sets

// For...of
for (let item of set1) {
  console.log(item);
}

// For...each
set1.forEach((value) => {
  console.log(value);
});

// Convert SET to ARRAY
const setArray = Array.from(set1);
console.log(setArray);
