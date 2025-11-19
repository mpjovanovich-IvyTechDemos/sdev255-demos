# Working with Views

The next step to keeping our codebase organized is to move the HTML code out of the routes and into **views**.

## What to Look For

### Setting the View Engine in Express

In Express, we can set the view engine by calling the `set` method on the application object.

```js
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```

This tells Express to use the EJS template engine to render the views. The second line tells Express where to find the views.

### Creating the Views

In EJS the views have a `.ejs` extension. We can create a new view by creating a new file in the `views` directory. Aside from moving the HTML / EJS to its own file, nothing has changed from what we've done before.

### Binding Data to the View

To bind data to the view, we can pass an object to the `render` method.

```js
const isMember = req.query.member === "true";
res.render("index", { isMember: isMember });
```

This passes the `isMember` variable to the `index.ejs` view.

## Try it

Run the application. From the browser, visit the following URLs:

- http://localhost:3000
- http://localhost:3000?member=true
- http://localhost:3000/bird/cardinal
- http://localhost:3000/bird/mourningDove
- http://localhost:3000/bird/redWingedBlackbird

## Challenge

Try adding a new property to each bird object for "color" and displaying it in the "bird.ejs" view. You can get the colors from the [Indiana Audobon](https://indianaaudubon.org/portfolio/) website.
