// Get elements by classname
const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
items[0].style.color = "red";
items[3].textContent = "Hello World";

// Filter scope to just things inside the ul.
const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");

// console.log(listItems);

// Get elements by tagname
let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
lis[0].style.color = "blue";
lis[1].textContent = "SUPPPP";

// lis = Array.from(lis); // This will make it an array so the below won't fail.
// lis.reverse(); // Reverse is only an array method, so this will fail.
// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// Query Selector All
const items2 = document.querySelectorAll("ul.collection li.collection-item");
console.log(items2);

items2.forEach((li, index) => {
  li.textContent = `${index}: Word`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach((li) => {
  li.style.background = "#ccc";
});
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "red";
}
