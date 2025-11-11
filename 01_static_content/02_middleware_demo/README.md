# Middleware Demo

This project showcases several ways to use middleware to process requests and responses.

## What is Middleware?

**Middleware** is a type of function that runs between the request being received by the server and the response being sent to the client.

Middleware functions may appear anywhere between the declaration of the Express application and the `app.listen()` method. They typically appear before the routes are defined.

Middleware runs in the order it appears within the app.

## What to look for

### Middleware Declarations

#### `app.use()`

```js
app.use(express.static("../public"));
```

The `app.use()` method is used to add middleware to the Express application. It takes a function that will be executed for every request.

This may be a function that we write ourselves, or it may be a third-party middleware library like `express.static()`.

#### `next()`

Within a middleware function, the `next()` function is used to call the next middleware function in the chain, or to the route handlers if there are no more middleware functions to call. If we write middleware functions ourselves, we always call `next()` unless we are done processing the request.

```js
// Simple console logger middleware
app.use((req, res, next) => {
  console.log(`Logger: ${req.method} ${req.url}`);
  next();
});
```

### Order of Execution

Middleware functions act like "interceptors". They may or may not return a response. If they do not execution will continue from top to bottom in the file.

For example: if the `express.static` middleware finds a route for a requested url in the public folder, it will return the file and no more middleware will be executed. If it does not find a route in the public folder, execution will continue and the route handlers will be executed.

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000/index.html`
  - Logger middleware will run
  - Express.static middleware will find the requested file, and return it to the client.
- `http://localhost:3000/test`
  - Logger middleware will run
  - Express.static middleware will not find a route in the public folder, so execution will continue.
  - Route handler will run and send the response "This did not come from the public directory."

## Challenge

Try adding a new middleware function that logs the current date and time.
