/**
 * `console.log()`
 * ============================
 * - This function is used to display data in the console.
 * - It can take multiple arguments and prints them together in the output.
 * - Very useful for debugging and checking the values of variables.
 * 
 * Syntax: console.log(data1, data2, ..., dataN);
 */

// Example 1: Logging a single value
console.log(10); // Output: 10
console.log("Hello World"); // Output: Hello World

// Example 2: Logging variables
let age = 24;
console.log(age); // Output: 24

/** 
 * NOTE:
 * - Each `console.log()` creates a new line in the console.
 * - Multiple `console.log()` calls will print on separate lines.
 */

// Example:
console.log("Line 1"); 
console.log("Line 2");
// Output:
// Line 1
// Line 2

/** 
 * Passing Multiple Values
 * --------------------------
 * - We can pass multiple arguments to `console.log()`.
 * - All values will be displayed on the same line, separated by spaces.
 */

console.log(age, 23, "Pawan", 42); 
// Output: 24 23 Pawan 42

/** 
 * Practical Usage:
 * ----------------
 * - Great for testing and debugging.
 * - Helps to track values of variables during program execution.
 * - Makes it easier to identify errors or unexpected behaviors.
 */

// Example: Debugging variables
let name = "Pawan";
let score = 90;
console.log("Name:", name, "| Score:", score); 
// Output: Name: Pawan | Score: 90
