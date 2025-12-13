# Paramaterized Testing

In the previous demo we saw how we needed many tests to cover all of the boundary cases and paths of execution for our greeting function.

**Parameterized testing** is a technique that allows us to define a set of test cases, each calling the same test but with different input parameters.

## Using parameterized testing

We've rewritten the greeting function to use parameterized testing.

```javascript
describe("Time-Based Greeting", () => {
  // Test legitimate input values
  it.each([
    // Good morning (5-11)
    [5, "Good morning!"], // boundary
    [6, "Good morning!"], // happy path
    [11, "Good morning!"], // boundary
// ...
```

If you flip over to the `greetings.test.js` file you'll see that we've rewritten the test cases to use the `it.each` method. This method takes an array of arrays, where each inner array contains the input parameters and the expected output for that test case.

These are then passed into the arrow function that is the test case, as well as the description format string.

```javascript
// ...
  ])("should return '%s' for hour %d", (hour, expectedGreeting) => {
    expect(getTimeBasedGreeting(hour)).toBe(expectedGreeting);
  });
```

## Challenge

Complete the TODO test cases for the good evening section of the test cases. Check the code that it is testing to figure out what the boundary and happy path cases are.
