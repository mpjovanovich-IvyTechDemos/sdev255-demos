# Templating Engines

Templating engines allow us to use traditional coding control logic in our HTML templates. In EJS we do this with the scriptlet tags: `<% ... %>`.

## What to Look For

### Conditional Rendering

We can use the `if` statement to conditionally render HTML.

```js
let x = 3;
let html = `
  <% if (x > 2) { %>
    <p>x is greater than 2</p>
  <% } else { %>
    <p>x is less than or equal to 2</p>
  <% } %>
`;
html = ejs.render(html, { x: x });
res.send(html);
```

This is useful when we don't know ahead of time what the result of the condition will be. A common example is "fetch an item from the database and render HTML differently based on the item's properties".

### Looping

We can use the `forEach` statement to loop through collection of items, like an array, and render HTML for each item.

```js
let items = ["apple", "banana", "cherry"];
let html = `
<% items.forEach(item => { %>
<p><%= item %></p>
<% }); %>
`;
html = ejs.render(html, { items: items });
res.send(html);
```

### When to use Templating Engines

We should always do as much logic as possible in the server-side code. Only use templating engines to sub in values and control the presentation of HTML content.

Here's an example of where we should not embed logic in the HTML template. We have some logic to determine if a user can publish an article. This logic is used for conditional rendering of a button:

_Not good:_

```js
let html = `
  <% if (user.role === 'admin' || (user.role === 'editor' && user.permissions.includes('publish')) || user.isOwner) { %>
    <button>Publish Article</button>
  <% } %>
`;
html = ejs.render(html, { user: user });
res.send(html);
```

_Good:_

```js
// Determine permissions in server-side code before passing to the template
const canPublish =
  user.role === "admin" ||
  (user.role === "editor" && user.permissions.includes("publish")) ||
  user.isOwner;

let html = `<% if (canPublish) { %><button>Publish Article</button><% } %>`;
html = ejs.render(html, { canPublish: canPublish });
res.send(html);
```

## Try it

## Challenge
