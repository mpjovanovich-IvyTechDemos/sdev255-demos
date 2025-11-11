# List Filter

## What to look for

### Arrow functions

### Why use arrow functions?

In many languages it is common to pass functions as arguments to other functions. This is called **higher-order functions**.

In JavaScript, we can pass functions as arguments to other functions using **arrow functions**.

#### Syntax

Arrow functions take the following form:

```js
const functionName = (parameters) => {
  return expression;
};
```

When they are very short they may be further simplified to the following form, where the `return` keyword is omitted and the expression is the last statement in the function:

```js
const functionName = (parameters) => expression;
```

When passing them to a higher-order function, we do not have to name or declare them ahead of time. In this case they are called \*_anonymous functions_:

```js
// Passing an anonymous "add 1" arrow function to a higher-order function
outerFunction((param) => param + 1);
```

This last case is how you will most often see arrow functions used.

#### Examples

Assume we have some function called `outerFunction` that accepts a function as an argument.

_Example 1:_

Pass in an "add one" function

```js
outerFunction((num) => num + 1);
```

_Example 2:_

Pass in an "add two numbers" function

```js
outerFunction((a, b) => a + b);
```

_Example 3:_

Pass in a "greet by name" function

```js
outerFunction((name) => console.log(`Hello, ${name}!`));
```

_Example 4:_

A longer function with no implicit return

```js
outerFunction((name) => {
  if (name === "Prof. J") {
    return "Hello Prof. J plus you look amazing!";
  }
  return `Hello ${name} I guess.`;
});
```

### Predicate functions

```js
nums.filter((num) => num % 2 === 0);
```

A **predicate function** is a function that returns a boolean value. It is often used to filter a list of items based on a condition.

The `.filter()` method on arrays is a higher-order function that accepts a predicate function as an argument.

Our implementation says:

- Create an arrow function with one parameter called `num`
- Return a boolean value; if number has no remainder when divided by 2, return true, otherwise return false

Here is a longer version of the same function:

```js
nums.filter((num) => {
  const remainder = num % 2;
  let isEven = false;
  if (remainder === 0) {
    isEven = true;
  }
  return isEven;
});
```

We've just cut out the temporary variables and returned the result of the expression evaluation directly.

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000/even-odd`
- `http://localhost:3000/even-odd?filter=even`
- `http://localhost:3000/even-odd?filter=odd`

## Challenge

Create a new query string filter for "multipleOfThree" that filters the list of numbers to only include those that are multiples of three.
