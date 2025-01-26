/**
 * COMMENTS IN JAVASCRIPT
 * =========================
 * - Comments are used to document the code, making it easier to understand.
 * - Comments are ignored by the JavaScript engine during execution.
 * 
 * Benefits of Comments:
 * 1. Explain the purpose of the code.
 * 2. Help other developers understand the code better.
 * 3. Temporarily disable a portion of code for debugging.
 */

/**
 * TYPES OF COMMENTS
 * ====================
 * JavaScript supports two types of comments:
 */

/** 
 * 1. Single-Line Comments
 * -------------------------
 * - Use `//` to add a single-line comment.
 * - Anything written after `//` on the same line is ignored by the JavaScript engine.
 * 
 * Example:
 */
let name = "Pawan"; // This is a single-line comment
console.log(name);  // Prints the value of the variable `name`

// The following line is commented out and will not execute:
// console.log("This line will not run");

 
// * 2. Multi-Line Comments
// * ------------------------
// * - Use `/* ... */` for multi-line comments.
// * - Everything between `/*` and `*/` is ignored by the JavaScript engine.
// * 
// * Example:

/*
This is a 
multi-line comment.
It can span multiple lines
and is used for lengthy explanations.
*/
let age = 24;
console.log(age); // Prints 24

/* 
Multi-line comments can also be used
to temporarily disable a block of code:
*/
// console.log("This is a disabled line of code");

/**
 * PRACTICAL USAGE OF COMMENTS
 * -----------------------------
 */

// Example 1: Explaining a variable
let score = 100; // Represents the score of the player

// Example 2: Describing a function
function greet(name) {
    // This function greets the user with their name
    console.log("Hello, " + name + "!");
}
greet("Pawan"); // Output: Hello, Pawan!

// Example 3: Temporarily disabling code
// Uncomment the following line to test it:
// console.log("This is a test line");

/** 
 * NOTE:
 * ------
 * 1. Use comments sparingly. Overusing comments can make the code cluttered.
 * 2. Write meaningful comments to describe complex logic or functions.
 * 3. Avoid adding obvious comments that explain trivial code.
 */

// Good Comment:
let x = 10; // Initializes variable `x` with a value of 10

// Avoid obvious comments like:
let y = 20; // This sets y to 20 (too trivial)
