/**
 * WHY USE RETURN? CAN WE NOT USE CONSOLE.LOG?
 * ===========================================
 * Let's understand the difference between `return` and `console.log()` first.
 */

/**
 * 1. **console.log()**:
 *    - `console.log()` is used to **print** values to the console for debugging or informational purposes.
 *    - It **does not return any value**. Instead, it prints the given value and always returns `undefined`.
 *    - `console` is an object, and `log` is the method attached to the `console` object that prints the output to the console.
 *    - `console.log("Pawan")` prints "Pawan" to the console.
 *    - `console.log()` always returns `undefined` by default, no matter what is printed.
 *    - So, `x` gets assigned the value `undefined`, and when we log `x`, we see `undefined` in the console.
 * 
 * Example:
 */

let x = console.log("Pawan");  // Output: Pawan
console.log(x);  // Output: undefined
/*
Explanation:
- `console.log("Pawan")` prints "Pawan" on the console.
- The function `console.log()` itself always returns `undefined`, and this is captured in variable `x`.
- So, when we log `x`, it prints `undefined`, since that's the return value of `console.log()`.
*/

console.log("--------");

/**
 * 2. **return**:
 *    - `return` is used in functions to **return a value** to the caller.
 *    - It exits the function and sends the specified value back to the point where the function was called.
 *    - `return` is used when you want to return a result or a value that can be used later in the program.
 * 
 * Example:
 */

// Without return:
function welcomeWithoutReturn(name) {
    console.log("Hello", name, "Welcome to JavaScript!");
}
let result1 = welcomeWithoutReturn("Pawan");  // Output: Hello Pawan Welcome to JavaScript!
console.log(result1);  // Output: undefined
/*
Explanation:
- The `welcomeWithoutReturn()` function prints the greeting message using `console.log()`.
- Since there's no `return` value in the function, it returns `undefined` by default.
- `result1` holds `undefined`, which is logged in the next `console.log()`.
*/

// With return:
function welcomeWithReturn(name) {
    console.log("Hello", name, "Welcome to JavaScript!");
    return "Bye Bye";  // The return value is sent back to the caller.
}
let result2 = welcomeWithReturn("Pawan");  // Output: Hello Pawan Welcome to JavaScript!
console.log(result2);  // Output: Bye Bye
/*
Explanation:
- The `welcomeWithReturn()` function prints the greeting message and then returns the string "Bye Bye".
- The value returned by the function is stored in `result2`, which is logged as "Bye Bye".
*/

console.log("--------");

/**
 * 3. **What if we don't return anything from a function?**
 *    - In JavaScript, if we don't manually return anything from a function, it **automatically returns `undefined`**.
 *    - This means, if there is no `return` statement, the function will give us `undefined` by default.
 */

function noReturn() {
    console.log("This function doesn't return anything!");
}
let result3 = noReturn();  // Output: This function doesn't return anything!
console.log(result3);  // Output: undefined
/*
Explanation:
- The `noReturn()` function simply logs a message to the console but does not have a `return` statement.
- Since there is no `return`, the function implicitly returns `undefined`, which is captured in `result3` and printed in the next `console.log()`.
*/

console.log("--------");

/**
 * 4. **Why do we use return instead of just console.log()?**
 *    - **`console.log()`** is mainly for debugging and logging, but it does not allow us to store or use the output later.
 *    - **`return`** is used when we need to send the result back to the caller, making it reusable and allowing us to store it in a variable.
 *    - Without `return`, the value is lost and cannot be used later in the program.
 */

console.log("--------");

// Example: Using return to perform calculations and storing the result
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(5, 3);  // sum will hold the returned value 8
console.log("Sum:", sum);  // Output: Sum: 8

/*
Explanation:
- The `addNumbers()` function takes two parameters, adds them together, and returns the result.
- The result of the addition is stored in `sum` and logged.
*/

// Example: Using return to return a result from a function
function greetPerson(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}
let greeting = greetPerson("Pawan");
console.log(greeting);  // Output: Hello, Pawan! Welcome to JavaScript.

/*
Explanation:
- The `greetPerson()` function returns a personalized greeting message based on the `name` argument.
- The result is stored in `greeting` and logged, which outputs the greeting message.
*/

console.log("--------");

/**
 * SUMMARY:
 * ---------
 * - `console.log()` is for printing to the console, but it does not return any value that can be used later.
 * - `return` is used in functions to send back a value, which can be stored in variables and used further.
 * - If a function does not have a `return`, JavaScript automatically returns `undefined`.
 * - **`return`** is more useful when you need the result of a function to be reused or passed to other operations.
 * - **`console.log()`** is purely for displaying information for debugging or logging purposes.
 */
