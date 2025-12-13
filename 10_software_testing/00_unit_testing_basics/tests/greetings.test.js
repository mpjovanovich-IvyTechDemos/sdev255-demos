import { describe, expect, test } from "vitest";
import { getStaticGreeting, getTimeBasedGreeting } from "../src/greetings.js";

// ============================================================================
// 1. BASICS OF TESTING
// ============================================================================

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

// We can have multiple tests in the same describe block; it's just a way to
// group related tests together.
describe("Time-Based Greeting", () => {
  test("should return night greeting for hour 0", () => {
    // Arrange
    const hour = 0;
    const expected = "Good night!";

    // Act
    const result = getTimeBasedGreeting(hour);

    // Assert: check the greeting.
    expect(result).toBe(expected);
  });

  test("should return morning greeting for hour 5", () => {
    // Arrange
    const hour = 5;
    const expected = "Good morning!";

    // Act
    const result = getTimeBasedGreeting(hour);

    // Assert: check the greeting.
    expect(result).toBe(expected);
  });

  // We would want to test all edge cases and boundary cases...
  // We will do this next.

  // Error cases are just as important to test as happy path cases.
  test("should throw error for invalid hour", () => {
    // Arrange
    const hour = 24;
    const expected = "Invalid hour: 24";

    // Act & Assert: wrap function call in arrow function to test for thrown errors
    expect(() => getTimeBasedGreeting(hour)).toThrow(expected);
  });
});
