// Add a listener to the entire page div element
const page = document.getElementById("page");

page.addEventListener("click", (event) => {
  // "Where we are now" - where the event listener is attached
  console.log(`Current Target: ${event.currentTarget.tagName}`);
  // Where the event originated from
  console.log(`Target: ${event.target.tagName}`);
});

// Add a listener to the item list UL element
const itemList = document.getElementById("itemList");

itemList.addEventListener("click", (event) => {
  const target = event.target;
  // Make sure the target is an li element
  // Watch casing here!
  if (target.tagName !== "LI") {
    return;
  }
  // Toggle the hot class on the target element
  target.classList.toggle("hot");
});
