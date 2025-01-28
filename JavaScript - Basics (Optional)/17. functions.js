/**
 * FUNCTIONS IN JAVASCRIPT
 * ==========================
 * A function is a reusable block of code designed to perform a specific task.
 * Functions help in maintaining the DRY (Don't Repeat Yourself) principle by avoiding redundancy in code.
 * 
 * WHY USE FUNCTIONS?
 * -------------------
 * - Code reusability: Write once, use multiple times.
 * - Modularity: Break the program into smaller, manageable blocks.
 * - Maintainability: Makes code easier to debug and maintain.
 * - Readability: Improves the structure of the code.
 * 
 * TYPES OF FUNCTIONS IN JAVASCRIPT:
 * ----------------------------------
 * 1. User-Defined Functions: Functions created by the user to perform specific tasks.
 * 2. Built-In Functions: Predefined functions provided by JavaScript (e.g., `Math.sqrt()`, `console.log()`).
 */

/**
 * 1. USER-DEFINED FUNCTIONS
 * --------------------------
 * These are functions that we create to solve specific problems or tasks.
 * 
 * Syntax:
 *   function functionName(parameters) {
 *       // Function body (code to execute)
 *       return value; // Optional return statement
 *   }
 * 
 * NOTES:
 * -------
 * - Parameters are optional; they are placeholders for input values.
 * - `return` is used to send back the result from the function.
 */

// Example 1: Function to check if a number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    } else {
        return `${num} is Odd`;
    }
}

// Calling the function
console.log(checkEvenOdd(10)); // Output: 10 is Even
console.log(checkEvenOdd(7));  // Output: 7 is Odd

/**
 * Problem: Check which numbers are even or odd between the range 1 to 50
 */
function checkEvenOddInRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(checkEvenOdd(i));
    }
}

// Calling the function for the range 1 to 50
checkEvenOddInRange(1, 50);

/**
 * Example 2: Function to calculate the factorial of a number
 */
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(7)); // Output: 5040

/**
 * PARAMETERS AND ARGUMENTS
 * -------------------------
 * - Parameters are placeholders defined in the function declaration.
 * - Arguments are the actual values passed to the function when it is called.
 * 
 * Example:
 */
function greet(name, age) { // Parameters: name, age
    return `Hello, ${name}. You are ${age} years old.`;
}

console.log(greet("Pawan", 25)); // Arguments: "Pawan", 25

/**
 * MULTIPLE PARAMETERS AND RETURNING VALUES
 * -----------------------------------------
 * - Functions can accept multiple parameters and return values.
 */
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

console.log(add(5, 3));      // Output: 8
console.log(subtract(10, 7)); // Output: 3

/**
 * 2. BUILT-IN FUNCTIONS
 * -----------------------
 * JavaScript provides several built-in functions to simplify common tasks.
 * 
 * Examples:
 * - `Math.sqrt(x)`: Returns the square root of `x`.
 * - `Math.max(a, b, c)`: Returns the largest value.
 * - `Math.min(a, b, c)`: Returns the smallest value.
 * - `console.log()`: Outputs a message to the console.
 * - `parseInt()`: Converts a string to an integer.
 */

// Example: Using built-in functions
console.log(Math.sqrt(16));  // Output: 4
console.log(Math.max(1, 5, 3)); // Output: 5
console.log(Math.min(1, 5, 3)); // Output: 1
console.log(parseInt("42"));   // Output: 42

/**
 * FUNCTION EXPRESSIONS
 * ----------------------
 * In JavaScript, you can also define functions as expressions and assign them to variables.
 * 
 * Syntax:
 *   const functionName = function(parameters) {
 *       // Function body
 *   };
 */

// Example: Function Expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Pawan")); // Output: Hello, Pawan!

/**
 * ARROW FUNCTIONS (ES6)
 * -----------------------
 * Arrow functions provide a concise syntax for writing functions.
 * 
 * Syntax:
 *   const functionName = (parameters) => {
 *       // Function body
 *   };
 * 
 * NOTES:
 * -------
 * - Arrow functions do not have their own `this` keyword.
 */

// Example: Arrow Function
const add = (a, b) => a + b; // Concise single-line arrow function
console.log(add(5, 3)); // Output: 8

const multiply = (a, b) => {
    return a * b; // Multi-line arrow function
};
console.log(multiply(4, 5)); // Output: 20

/**
 * DEFAULT PARAMETERS
 * --------------------
 * Functions can have default values for parameters.
 * 
 * Syntax:
 *   function functionName(parameter = defaultValue) {
 *       // Function body
 *   }
 */

// Example: Default Parameters
function greetWithDefault(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(greetWithDefault("Pawan")); // Output: Welcome, Pawan!
console.log(greetWithDefault());         // Output: Welcome, Guest!

/**
 * REST PARAMETERS
 * ----------------
 * Rest parameters allow a function to accept an indefinite number of arguments as an array.
 * 
 * Syntax:
 *   function functionName(...restParameter) {
 *       // Function body
 *   }
 */

// Example: Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
console.log(sumAll(5, 10, 15));  // Output: 30

/**
 * HIGHER-ORDER FUNCTIONS
 * ------------------------
 * Functions that take other functions as arguments or return functions are called higher-order functions.
 * 
 * Example:
 */
function calculate(operation, a, b) {
    return operation(a, b);
}

console.log(calculate(add, 5, 3));       // Output: 8
console.log(calculate(subtract, 10, 7)); // Output: 3

/**
 * ANONYMOUS FUNCTIONS
 * ---------------------
 * Functions without a name are called anonymous functions. They are often used as arguments to other functions.
 * 
 * Example:
 */
setTimeout(function() {
    console.log("This message is displayed after 2 seconds.");
}, 2000);



/**
 * SUMMARY
 * --------
 * 1. Functions are reusable blocks of code that improve modularity and readability.
 * 2. JavaScript provides two types of functions:
 *    - User-Defined Functions
 *    - Built-In Functions
 * 3. Function types include:
 *    - Named Functions
 *    - Function Expressions
 *    - Arrow Functions
 *    - Higher-Order Functions
 *    - Anonymous Functions
 * 4. Features like default parameters and rest parameters make functions more flexible.
 * 5. Understanding parameters and arguments is key to mastering functions.
 *
 * By using functions effectively, we can write clean, maintainable, and reusable code.
 */
