# Event Listeners

**Event listeners** are functions that are called when an event occurs. You can add an event listener to any element in the document. After adding an event listener, then element is **subscribed** to the event.

```javascript
element.addEventListener("event", () => {
  // Event handler code
});
```

The code that runs when the event occurs is called the **event handler**.

This is most often written as an **anonymous function** - a function defined inline instead of a named function elsewhere in the code.

## Event types

A few common event types are:

| Event type | Description                                |
| ---------- | ------------------------------------------ |
| click      | The user clicks on an element              |
| mouseover  | The user moves the mouse over an element   |
| mouseout   | The user moves the mouse out of an element |
| focus      | The user focuses on an element             |
| blur       | The user blurs from an element             |
| keydown    | The user presses a key                     |
| keyup      | The user releases a key                    |
| load       | The page has finished loading              |
| unload     | The page is being unloaded                 |

## Debugging JavaScript in the Browser

It is possible to step through client side JavaScript in VS Code using extensions, but for this course we are going to use the tools in the browser.

- Open browser DevTools (F12 or find it in options)
- Go to "Sources" tab
- Find the JavaScript file that you want to debug
- Put breakpoints and run, as with VS Code

## JavaScript load order

You can load external scripts anywhere in the document:

```html
<script src="script.js"></script>
```

In the past you would often see these loaded at the bottom of the document, before the closing `</body>` tag. This is because the browser loads each element in the order they are encountered in the document. By default scripts will block the loading of the page until they are fully loaded. This is called **synchronous loading**.

People would put the JavaScript at the bottom of the document so that the page showed the content before the JavaScript was loaded.

### Async and defer

Modern JS offers two new attributes to control the loading of scripts: `async` and `defer`. Now we can put the script tags in the head of the document, and they will not block the loading of the page.

_async keyword_

If we want to prevent blocking while the JavaScript is loading, we can use the `async` attribute. This will load the script asynchronously, and will execute as soon as it is loaded:

```html
<script src="script.js" async></script>
```

_defer keyword_

If your script needs to access the DOM, you should use the `defer` attribute. This will load the script asynchronously, but will not execute until the DOM is fully loaded:

```html
<script src="script.js" defer></script>
```

## When to use JavaScript?

**Rule of least power** = Use the least powerful tool to do the job.

We used to need JavaScript to control page styling, but often don't need it anymore.

Modern CSS is very capable of doing many UI tasks. If you can do it with CSS, do it with CSS:

- Hover effects
- Animations
- Media queries

Turn to JavaScript when you need to do something that CSS can't do.
