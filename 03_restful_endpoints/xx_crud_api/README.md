# CRUD API

The acronym **CRUD** stands for **Create, Read, Update, Delete**. RESTful APIs use different HTTP methods to represent these operations.

Shown here are the generic CRUD operations along with their associated HTTP methods.

| Operation | HTTP Method |
| --------- | ----------- |
| Create    | POST        |
| Read      | GET         |
| Update    | PUT         |
| Delete    | DELETE      |

## What to look for

### Request body types

Depending on what we're trying to do we may send different types of data to or from the server. The HTTP "Content-Type" request header tells the client or server how to parse the incoming data. Some common types and their associated HTTP headers are:

| Data Type                          | Content-Type                      |
| ---------------------------------- | --------------------------------- |
| HTML Forms                         | application/x-www-form-urlencoded |
| JSON                               | application/json                  |
| Multipart/Form-Data (file uploads) | multipart/form-data               |
| Text                               | text/plain                        |

Express uses middleware to determine the type of the request body, so we must include either the `express.json()` or `express.urlencoded()` middleware (or both) in our app.js file.

#### x-www-form-urlencoded

This is the default request body type for HTML forms. It is a simple key-value pair format that is easy to parse and understand. It works much like a query string.

Refer to the previous demo for an example of how to send data using this type.

#### JSON

When the data that we have to pass between clients and servers has a complex structure, we use JSON (JavaScript Object Notation) to represent it.

In this example we start with a "color scheme" object:

```json
{
  "primary": "red",
  "secondary": "red",
  "tertiary": "red"
}
```

The server keeps a "colorSchemes" object where each key is a unique identifier for a color scheme object. This is the persistent data store for the application:

```js
const colorSchemes = {
  superRed: { primary: "red", secondary: "red", tertiary: "red" },
  kindaRed: { primary: "red", secondary: "pink", tertiary: "magenta" },
};
```

If we wanted the secondary color on the kindaRed color scheme, we would access it like this:

```js
const secondaryColor = colorSchemes.kindaRed.secondary;
console.log(secondaryColor); // "pink"
```

### CRUD operations

#### Read / GET

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

## Try it

From Postman...
