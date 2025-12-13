# Unit Testing Basics

Any non-trivial application should include automated tests. While these tests add initial overhead, they pay off in the long run by providing confidence that the code works as expected. The classic wisdom "an ounce of prevention is worth a pound of cure" applies here.

We may never think that someone will use our application in a way that we haven't thought of. But over a large enough scale it will almost certainly happen.

_Note for new developers_: Unit testing is often something learned on the job. You need to first master the basics of application development before you can write effective tests. We are introducing it here so that you know it's an important skill that you will need to pick up as you grow your career.

## Testing frameworks

Testing frameworks help us to write tests in a consistent and efficient way. There are many testing frameworks available. We will be using [Vitest](https://vitest.dev/) for this course. It works well with Node.js and ESM modules.

You'll see in the `package.json` file that we have added `vitest` as a dev dependency. This will allow us to run the tests using the `npm test` command.

**Dev dependencies** are dependencies that are only used in the development process. They are not intented to be shipped out to production. We can install them using the `npm install --save-dev [package-name]` command or the `npm install -D [package-name]` command.

## Overview of the application

`server.js` is the entry point for our application. It just exposes two endpoints that call greetings functions.

`greetings.js` contains the business logic for the greetings. These belong in their own file because we want to keep our business logic (rules about greetings themselves—their format, content, and when they're shown) separate from our application logic (rules about routing, state management, etc.).

## Creating and running the tests

This also helps us to test the business logic in isolation using our `greetings.test.js` file. We simply pull in the library functions and those we want to test:

```javascript
import { describe, expect, test } from "vitest";
import { getStaticGreeting, getTimeBasedGreeting } from "../src/greetings.js";
```

We can run the tests using the `npm test` command. This will run all the tests in the `tests` directory.

## Example of a test

Let's pick apart an example:

```javascript
describe("Static Greeting", () => {
  test("should return static greeting message", () => {
    // Arrange
    const expected = "Hello, welcome!";

    // Act
    const result = getStaticGreeting();

    // Assert: check the greeting.
    expect(result).toBe(expected);
  });
});
```

## Naming tests

The `describe` function is used to group related tests together. The `test` function is used to define a single test. Both take a string as a parameter.

As a guidelines, test names should read like a sentence and should describe the test in a such a way that a non-technical stakeholder could understand what the test is doing. When we write tests like this they become another way to document the code, which is increasingly relevant as AI tools rely on them to understand the codebase.

We should not use function names or implementation details in the test names; this leads to brittle tests that will break if code is refactored:

```javascript
// BAD: brittle test that will break if implementation details change
describe("getStaticGreeting", () => {
  test("should return 'Hello, welcome!'", () => {
    const expected = "Hello, welcome!";
    const result = getStaticGreeting();
    expect(result).toBe(expected);
  });
});
```

## Arrange, act, assert

`Arrange`, `Act`, and `Assert` is a recommended pattern for writing tests.

- **Arrange**: Set up the test data and environment.
- **Act**: Call the function or method we are testing.
- **Assert**: Check the result of the function or method.

We may or may not have much in the `Arrange` step; we'll see a more involved example later.

## Assertions

The vitest library provides the `expect` function to make assertions about the result of the function or method. It works by throwing an error if the assertion is not true. The framework then catches the error and reports it to the user. Most testing frameworks work in a similar way.

```javascript
expect(result).toBe(expected);
```

The assertions we care about in this example are:

- `toBe`: checks if the result is equal to the expected value.
- `toThrow`: checks if the function throws an error.

## Running the tests

We're ready to run the tests!

```bash
npm test
```

This will run all the tests in the `tests` directory.

## Viewing the test results

The test results will be displayed in the console. The test process (program) will not stop, so you will have to kill it using `q` or `Ctrl+C` in the terminal.

## Writing tests: Red then green

Let's write the next test for the `getTimeBasedGreeting` function. We want to test every path of execution for the function. We have already tested hours zero and five. Let's test hour twelve:

- Start by copy/pasting the hour five test
- Change the label for the test to "should return afternoon greeting for hour 12"
- Change the hour to 12
- Change the expected greeting to "fail"
- Run the tests

The test should fail. This is what we want! We have to make sure that test is actually going to catch any failures before writing a passing case. Now we can fix it:

- Change the expected greeting to "Good afternoon!"
- Run the tests

Enjoy the green checkmark!

As you add more functionality to your codebase, you should add tests for any critical business or domain logic, especially if it's complex or error-prone.

## Takeaways:

- Test names should describe the test in a such a way that a non-technical stakeholder could understand what the test is doing.
- Always make your test go red (fail) prior to making it green (pass).
- We should test all edge cases, boundary cases, and error cases; not just the "happy path".
- Write your tests as you are developing your code; this is much more effective than retrofitting your codebase with tests.
