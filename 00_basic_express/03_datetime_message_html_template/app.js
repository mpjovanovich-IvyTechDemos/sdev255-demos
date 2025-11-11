import express from "express";

const app = express();
const PORT = 3000;

// We will do a simple string substitution to replace the colors for the text.
const MESSAGE_TEMPLATE = `
  <html>
    <head>
      <title>Hello Minions</title>
    </head>
    <body>
      <h1 style="color: #h1_color#;">Hello Eggplants</h1>
      <p style="color: #p_color#;">Be excellent to each other!</p>
    </body>
  </html>
`;

app.get("/", (req, res) => {
  // Try changing the colors to html colors to see what happens:
  // https://htmlcolorcodes.com/color-names/
  const h1_color = "slateblue";
  const p_color = "turquoise";

  let message = MESSAGE_TEMPLATE.replace("#h1_color#", h1_color);
  message = message.replace("#p_color#", p_color);

  // Note - we can chain the replace calls because they return the modified string.
  // Try commenting the above and using this:
  // const message = MESSAGE_TEMPLATE.replace("#h1_color#", h1_color).replace("#p_color#", p_color);

  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
