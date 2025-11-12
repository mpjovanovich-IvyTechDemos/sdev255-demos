# Route Parameters

**Route parameters** are a way to pass information to a route handler. They function much like a query string, but are part of the route path. They are denoted by a colon followed by the parameter name.

In the example below we see one route to return all users, and another to return a single user by their ID.

```
http://localhost:3000/users
http://localhost:3000/user/12
```

## What to look for

### Route parameters in Express

```js
app.get("/user/:handle", (req, res) => {
  const handle = req.params.handle;
  res.send(`User Handle: ${handle}`);
});
```

Express has a `params` property on the request object that contains the route parameters as strings.

## Try it

Run the application. From Postman or your browser, try the following paths:

- `http://localhost:3000/grades`
- `http://localhost:3000/grades/c001`

## Challenge

- Create a midtermGrades object for the three students
- Add a new route to return the midterm grades all students
- Add a new route to return the midterm grades for a single student
