// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("The thing has been clicked.");

//   // e.preventDefault();
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  // console.log("CLICKED BROSKI!!!!");
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = "HELLO LADIES!";

  // Event Type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinate relative to window.
  val = e.clientY;
  val = e.clientX;

  // Coordinate relative to element.
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
