/*
DOM ELEMENTS
*/
// Get DOM elements that we'll need
// Better to fetch them once ahead of time rather than on each render
const itemList = document.getElementById("itemList");
const newItemInput = document.getElementById("newItem");
const addItemButton = document.getElementById("addItem");
const filterInput = document.getElementById("filter");
const noItemsMessage = document.getElementById("noItems");

/*
STATE ITEMS
*/
// Get the items from localStorage when the page loads
// Parse the JSON string or default to empty array
let items = JSON.parse(localStorage.getItem("items") || "[]");

// Current filter term
let currentFilter = "";

/*
LIST RENDERING FUNCTIONS
*/
function getFilteredItems(items, filterTerm) {
  let filteredItems = items;

  // If filter is not empty, filter the items
  if (filterTerm) {
    filteredItems = filteredItems.filter((item) =>
      item.toLowerCase().includes(filterTerm)
    );
  }

  return filteredItems;
}

function renderList() {
  // Clear the list elements
  itemList.innerHTML = "";

  // Apply the current filter to get filtered items
  const filteredItems = getFilteredItems(items, currentFilter);

  // Show the no items message if there are no items
  if (filteredItems.length === 0) {
    noItemsMessage.style.display = "block";
    return;
  } else {
    noItemsMessage.style.display = "none";
  }

  // Add the list items to the unordered list
  filteredItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}

/*
ADD ITEM
*/
function handleAddItem() {
  // Get the value from the new item input field
  const newItem = newItemInput.value.trim();

  // Contains check
  if (items.some((item) => item.toLowerCase() === newItem.toLowerCase())) {
    alert("Item already exists");
    return;
  }

  if (newItem) {
    // Add the new item to the in-memory items array
    items.push(newItem);

    // Save the items array to localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Clear the new item input field
    newItemInput.value = "";

    // Render the list
    renderList();
  }
}

addItemButton.addEventListener("click", () => {
  handleAddItem();
});

newItemInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleAddItem();
  }
});

/*
REMOVE ITEM
*/
itemList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // Remove the item from the in-memory items array
    items = items.filter((item) => item !== e.target.textContent);

    // Save the items array to localStorage
    localStorage.setItem("items", JSON.stringify(items));

    // Render the list
    renderList();
  }
});

/*
FILTER ITEMS
*/
filterInput.addEventListener("input", (e) => {
  // Update the current filter term
  currentFilter = e.target.value.trim().toLowerCase();
  renderList();
});

// Render the list when the page loads
renderList();
