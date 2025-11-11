# Node Express App Basics

This example shows the basics of a Node.js application that runs an Express server.

A server can refer to a physical machine, but it can also refer to any software application that serves content to clients. In this case the application that we've built is a server.

## Technologies

**JavaScript** is a programming language that allows you to implement the logic of your application. It was historically used to add interactivity to web pages, and was only available to use in browsers like Chrome, Firefox, and Safari. Each browser has a _JavaScript engine_ that is responsible for executing the JavaScript code.

**Node.js** is a JavaScript runtime environment that allows you to run JavaScript code outside of a browser. This lets us build applications like web servers and command line tools.

**Express** is a web application framework for Node.js that provides a robust set of features for building web applications.

## File structure

The `app.js` file is the main entry point for the application. This contains our JavaScript code. We will cover `package.json` at a later time.

## Express application pattern

Express applications follow the following pattern:

```
import express
create express object
configure middleware (not shown in this demo)
configure routes
start server
```

### Importing the express module

```js
import express from "express";
```

The `express` module is imported at the top of the file. This gives us access to the `express` server functionality.

### Creating the express application object

```js
const app = express();
```

We then create an instance of the `express` server object by calling its constructor function and assigning it to the `app` variable. "app" is now our access point to configure anything related to the Express server.

### Configuring routes

```js
app.get("/about", (req, res) => {
  res.send("This is the about page!");
});
```

**Routes** are the _endpoints_ that the server will listen for. These will form the paths that clients are able to use to access the server, and will follow the format: `http://[your-domain]:[port]/[route-path]`.

These may correspond to files in the file system (like an HTML file) or they may just return data. Some examples are:

- `/` - the root path
- `/contact` - a path to a page with a contact form
- `/api/data` - a path to an API endpoint that returns data

#### `app.get()`

The `app.get()` method is used to define **route handlers** for a given path.

This takes two arguments:

- The path to the route.
- An _anonymous function_ that will be executed when the route is visited. This will be in the format of `(req, res) => { ... }`.
  - `req` is the **HTTP request** object. This is this infromation that was sent by the client (the user's browser) to the server.
  - `res` is the **HTTP response** object. This is the information that the server will send back to the client.

#### `app.send()`

The `app.send()` method is used to send a response back to the client. It is like the "return" statement in a function.

### Starting the server

```js
app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

The `app.listen()` method is used to start the server. It takes two arguments:

- The **port number** to listen on. More on this later.
- An anonymous function that will be executed when the server starts. Usually this is a simple log message to the console.

## Try it

Try the following paths:

- `http://localhost:3000`
- `http://localhost:3000/proverb`
- `http://localhost:3000/compliment`
