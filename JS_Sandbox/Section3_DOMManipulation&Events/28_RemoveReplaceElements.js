// REPLACE ELEMENT
// Create Elem
const newHeading = document.createElement("h2");
newHeading.id = "task-title";
newHeading.appendChild(document.createTextNode("Task List"));
// Get old heading
const oldHeading = document.getElementById("task-title");
// Get parent
const cardAction = document.querySelector(".card-action");
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");
// Remove list item
lis[0].remove();
// Remove by child
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;
// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.hasAttribute("href"); // true
val = link.hasAttribute("title"); // false
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link.hasAttribute("title");

console.log(val);