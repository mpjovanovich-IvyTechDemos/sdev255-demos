# Working with the DOM

## What is the DOM?

The **Document Object Model (DOM)** is an in-memory representation of the HTML document. It is a tree of nodes that represent the elements and content of the document. CSS and JavaScript interact with the DOM to modify the content and style of the document.

As an example, the following HTML snippet:

```html
<html>
  <body>
    <h1>Hello, world!</h1>
  </body>
</html>
```

Would be represented as the following DOM tree:

```
html
  body
    h1
```

### Types of Nodes

The DOM tree is made up of nodes. There are four types of nodes:

- Comment nodes
- Element nodes
- Attribute nodes
- Text nodes

_Comment Nodes_

**Comment nodes** are the nodes that represent the HTML comments in the document. These are rarely used in scripting.

_Element Nodes_

**Element nodes** are the nodes that represent the HTML elements in the document; h1, h2, p, etc. Whenever you need to modify an element, you first fetch the element node from the DOM tree.

_Text Nodes_

If an element has text then it will have a **text node** as a child. In JavaScript you can access the content of the text node by accessing the `textContent` property of the element node.

_Attribute Nodes_

**Attribute nodes** represent the attributes of elements (id, class, src, etc.). In JavaScript you can access the attribute values directly by property name or via the `getAttribute()` method.

## Accessing DOM Elements

There are several ways to access DOM elements in JavaScript. We will look at the two most common methods: `getElementById()` and `querySelector()`.

Both start by accessing the `document` object, which represents the root of the DOM tree.

_Note:_ Try doing a console.log(document) in the browser Developer Tools to see the entire DOM tree.

### getElementById()

The `getElementById()` method is the most common way to access an element by its id attribute. An id attribute must be unique within the document, so this is guaranteed to return a single element.

```js
const element = document.getElementById("header");
console.log(element); // Element node
```

### querySelector() / querySelectorAll()

The `querySelector()` and `querySelectorAll()` methods are used to access elements using CSS selector syntax. The former returns the first element that matches the selector, while the latter returns a NodeList of all elements that match the selector.

`querySelectorAll()` examples:

| Selector     | Description                                                |
| ------------ | ---------------------------------------------------------- |
| `h1`         | Selects all `h1` elements                                  |
| `a`          | Selects all `a` elements                                   |
| `.container` | Selects all elements with the class `container`            |
| `#myList li` | Selects all list items within the element with id `myList` |

## Modifying DOM Elements

We will look at a few common use cases for modifying DOM elements.

### Changing the Text Content

The `textContent` property of an element node allows you to get or set the text content of the element.

```js
const element = document.getElementById("header");
element.textContent = "Hello, world!";
```

### Modifying Styles and Attributes

_Changing CSS Properties_

The `style` property of an element node allows you to get or set the styles of the element.

```js
const element = document.getElementById("header");
element.style.color = "red";
```

_Toggling Classes_

We can also toggle classes on an element to apply or remove styles.

```js
const element = document.getElementById("header");
element.classList.toggle("active"); // Toggles the class "active" on the element
```

_Hiding and Showing Elements_

We can hide an element by setting the `display` style to `none`.

```js
const element = document.getElementById("header");
element.style.display = "none";
```

We can then show the element by setting the `display` style to `block` (the default value).

```js
element.style.display = "block";
```

_Changing an Attribute_

Here's how we might change the `src` attribute of an image element to show a different image:

```js
const element = document.getElementById("image");
element.src = "https://example.com/image.jpg";
```

### Creating and Removing Elements

Often times we might need to append or remove elements from the DOM, such as adding a new list item to a list. To do this we:

- Get the parent element
- Create the new element
- Set properties on the new element
- Append the new element to the parent element

```js
const element = document.getElementById("list");
const newItem = document.createElement("li");
newItem.textContent = "New Item";
element.appendChild(newItem);
```

There are many such methods for adding and removing elements from the DOM. Some common ones are:

| Method           | Description                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| `appendChild()`  | Appends a child node to the end of the list of children of a specified parent node. |
| `prepend()`      | Inserts a node at the beginning of the list of children of a specified parent node. |
| `insertBefore()` | Inserts a node before a reference node as a child of a specified parent node.       |
| `insertAfter()`  | Inserts a node after a reference node as a child of a specified parent node.        |
| `removeChild()`  | Removes a child node from the DOM.                                                  |
| `replaceChild()` | Replaces a child node with a new node.                                              |
