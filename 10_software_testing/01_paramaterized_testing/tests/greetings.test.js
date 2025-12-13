import { describe, expect, it } from "vitest";
import { getTimeBasedGreeting } from "../src/greetings.js";

// ============================================================================
// 2. PARAMETERIZED TESTS
// ============================================================================
describe("Time-Based Greeting", () => {
  // Test legitimate input values
  it.each([
    // Good morning (5-11)
    [5, "Good morning!"], // boundary
    [6, "Good morning!"], // happy path
    [11, "Good morning!"], // boundary

    // Good afternoon (12-17)
    [12, "Good afternoon!"], // boundary
    [15, "Good afternoon!"], // happy path
    [17, "Good afternoon!"], // boundary

    // Good evening (18-22)
    // TODO: complete this section

    // Good night (23, 0-4)
    [23, "Good night!"], // boundary
    [0, "Good night!"], // edge case (case that often causes bugs)
    [1, "Good night!"], // happy path
    [4, "Good night!"], // boundary
  ])("should return '%s' for hour %d", (hour, expectedGreeting) => {
    expect(getTimeBasedGreeting(hour)).toBe(expectedGreeting);
  });

  // Test invalid input values
  it.each([
    [-1, "Invalid hour: -1"], // out of range, low
    [24, "Invalid hour: 24"], // out of range, high
    [1.5, "Invalid hour: 1.5"], // not an integer
    [NaN, "Invalid hour: NaN"], // not a number
  ])("should throw error for invalid hour %d", (hour, expectedError) => {
    expect(() => getTimeBasedGreeting(hour)).toThrow(expectedError);
  });
});
