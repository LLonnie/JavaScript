let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = list;
val = listItem;

// Child Traversing
// Get child nodes
val = list.childNodes; // This includes text in the list (or line breaks)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; // 3
val = list.childNodes[1].nodeType; // 1

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children nodes, (This will return just elements)
val = list.children;
val = list.children[0];
list.children[1].textContent = "Hello Bruddah";

// Get children of children
list.children[3].children.id = "test-link";
val = list.children[3].children;

// First child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild;
val = list.lastElementChild;

// Get count
val = list.childElementCount;

// Parent traversing
// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

// Parent of parent
val = listItem.parentElement.parentElement;

// Sibling Traversing
// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val);
