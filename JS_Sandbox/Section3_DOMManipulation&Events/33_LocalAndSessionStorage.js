// // When using localStorage you have to store key:value pairs with the value being a string.
// // You can still store arrays and such, you just have to call .stringify() on it first.

// // local storage will persist in between browsing sessions.
// // set local storage item.
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");

// // remove from storage
// // localStorage.removeItem("name");

// // get value from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");
// console.log(name);
// console.log(age);

// // clear local storage
// localStorage.clear();

// // session storage will be cleared when closing the browser.
// // syntax is the same between local and session storage.
// // set session storage.
// sessionStorage.setItem("name", "Charlie");

document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Task saved");

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach((element) => {
  console.log(element);
});
