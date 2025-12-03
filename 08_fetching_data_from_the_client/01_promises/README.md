# Promises

[Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) are JavaScript's means of handling asynchronous operations. They provide an interface for handling the completion (or failure) of an asynchronous operation.

## Promise States

An asynchronous function **_returns a promise object_**. This promise object is in one of three states:

- Pending: The async operation has not yet completed.
- Fulfilled: The async operation has completed successfully.
- Rejected: The async operation has failed.

## Consuming a promise with `then()`

When you get into more advanced scenarios you may need to create your own promises, but far more often you will be consuming promises that are returned from asynchronous functions.

The `then` method is used to handle the result of a promise, much like a callback function. It takes two arguments: a function to run when the promise is fulfilled, and (optionally) a function to run when the promise is rejected. For simplicity we will only use the fulfilled handler in these examples.

Try this example in VS Code or your browser console.

```js
// This is the asynchronous function that returns a promise
function longRunningOperation() {
  // Adding a 1s delay to simulate a time-consuming operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Operation completed successfully");
    }, 1000);
  });
}

// Calling the asynchronous function gives us a promise object
const longOperationPromise = longRunningOperation();

// Use the `then` method to handle the result of the promise
longOperationPromise.then((result) => {
  console.log(result);
});

// The program will continue to execute while the asynchronous operation is pending
console.log("Doing other useful things in the program.");
```

## Function chaining

We can use function chaining to make our code more readable or to perform multiple asynchronous operations in sequence.

From our previous example:

```js
// No need to create a "longOperationPromise" variable, we can chain the `then` method directly to the asynchronous function call
longRunningOperation().then((result) => {
  console.log(result);
});
```

Let's say we want to perform multiple asynchronous operations in sequence. Try running this example:

```js
function slowAdd(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number + 1);
    }, 1000);
  });
}

// We can chain `then` to call slowAddOne several times in sequence:
slowAdd(1)
  .then((result1) => {
    console.log("First addition:", result1); // 2
    return slowAdd(result1);
  })
  .then((result2) => {
    console.log("Second addition:", result2); // 3
    return slowAdd(result2);
  })
  .then((result3) => {
    console.log("Third addition:", result3); // 4
  })
  .catch((error) => {
    // This is essentially a try/catch block for the entire promise chain
    // Not needed for this case, but showing it for completeness
    console.error("Error:", error);
  });
```

## Common mistake: trying to access the result before the promise is fulfilled

A very common mistake is to try to access the result of a promise before it is fulfilled. This will result in "undefined" being returned.

```js
function slowAdd(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number + 1);
    }, 1000);
  });
}

const result = slowAdd(1);

// This will print "undefined" because the promise is not fulfilled yet
console.log(result);
```

We need to either use `then()` to handle the result of the promise as shown above, or use `await` to wait for the promise to be fulfilled. We will look at `await` in the next section.
