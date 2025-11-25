const itemList = document.getElementById("itemList");

// Instead of using an event listener on each list item, we can use the event
// object to get information about the event that occurred. This will tell us
// which element was clicked.
itemList.addEventListener("click", (event) => {
  const target = event.target;
  console.log(target);
  target.classList.toggle("hot");
});
