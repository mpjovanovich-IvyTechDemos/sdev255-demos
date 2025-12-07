# Session Management

## Session Storage

Session storage stores user session data as key-value pairs on the server. It can be implemented using a database, file system, or in-memory store.

With session storage, the server tracks user state using a **session ID** - a unique identifier that serves as a lookup key to retrieve the user's session data from the server's session store. This keeps each user's data isolated.

## Session Cookies

When a user visits a server that uses session storage, the server will create a session ID and send it to the user in a cookie header. The browser will then send this cookie back to the server with each request, and the session ID that it contains will be used to retrieve the user's session data from the server's session store.

The session store can contain any data that the server needs to track for the user. For example, user permissions or a list of items the user has added to their cart.

## Session Middleware

We will use the `express-session` middleware to handle session management. This middleware will automatically:

- Create a session object on the request object
- Create a session ID and pass it to the client in a cookie
- Store any session data in memory on the server

```js
// Session middleware
app.use(
  session({
    secret: "SuperSecretSessionKey", // SHOULD BE IN ENV VARIABLE IN PRODUCTION
    resave: false, // See documentation; false is advised
    saveUninitialized: false, // See documentation; false is advised
    cookie: {
      httpOnly: true, // Can't be accessed by client JS
      secure: false, // SHOULD BE TRUE IN PRODUCTION (HTTPS only)
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  })
);
```

We can see the cookie settings that we discussed in the previous section.

The `secret` is used to sign the session ID cookie. This is a security measure to prevent the session ID from being tampered with. This secret is typically a 256-bit random string; we have kept it simple for this demo. _We should never actually hardcode this secret in our code!_ We'll look at how to avoid this later in the course.

## Using session variables

After setting the middleware, we can get or set properties on the session object on the request object using `req.session`.

```js
req.session.someValue = "my value";
```

## Destroying a session

We can destroy a session by calling the `destroy` method on the session object. This will clear the session data from the server's session store and delete the session ID cookie from the client.

This functionality is often used to logout a user.

```js
req.session.destroy((err) => {
  if (err) {
    res.status(500).send("Error clearing session");
  } else {
    res.send("Session cleared");
  }
});
```

## How to run the demo

- Visit the `http://localhost:3000/increment` page in two different browsers.
- Note how each has its own session ID and related state. You can verify this by checking the cookies in each browser.
- Visit the `http://localhost:3000/clear` page to clear the session for a given browser.

## What comes next?

In our lab we will implement an authentication workflow using session cookies.

We will refer to this diagram in our walkthrough:

[Login Session Cookie Workflow](images/login_session_cookie_workflow.svg)
