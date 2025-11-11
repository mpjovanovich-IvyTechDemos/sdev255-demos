# Using Query Strings

## What to look for

### Query strings with HTTP GET

In an HTML GET request we can pass information to the server by appending it to the URL after a question mark. This is called a **querystring**.

```
http://localhost:3000?text=Hello
```

The query string is parsed as a **key-value pair**, separated by an equals sign.

In this example:

- the **key** is "text" and the **value** is "Hello"

### Using query strings in Express

```js
const text = req.query.text;
```

Recall that each route handler contains a function with two parameters: `req` and `res`.

`req` is an **object** that contains information about the request. It has a **property** called `query` that contains al of the query string parameters from the request.

We will cover JSON objects in more detail later; for now just know that you can drill down into the `query` object to get the value of a specific parameter by the name of its key:

```js
const text = req.query.text;
```

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000?text=Hello`
- `http://localhost:3000?text=Goodbye`
- `http://localhost:3000?text=I love 🐌s!`

## Challenge

Make a new endpoint for the route `/print-name` that accepts a query string parameter called `name` and returns a string that says "Hello, [name]!".
