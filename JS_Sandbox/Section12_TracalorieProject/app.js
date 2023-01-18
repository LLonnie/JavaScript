// #region Storage Controller

// #endregion Storage Controller

// #region Item Controller
const ItemController = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.item = item;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure/State
  const data = {
    items: [
      { id: 0, name: "Steak Dinner", calories: 1200 },
      { id: 1, name: "Cookie", calories: 400 },
      { id: 2, name: "Eggs", calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0,
  };

  return {
    logData: function () {
      return data;
    },
  };
})();

// #endregion Item Controller

// #region UI Controller
const UIController = (function () {})();
// #endregion UI Controller

// #region App Controller
const AppController = (function (ItemController, UIController) {
  return {
    init: function () {
      console.log("INITIALIZING APP");
    },
  };
})(ItemController, UIController);
// #endregion App Controller

// Initialize App
AppController.init();
