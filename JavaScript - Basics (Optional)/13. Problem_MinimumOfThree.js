/**
 * FINDING THE MINIMUM OF THREE INTEGERS
 * =======================================
 * Problem: Given three integer values, find the minimum among them.
 * 
 * Approach:
 * - Compare the three integers using conditional statements.
 * - Use the `Math.min()` function to find the minimum value directly.
 * 
 * Syntax for `Math.min()`:
 *   Math.min(a, b, c) returns the smallest of the numbers `a`, `b`, and `c`.
 * 
 * Let's look at both approaches:
 */

// Example 1: Using conditional statements

let num1 = 15;
let num2 = 9;
let num3 = 22;

let minValue;

if (num1 <= num2 && num1 <= num3) {
    minValue = num1;
} else if (num2 <= num1 && num2 <= num3) {
    minValue = num2;
} else {
    minValue = num3;
}

console.log("The minimum value is:", minValue);  // Output: The minimum value is: 9


// Example 2: Using `Math.min()`
let min = Math.min(num1, num2, num3);

console.log("The minimum value using Math.min() is:", min);  // Output: The minimum value using Math.min() is: 9

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: num1 = 15, num2 = 9, num3 = 22
 * Output: The minimum value is: 9
 * 
 * Case 2: num1 = 1, num2 = 2, num3 = 3
 * Output: The minimum value is: 1
 * 
 * Case 3: num1 = -10, num2 = 0, num3 = 10
 * Output: The minimum value is: -10
 * 
 * Case 4: num1 = -5, num2 = -5, num3 = -5
 * Output: The minimum value is: -5
 */
