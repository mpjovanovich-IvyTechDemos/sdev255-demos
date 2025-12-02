# Async/Await

## What is async/await?

Async/await is a modern way to handle asynchronous operations in JavaScript. It is a syntactic sugar for promises that allows us to write asynchronous code in a more synchronous style.

## Examples

The example from the previous section using promises can be rewritten using async/await like this:

```js
function slowAdd(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number + 1);
    }, 1000);
  });
}

try {
  // Note the `await` keyword before the function call
  let result = await slowAdd(1);
  console.log("First addition:", result);

  result = await slowAdd(result);
  console.log("Second addition:", result);

  result = await slowAdd(result);
  console.log("Third addition:", result);
} catch (error) {
  console.error("Error:", error);
}
```

## Common mistake: forgetting to use `await`

A very common mistake is to forget to use `await` when calling an asynchronous function. This will result in the function returning a promise instead of the result of the function.

Whenever a function returns a promise, you need to use `await` to wait for the promise to be fulfilled.

```js
function slowAdd(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number + 1);
    }, 1000);
  });
}

const result = slowAdd(1);
console.log(result); // This will print a promise object
```
