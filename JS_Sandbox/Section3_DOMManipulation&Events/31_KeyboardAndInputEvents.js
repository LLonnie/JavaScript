const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const select = document.querySelector("select");

// Clear input
taskInput.value = "";

// form.addEventListener("submit", runEvent);

// // Key down
// taskInput.addEventListener("keydown", runEvent);

// // Key up
// taskInput.addEventListener("keyup", runEvent);

// // Key press
// taskInput.addEventListener("keypress", runEvent);

// // Focus (Click inside)
// taskInput.addEventListener("focus", runEvent);

// // Blur (click outside)
// taskInput.addEventListener("blur", runEvent);

// // cut
// taskInput.addEventListener("cut", runEvent);

// // paste
// taskInput.addEventListener("paste", runEvent);

// // Input
// taskInput.addEventListener("input", runEvent);

// Change (changing option in dropdown)
select.addEventListener("change", runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
