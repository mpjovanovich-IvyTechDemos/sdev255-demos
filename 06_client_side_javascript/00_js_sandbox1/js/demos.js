/*
GETTING ELEMENTS FROM THE DOM
*/

// Get a single element by its ID - document.getElementById()
const header = document.getElementById("header");
console.log(header);

// Get a single element by its id- document.querySelector()
const header2 = document.querySelector("#header");
console.log(header2);

// Get all elements by tag name
const listItems = document.querySelectorAll("li");
console.log(listItems);

// Get all elements by tag name - better; more specific
// in case we have multiple lists on the page
const listItems2 = document.querySelectorAll("#itemList li");
console.log(listItems);

// Get all elements of class "hot"
const hotItems = document.querySelectorAll(".hot");
console.log(hotItems);

/*
CHANGING ELEMENTS
*/

// Change the text of the h2
const h2 = document.querySelector("h2");
h2.textContent = "Buy more groceries!";

// Add a style to the h2
h2.style.fontWeight = "bold";

// Toggle the "hot" class on the first item
const hotItems2 = document.querySelectorAll(".hot");
const firstItem = hotItems2[0];
firstItem.classList.toggle("hot");
firstItem.classList.toggle("hot");

// Apply styles to an array of elements
const listItems3 = document.querySelectorAll("#itemList li");
listItems3.forEach((item) => {
  item.style.backgroundColor = "teal";
});

// Apply styles conditionally
listItems3.forEach((item) => {
  if (
    item.textContent.toLowerCase().includes("peppers") &&
    !item.classList.contains("hot")
  ) {
    item.classList.add("hot");
  }
});

/*
ADDING AND REMOVING ELEMENTS
*/

// Get the list; we will need it to append children
const itemList = document.getElementById("itemList");

// Add a new element to the end of the list
let newLi = document.createElement("li");
newLi.textContent = "New Item";
itemList.appendChild(newLi);

// Add the new element to the beginning of the list
let newLi = document.createElement("li");
newLi.textContent = "New Item 2";
itemList.prepend(newLi);

// Remove the last element from the list
itemList.removeChild(itemList.lastElementChild);

/*
SAFELY SELECTING ELEMENTS
*/

// Safely select an element that may not exist
const maybeThereElement = document.getElementById("notHere");

// Check if it's there first
if (maybeThereElement) {
  maybeThereElement.textContent = "Maybe There";
} else {
  console.error("No element found");
}
