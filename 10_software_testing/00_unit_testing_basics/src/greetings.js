/**
 * Business logic functions for greetings. These functions are easily
 * testable because they have no side effects; they do not change the state of
 * the system. All dependencies are passed as parameters. Aim for pure
 * functions where possible.
 */

/**
 * Returns a static greeting message
 * @returns {string} A static greeting
 */
export function getStaticGreeting() {
  return "Hello, welcome!";
}

/**
 * Returns a time-based greeting based on the hour of day
 * @param {number} hour - The hour of day (0-23)
 * @returns {string} A greeting appropriate for the time of day
 */
export function getTimeBasedGreeting(hour) {
  // Validate hour range first
  if (hour < 0 || hour > 23 || !Number.isInteger(hour)) {
    throw new Error(`Invalid hour: ${hour}`);
  }

  if (hour >= 5 && hour < 12) {
    return "Good morning!";
  } else if (hour >= 12 && hour < 18) {
    return "Good afternoon!";
  } else if (hour >= 18 && hour < 23) {
    return "Good evening!";
  } else if (hour >= 23 || hour < 5) {
    return "Good night!";
  }
}
