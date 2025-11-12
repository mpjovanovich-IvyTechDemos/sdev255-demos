# CRUD API

The acronym **CRUD** stands for **Create, Read, Update, Delete**. RESTful APIs use different HTTP methods to represent these operations.

Shown here are the generic CRUD operations along with their associated HTTP methods.

| Operation | HTTP Method |
| --------- | ----------- |
| Create    | POST        |
| Read      | GET         |
| Update    | PUT         |
| Delete    | DELETE      |

Reference: [HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

## What to look for

### Lack of validation

To keep this demo simple, we are not validating the data that the user provides. We would want to check for:

- Empty values from the user
- Values of the wrong data type (e.g. text instead of a number, negative numbers, etc.)
- Duplicate values if we're trying to create a new record (key already exists)
- Keys that don't exist if the user is trying to update or delete a record

### JSON middleware

```js
app.use(express.json());
```

We were previously simulating an HTML form post, so we used the `express.urlencoded` middleware to parse the body of the request.

Now we are using the `express.json` middleware to parse the body of the request as JSON.

Both are frequently used in modern applications.

### CRUD routes

The Express "app" object has a `get`, `post`, `put`, and `delete` method that is used to define a route handler for each type of request.

### HTTP Status Codes

HTTP status codes are a way to indicate the status of a request to the client. They are a 3-digit number that is sent in the response to the client.

Reference: [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

Common status codes are:

| Code | Description           |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 301  | Moved Permanently     |
| 302  | Found                 |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 500  | Internal Server Error |

We should return the appropriate status code in the response to the client. In express, we can use the `res.status()` method to set the status code.

Everything will use the 200 status code except for PUT, which uses the 201 status code.

```js
res.status(201).json({ message: "Grade created" });
```

## Try it

Run the application. From Postman, try the following paths. After each one, do a GET on `http://localhost:3000/grades`:

_POST: http://localhost:3000/grades_

```json
{ "id": "c004", "grade": 95 }
```

_PUT: http://localhost:3000/grades/c003_

```json
{ "grade": 95 }
```

_DELETE: http://localhost:3000/grades/c003_

If you need to reset the grades you can restart the application.
