import ejs from "ejs";
import express from "express";

const app = express();
const PORT = 3000;

const items = [
  {
    name: "Item 1",
    description: "First item.",
  },
  {
    name: "Item 2",
    description: "Second item.",
  },
];

// Detail page for an item
app.get("/item", (req, res) => {
  // example: /item?id=1&isAdmin=true

  // We are assuming "id" is the index of the item in the array
  const id = parseInt(req.query.id);
  const isAdmin = req.query.admin === "true";

  let html = `
  <html>
    <head>
      <title>Item Page</title>
    </head>
    <body>
      <h1>Item</h1>
      <p>Name: <%= items[id].name %></p>
      <p>Description: <%= items[id].description %></p>
    <% if (isAdmin) { %>
      <button>Edit</button>
      <button>Delete</button>
    <% } %>
    </body>
  </html>
  `;
  html = ejs.render(html, { items: items, id: id, isAdmin: isAdmin });

  res.send(html);
});

// List page for all items
app.get("/items", (req, res) => {
  let html = `
  <html>
    <head>
      <title>Items Page</title>
    </head>
    <body>
      <h1>Items</h1>
      <ul>
        <% items.forEach( item => { %>
          <li>Name: <%= item.name %>, Description: <%= item.description %></li>
        <% }); %>
      </ul>
    </body>
  </html>
  `;
  html = ejs.render(html, { items: items });
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
