// Basic Structure
// (function () {
//   // Declare private variables and functions

//   return {
//     // Declare public variables and functions
//   };
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = "Hello World";

//   const changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     },
//   };
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemController = (function () {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log("Item Added....");
  }

  function get(id) {
    return _data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add, // This makes the functions public instead of private
    get: get,
  };
})();

ItemController.add({ id: 1, name: "John" });
ItemController.add({ id: 2, name: "Mark" });
console.log(ItemController.get(1));
console.log(ItemController.get(2));
