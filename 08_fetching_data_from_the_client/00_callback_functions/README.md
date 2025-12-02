# Callback Functions

## Asynchronous programming

In **synchronous programming** the program waits for something to complete before continuing to perform other tasks. This is the desired behavior for most tasks.

Sometimes, however, we end up with a **blocking operation**. This may be something like reading a large file from disk. With synchronous execution the program can't execute any other code until the file is completely finished reading. This may prevent the program from being responsive to the user.

**Asynchronous programming** allows the program to continue to perform other tasks while waiting for something to complete. It is typically used in the context of:

- **I/O (input/output) bound** operations such as reading a file from disk
- **Network bound** operations such as fetching data from a server
- **CPU bound** operations such as sorting a very large list of items in memory

## Higher-order functions

Many programming languages support **higher-order functions**. This means that functions can be passed as arguments to other functions.

In JavaScript, this is seen in the form of **callback functions**.

We've already seen this in the form of event listeners, route handlers, and other functions where we have passed in an arrow function as an argument.

## Examples

Try running these in VS Code, or just paste the code into the browser console.

### Basic example

- `outerFunction` is the higher-order function. It expects a callback function as an argument.
- Within the function it calls the callback function using its parameter name and parenthesis, just like any other function call.

```js
function innerFunction() {
  console.log("Callback function called");
}

function outerFunction(callback) {
  console.log("Outer function called");
  callback(); // Calls innerFunction
}

// Will print:
// "Outer function called"
// "Callback function called"
outerFunction(innerFunction);
```

We typically use arrow functions as callback functions. Here is the same example using an arrow function:

```js
function outerFunction(callback) {
  console.log("Outer function called");
  callback();
}

// We've defined the callback function inline here
outerFunction(() => {
  console.log("Callback function called");
});
```

### Callback with parameters

We can use a function with any signature as a callback function. In the previous example the function took no parameters and returned nothing (void).

Here is an example of a function that takes a single parameter and returns a value. Our outer function takes a formatter function as an argument that allows the caller to transform the final message.

```js
function outerFunction(formatter) {
  let message = "I love programming.";
  message = formatter(message);
  return message;
}

// Will print:
// "I LOVE PROGRAMMING."
outerFunction((message) => {
  return message.toUpperCase();
});

// Will print:
// "i love programming."
outerFunction((message) => {
  return message.toLowerCase();
});
```

## Callbacks in context

If all we were doing was transforming some message, there wouldn't be a need for a callback function. We could just call the transformation function directly.

Callbacks become useful when we need to perform some action after something has completed, but we don't want to block the main thread.

In the below example **_the significant thing to note is the order in which the code executes_**. Note the program output:

```
Doing other useful things in the program.
The text contains the word 'fox'  1  times.
The text contains the word 'fox'  0  times.
```

Yet the "Doing other useful things..." message is the last line in the program! This is because the countOccurencesAsync function is asynchronous and will not block (halt execution) of the main thread. The code will keep going, and the callbacks will be called by the async functions when they are ready.

```js
// Pretend these are huge blocks of text with thousands of words.
const text1 = "The quick brown fox jumped over the lazy dog.";
const text2 = "The ugly yellow yak grazed under the beautiful buzzard.";

function countOccurencesAsync(text, word, onComplete) {
  // Adding a 1s delay to simulate a time-consuming operation
  setTimeout(() => {
    let count = 0;
    let pos = 0;
    while ((pos = text.indexOf(word, pos)) !== -1) {
      count++;
      pos += word.length;
    }
    onComplete(count);
  }, 1000);
}

countOccurencesAsync(text1, "fox", (count) => {
  console.log("The text contains the word 'fox' ", count, " times.");
});

countOccurencesAsync(text2, "fox", (count) => {
  console.log("The text contains the word 'fox' ", count, " times.");
});

// Do other useful things in the program...
console.log("Doing other useful things in the program.");
```

## Callbacks for asynchronous operations

Callbacks are widely used in JavaScript for a number of tasks. Callbacks were the original way to handle asynchronous operations in JavaScript, but they have been superseded by other methods such as promises and async/await. We will look at these in the next section.
