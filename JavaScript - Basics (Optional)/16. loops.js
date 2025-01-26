/**
 * LOOPS IN JAVASCRIPT
 * =====================
 * A loop allows us to repeat a block of code multiple times, 
 * based on a condition or a set of instructions.
 * 
 * WHY LOOPS?
 * -----------
 * Often in programming, we need to perform repetitive tasks. Instead of writing the same code repeatedly, 
 * we use loops to execute the same block of code multiple times.
 * 
 * TYPES OF LOOPS:
 * ----------------
 * 1. `while` Loop
 * 2. `do-while` Loop
 * 3. `for` Loop
 * 4. Enhanced Loops (like `for-in` and `for-of`)
 */

/** 
 * 1. `WHILE` LOOP
 * ----------------
 * - A `while` loop executes a block of code as long as the condition is `true`.
 * 
 * Syntax:
 *   // Variable initialization
 *   while(condition){
 *       // Instructions to execute
 *       // Updating statement (to avoid infinite loops)
 *   }
 * 
 * Notes:
 * -------
 * - The condition is checked before the block is executed.
 * - If the condition is false initially, the loop will not run.
 * - Ensure you have an updating statement inside the loop to avoid infinite loops.
 */

// Example: Print numbers from 1 to 10
let i = 1;  // Initialization
while (i <= 10) {  // Condition
    console.log(i);  // Output the value of i
    i += 1;  // Update i
}

// Problem: Calculate the sum of the first 10 natural numbers
let n = 1;
let sum = 0;
while (n <= 10) {
    sum += n;  // Add n to sum
    n++;  // Increment n
}
console.log("Sum of first 10 natural numbers is:", sum);  // Output: 55

// Reverse while loop: Print numbers from 20 to 1
let num = 20;
while (num >= 1) {
    console.log(num);  // Output current number
    num -= 1;  // Decrement num
}

/**
 * 2. `DO-WHILE` LOOP
 * --------------------
 * - A `do-while` loop executes the block of code **at least once**, even if the condition is false.
 * 
 * Syntax:
 *   do {
 *       // Instructions
 *   } while(condition);
 * 
 * Notes:
 * -------
 * - The block is executed first, and then the condition is checked.
 * - Use `do-while` loops when the block must execute at least once.
 */

// Example: Execute the loop at least once
let x = 5;
do {
    console.log(x);  // Output the value of x
    x--;  // Decrement x
} while (x > 5);  // Condition is false, but the loop runs once

/**
 * 3. `FOR` LOOP
 * ----------------
 * - A `for` loop is the most common loop in JavaScript.
 * - It provides a concise syntax to initialize, check a condition, and update a variable in one line.
 * 
 * Syntax:
 *   for(initialization; condition; update){
 *       // Instructions
 *   }
 * 
 * Notes:
 * -------
 * - The loop runs as long as the condition is true.
 * - Initialization occurs only once at the start of the loop.
 * - The updating statement is executed after each iteration.
 */

// Example: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);  // Output the current value of i
}

// Problem: Print all even numbers greater than 1 and less than 25
// Approach 1: Using an `if` condition
for (let i = 1; i < 25; i++) {
    if (i % 2 === 0) {  // Check if the number is even
        console.log(i);  // Output the even number
    }
}

// Approach 2: Incrementing by 2 directly
for (let i = 2; i < 25; i += 2) {
    console.log(i);  // Output the even number
}

/**
 * DIFFERENCE BETWEEN WHILE AND FOR LOOPS
 * ---------------------------------------
 * - Use a `while` loop when the number of iterations is not known in advance.
 * - Use a `for` loop when the number of iterations is known.
 */

/**
 * 4. FOR-IN AND FOR-OF LOOPS
 * ---------------------------
 * These are specialized loops used for iterating through objects or arrays.
 * 
 * a. `for-in` Loop:
 * - The `for-in` loop is used to iterate over the properties of an object.
 * 
 * Syntax:
 *   for (key in object) {
 *       // Instructions
 *   }
 * 
 *  NOTES:
 * -------
 * - The loop iterates through the keys of the object.
 * - Use it for objects, but avoid using it for arrays.
 * 
 * Example:
 */
let obj = { name: "John", age: 25, city: "New York" };
for (let key in obj) {
    console.log(key, ":", obj[key]);  // Output: property name and its value
}

/**
 * b. `for-of` Loop:
 * - The `for-of` loop is used to iterate over iterable objects like arrays, strings, maps, and sets.
 * 
 * Syntax:
 *   for (element of iterable) {
 *       // Instructions
 *   }
 * 
 * NOTES:
 * -------
 * - Use it for arrays, strings, and other iterable objects.
 * - Cannot be used for objects directly.
 * 
 * Example:
 */
let arr = [10, 20, 30, 40];
for (let value of arr) {
    console.log(value);  // Output: 10, 20, 30, 40
}

/**
 * SPECIAL STATEMENTS IN LOOPS: BREAK AND CONTINUE
 * -------------------
 * - `break`: Exits the loop prematurely.
 * - `continue`: Skips the current iteration and moves to the next.
 */

// Example: Use `break` to stop the loop when i equals 5
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;  // Exit the loop
    console.log(i);      // Output: 1, 2, 3, 4
}

// Example: Use `continue` to skip odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;  // Skip odd numbers
    console.log(i);             // Output: 2, 4, 6, 8, 10
}

/**
 * DIFFERENCE BETWEEN LOOPS
 * --------------------------
 * 1. `while` Loop:
 *    - Condition is checked first.
 *    - May not execute at all if the condition is false initially.
 *
 * 2. `do-while` Loop:
 *    - Executes the block at least once, regardless of the condition.
 *
 * 3. `for` Loop:
 *    - Best suited when the number of iterations is known.
 *
 * 4. `for-in` Loop:
 *    - Used for iterating over the keys of an object.
 *
 * 5. `for-of` Loop:
 *    - Used for iterating over iterable objects like arrays and strings.
 */

/**
 * NOTES AND BEST PRACTICES
 * -------------------------
 * 1. Avoid infinite loops:
 *    - Always include a condition and an updating statement to avoid infinite loops.
 * 
 * 2. Choose the appropriate loop:
 *    - Use `while` when the number of iterations is not fixed.
 *    - Use `for` when you know the number of iterations beforehand.
 *    - Use `for-in` and `for-of` for objects and iterable collections, respectively.
 * 
 * 3. Use `break` and `continue` wisely:
 *    - `break` is useful for exiting loops early when a condition is met.
 *    - `continue` is useful for skipping specific iterations.
 */

/**
 * SUMMARY:
 * --------
 * - Loops are essential for performing repetitive tasks.
 * - Types of loops:
 *    1. `while`: Executes as long as the condition is true.
 *    2. `do-while`: Executes at least once, even if the condition is false.
 *    3. `for`: A concise loop with initialization, condition, and update.
 *    4. Enhanced Loops:
 *       - `for-in`: Iterates over object properties.
 *       - `for-of`: Iterates over iterable objects.
 */
