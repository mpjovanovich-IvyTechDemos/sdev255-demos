# The Event Object

JavaScript provides an **event object** that is automatically passed as an argument to any event handler function. This object contains information about the event that occurred.

The most common property is the `target` property, which is the element that triggered the event.

## What to look for

### Event Bubbling

Event bubbling is the process of events bubbling up the DOM tree. This means that the event will be triggered on all parent elements, until it reaches the root element. This is the default behavior of events.

```javascript
const page = document.getElementById("page");
page.addEventListener("click", (event) => {
  // "Where we are now" - where the event listener is attached
  console.log(`Current Target: ${event.currentTarget.tagName}`);
  // Where the event originated from
  console.log(`Target: ${event.target.tagName}`);
});
```

### Event Delegation

Event delegation is a technique of handling events on a parent element instead of individual child elements.

This is useful because it allows you to handle events on a large number of child elements without having to add event listeners to each one, which is more efficient.

```javascript
// itemList is the UL parent element
const itemList = document.getElementById("itemList");
itemList.addEventListener("click", (event) => {
  // event.target is the element that triggered the event
  // This will be the LI element that was clicked
  const target = event.target;
  // Now we can do something with the target element
  console.log(`Target: ${target.textContent}`);
});
```

## Try it
