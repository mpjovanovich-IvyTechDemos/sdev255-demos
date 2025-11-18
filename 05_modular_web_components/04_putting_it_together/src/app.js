import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

// Admins should be able to see all properties on products.
// Everyone else just sees the name and price.

const html = `
  <html>
    <head>
      <title>Insect Store</title>
    </head>
    <body>
      <h1>Insect Store</h1>
      <ul>
        <li>
          <a href="/products">Products</a>
        </li>
      </ul>
    </body>
  </html>
`;

app.get("/products", (req, res) => {
  // TODO
  res.render("products", { products: products });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
