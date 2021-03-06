const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// // Click
// clearBtn.addEventListener("click", runEvent);

// // DoubleClick
// clearBtn.addEventListener("dblclick", runEvent);

// // Mousedown
// clearBtn.addEventListener("mousedown", runEvent);

// // Mouseup
// clearBtn.addEventListener("mouseup", runEvent);

// // Mouseenter
// card.addEventListener("mouseenter", runEvent); // Only fires when entering declared element.

// // Mouseleave
// card.addEventListener("mouseleave", runEvent); // Only fires when leaving declared element

// // Mouseover
// card.addEventListener("mouseover", runEvent); // Fires on entering any element inside parent.

// // Mouseout
// card.addEventListener("mouseout", runEvent); // Fires on leaving any element inside parent.

// Mousemove
card.addEventListener("mousemove", runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
