// Change text of an element on mouseover and mouseout
const header = document.querySelector("h2");
const oldText = header.textContent;

header.addEventListener("mouseover", () => {
  header.textContent = "New text";
});
header.addEventListener("mouseout", () => {
  header.textContent = oldText;
});

// Toggle class "hot" on click
document.querySelectorAll("#itemList li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("hot");
  });
});

// Add a new item to the list on button click
const addItem = document.getElementById("addItem");

addItem.addEventListener("click", () => {
  const newItem = document.getElementById("newItem");

  if (newItem.value.trim() !== "") {
    const newItemLi = document.createElement("li");
    newItemLi.textContent = newItem.value;
    document.getElementById("itemList").appendChild(newItemLi);
    newItem.value = "";
  }
});
