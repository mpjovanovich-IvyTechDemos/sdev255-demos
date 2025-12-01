# Refactoring Code with Classes: Starter

This repository serves as a starting point for the next lesson, where we will refactor the code.

## What to look for

This application is a simple REST API for users in a database. The endpoints by now should be familiar.

Now imagine what the application would look like if we started adding functionality for blog posts, user preferences, etc. Each bit of added complexity adds more cognitive load for the developer to understand and maintain.

## Refactoring topics

While this code technically works, it doesn't follow best practices for organizing code. In particular:

- Database connection and initialization is again in the application entry point
- Business logic (the core application functionality) is mixed in with the route handler logic.

Let's look at some software engineering topics that will be relevant to our refactor. These are guidelines, and many of these concepts overlap.

### Separation of concerns

When coding we want good **separation of concerns**. For example, our server file should only be responsible for:

- Creating the server
- Configuring middleware to run in the server
- Configuring routes for the server

In our application we will also need to initialize the database connection and any other global state needed for the application.

### Single responsibility principle

The **single responsibility principle** states that a class or function should have only one responsibility. It is both okay and encouraged to have small classes and functions that "do one thing and do it well".

### Encapsulation

**Encapsulation** is the process of wrapping data and behavior into a single unit.

This means that the class or function should only expose to the outside world what is necessary and hide the implementation details. Some functionality may be internal to the class and should not be exposed (exported in JavaScript terms).

### Command Query Separation

**Command query separation** states that a function either be:

- A command, which changes the state of the system (and does not return a value)
- A query, which returns a value (and does not change the state of the system)

It is not always possible to follow this principle perfectly, but we should strive to do so where we can.
