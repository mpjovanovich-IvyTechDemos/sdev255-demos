import { describe, expect, test } from "vitest";
import { getStaticGreeting, getTimeBasedGreeting } from "../src/greetings.js";

// ============================================================================
// 1. BASICS OF TESTING
// ============================================================================

// Try to write descriptions as if they're being given to a stakeholder.
// NO: describe("getStaticGreeting", () => { // This is brittle; we may change the function name.
// YES: describe("Static Greeting", () => { // This is more resilient; captures functionality that adds value.

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

// ============================================================================
// 2. PARAMETERIZED TESTS
// ============================================================================

// describe("getTimeBasedGreeting - parameterized tests", () => {
//   // Test multiple scenarios efficiently using test.each
//   test.each([
//     // Morning hours (5-11)
//     [8, "Good morning!"],
//     [5, "Good morning!"], // Boundary: start of morning
//     [11, "Good morning!"], // Boundary: end of morning

//     // Afternoon hours (12-17)
//     [14, "Good afternoon!"],
//     [12, "Good afternoon!"], // Boundary: start of afternoon
//     [17, "Good afternoon!"], // Boundary: end of afternoon

//     // Evening hours (18-22)
//     [20, "Good evening!"],
//     [18, "Good evening!"], // Boundary: start of evening
//     [22, "Good evening!"], // Boundary: end of evening

//     // Night hours (23, 0-4)
//     [2, "Good night!"],
//     [0, "Good night!"], // Edge case: midnight
//     [23, "Good night!"], // Edge case: 11 PM
//     [4, "Good night!"], // Boundary: end of night
//   ])("should return correct greeting for hour %i", (hour, expectedGreeting) => {
//     const result = getTimeBasedGreeting(hour);
//     expect(result).toBe(expectedGreeting);
//   });
// });

// ============================================================================
// 3. MOCKING/STUBBING DEPENDENCIES
// ============================================================================

// describe("getTimeBasedGreeting - with stubbed time", () => {
//   // Example: Stub Date.now() to control time in tests
//   // This demonstrates why we pass hour as a parameter instead of calling
//   // new Date() inside the function - it makes testing easier!

//   test("should work with controlled time using stubs", () => {
//     // In a real scenario, if getTimeBasedGreeting() called new Date() internally,
//     // we would need to stub Date to control the time for consistent tests.
//     // Since we pass hour as a parameter, we can test without stubbing!

//     // But let's demonstrate the concept with a simple example:
//     // Stub Math.random() to show how we control dependencies

//     // Save original function
//     const originalRandom = Math.random;

//     // Stub: make it return a predictable value
//     Math.random = vi.fn(() => 0.5);

//     // Use the stub
//     const randomValue = Math.random();
//     expect(randomValue).toBe(0.5);
//     expect(Math.random).toHaveBeenCalled();

//     // Restore original function
//     Math.random = originalRandom;
//   });

// Better example: If we had a function that used Date internally,
// we would stub it like this (commented out as demonstration):
/*
  test('demonstrates stubbing Date for time-based logic', () => {
    // Stub Date to return a specific time
    const mockDate = new Date('2024-01-15T14:30:00Z');
    vi.spyOn(global, 'Date').mockImplementation(() => mockDate);
    
    // Now any new Date() call will return our controlled time
    const currentHour = new Date().getHours();
    expect(currentHour).toBe(14);
    
    // Restore original Date
    vi.restoreAllMocks();
  });
  */

// The key takeaway: By passing hour as a parameter, we avoid needing
// to stub Date at all! This is why pure functions are easier to test.
// });
