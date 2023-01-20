// #region Storage Controller
const StorageController = (function () {
  return {
    storeItem: function (item) {
      let items;
      if (localStorage.getItem("items") === null) {
        items = [];
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      }
    },
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem("items") === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem("items"));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item, index) => {
        if (item.id === updatedItem.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item, index) => {
        if ((item.id = id)) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem("items", JSON.stringify(items));
    },
    clearItemsFromStorage: function () {
      localStorage.removeItem("items");
    },
  };
})();
// #endregion Storage Controller

// #region Item Controller
const ItemController = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure/State
  const data = {
    // items: [
    // { id: 0, name: "Steak Dinner", calories: 1200 },
    // { id: 1, name: "Cookie", calories: 400 },
    // { id: 2, name: "Eggs", calories: 300 },
    // ],
    items: StorageController.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 1900,
  };

  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
    addItem: function (name, calories) {
      let itemId;
      if (data.items.length > 0) {
        itemId = data.items[data.items.length - 1].id + 1;
      } else {
        itemId = 0;
      }

      const caloriesAsNumber = parseInt(calories);

      const newItem = new Item(itemId, name, caloriesAsNumber);
      data.items.push(newItem);

      return newItem;
    },
    getTotalCalories: function () {
      let calories = 0;
      data.items.forEach((item) => {
        calories += item.calories;
      });
      data.totalCalories = calories;
      return data.totalCalories;
    },
    getItemById: function (id) {
      let found = null;
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    updateItem: function (name, calories) {
      const caloriesAsNumber = parseInt(calories);

      let found = null;
      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = caloriesAsNumber;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function (id) {
      const ids = data.items.map((item) => item.id);

      const index = ids.indexOf(id);

      data.items.splice(index, 1);
    },
    clearAllItems: function () {
      data.items = [];
    },
  };
})();

// #endregion Item Controller

// #region UI Controller
const UIController = (function () {
  const UISelectors = {
    itemList: "#item-list",
    listItems: "#item-list li",
    addButton: ".add-btn",
    updateButton: ".update-btn",
    deleteButton: ".delete-btn",
    backButton: ".back-btn",
    clearButton: ".clear-btn",
    itemName: "#item-name",
    itemCalories: "#item-calories",
    totalCalories: ".total-calories",
  };
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach((item) => {
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong>
        <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      </li>`;
      });
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function () {
      return UISelectors;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemName).value,
        calories: document.querySelector(UISelectors.itemCalories).value,
      };
    },
    addListItem: function (listItem) {
      document.querySelector(UISelectors.itemList).style.display = "block";

      const li = document.createElement("li");
      li.className = "collection-item";
      li.id = `item-${listItem.id}`;
      li.innerHTML = `<strong>${listItem.name}: </strong>
      <em>${listItem.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    clearInputFields: function () {
      document.querySelector(UISelectors.itemName).value = "";
      document.querySelector(UISelectors.itemCalories).value = "";
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent =
        totalCalories;
    },
    clearEditState: function () {
      this.clearInputFields();
      document.querySelector(UISelectors.addButton).style.display = "inline";
      document.querySelector(UISelectors.updateButton).style.display = "none";
      document.querySelector(UISelectors.deleteButton).style.display = "none";
      document.querySelector(UISelectors.backButton).style.display = "none";
    },
    showEditState: function () {
      document.querySelector(UISelectors.addButton).style.display = "none";
      document.querySelector(UISelectors.updateButton).style.display = "inline";
      document.querySelector(UISelectors.deleteButton).style.display = "inline";
      document.querySelector(UISelectors.backButton).style.display = "inline";
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.itemName).value =
        ItemController.getCurrentItem().name;
      document.querySelector(UISelectors.itemCalories).value =
        ItemController.getCurrentItem().calories;
      this.showEditState();
    },
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      listItems = Array.from(listItems);
      listItems.forEach((listItem) => {
        const itemId = listItem.getAttribute("id");
        if (itemId === `item-${item.id}`) {
          document.querySelector(
            `#${itemId}`
          ).innerHTML = `<strong>${item.name}: </strong>
          <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
        }
      });
    },
    deleteListItem: function (id) {
      const itemId = `#item-${id}`;
      const item = document.querySelector(itemId);
      item.remove();
    },
    removeItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems);
      listItems.forEach((item) => {
        item.remove();
      });
    },
  };
})();
// #endregion UI Controller

// #region App Controller
const AppController = (function (
  ItemController,
  StorageController,
  UIController
) {
  // Load Event Listeners
  const loadEventListeners = function () {
    const UISelectors = UIController.getSelectors();

    // Add Item Event
    document
      .querySelector(UISelectors.addButton)
      .addEventListener("click", itemAddSubmit);

    // Disable submit on enter
    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    // Update Item Event
    document
      .querySelector(UISelectors.updateButton)
      .addEventListener("click", itemUpdateSubmit);

    // Delete Item Event
    document
      .querySelector(UISelectors.deleteButton)
      .addEventListener("click", itemDeleteSubmit);

    // Back Button Item Event
    document
      .querySelector(UISelectors.backButton)
      .addEventListener("click", UIController.clearEditState());

    // Clear All Button Item Event
    document
      .querySelector(UISelectors.clearButton)
      .addEventListener("click", clearAllItemsClick);
  };

  const itemAddSubmit = function (e) {
    const input = UIController.getItemInput();

    if (input.name !== "" && input.calories !== "") {
      const newItem = ItemController.addItem(input.name, input.calories);
      UIController.addListItem(newItem);

      const totalCalories = ItemController.getTotalCalories();
      UIController.showTotalCalories(totalCalories);

      StorageController.storeItem(newItem);

      UIController.clearInputFields();
    }
    e.preventDefault();
  };

  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      const listId = e.target.parentNode.parentNode.id;
      const listIdArray = listId.split("-");
      const id = parseInt(listIdArray[1]);
      const itemToEdit = ItemController.getItemById(id);
      ItemController.setCurrentItem(itemToEdit);

      UIController.addItemToForm();
    }

    e.preventDefault();
  };

  const itemUpdateSubmit = function (e) {
    const input = UIController.getItemInput();

    const updatedItem = ItemController.updateItem(input.name, input.calories);

    UIController.updateListItem(updatedItem);

    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    StorageController.updateItemStorage(updatedItem);

    UIController.clearEditState();

    e.preventDefault();
  };

  const itemDeleteSubmit = function (e) {
    const currentItem = ItemController.getCurrentItem();

    ItemController.deleteItem(currentItem.id);

    UIController.deleteListItem(currentItem.id);

    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    UIController.clearEditState();

    StorageController.deleteItemFromStorage(currentItem.id);

    e.preventDefault();
  };

  const clearAllItemsClick = function (e) {
    ItemController.clearAllItems();
    UIController.removeItems();

    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    StorageController.clearItemsFromStorage();

    UIController.hideList();
    e.preventDefault();
  };

  return {
    init: function () {
      UIController.clearEditState();

      const items = ItemController.getItems();
      if (items.length === 0) {
        UIController.hideList();
      } else {
        UIController.populateItemList(items);
      }
      const totalCalories = ItemController.getTotalCalories();
      UIController.showTotalCalories(totalCalories);

      loadEventListeners();
    },
  };
})(ItemController, StorageController, UIController);
// #endregion App Controller

// Initialize App
AppController.init();
