# Text Printer

## What to look for

### Multiple key-value pairs in the query string

We can pass multiple key-value pairs in the query string by separating them with an ampersand.

```
http://localhost:3000?text=Hooray&times=3
```

In this example we have:

| Key   | Value  |
| ----- | ------ |
| text  | Hooray |
| times | 3      |

### Validation

The number one rule of validation is **_NEVER TRUST USER INPUT_**. As a developer you must imagine all of the ways in which a user might break your code, whether accidentally or on purpose.

#### Empty strings

Parameters come in as strings if they are present, or a special value called `undefined` if they are not.

We can check for an empty or undefined string by using the `!` operator. The two examples below are equivalent. You will most often see the second form in practice:

```js
if (req.query.text === undefined || req.query.text === "") {
  res.send("Error: No text provided");
  return;
}
```

```js
if (!req.query.text) {
  res.send("Error: No text provided");
  return;
}
```

#### Numeric types

If we need to treat a parameter as a number, we can use the `parseInt` or `parseFloat` functions.

This will convert the string to a number, or return a special value called `NaN` (Not a Number) if the string is not a valid number.

```js
const times = parseInt(req.query.times);
if (isNaN(times)) {
  res.send("Error: Invalid times parameter");
  return;
}
```

## Try it

Try installing the project dependencies and running the application. Then try the following paths:

- `http://localhost:3000?text=Hooray`
- `http://localhost:3000?text=Hooray&times=3`
- `http://localhost:3000?text=Boo&times=999`

## Challenge

Add validation to make sure the number of times is at least 1 and at most 1000.
