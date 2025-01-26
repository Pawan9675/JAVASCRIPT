/**
 * CHECK IF THREE SIDES CAN FORM A TRIANGLE
 * ==========================================
 * Problem: Given three integers `a`, `b`, and `c`, check if they can form the sides of a triangle.
 * 
 * A triangle is valid if the following conditions are satisfied:
 * 1. The sum of any two sides must be greater than the third side:
 *    - a + b > c
 *    - b + c > a
 *    - a + c > b
 * 
 * Approach:
 * - Use the above conditions to check if the given sides form a triangle.
 */

// Example Code:

let a = 7;  // Side 1
let b = 10; // Side 2
let c = 5;  // Side 3

if (a + b > c && b + c > a && a + c > b) {
    console.log("Yes, the sides can form a triangle."); // Output: Yes, the sides can form a triangle.
} else {
    console.log("No, the sides cannot form a triangle.");
}

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: a = 7, b = 10, c = 5
 * Output: Yes, the sides can form a triangle.
 * 
 * Case 2: a = 1, b = 2, c = 3
 * Output: No, the sides cannot form a triangle.
 * 
 * Case 3: a = 5, b = 5, c = 5
 * Output: Yes, the sides can form a triangle.
 * 
 * Case 4: a = 0, b = 1, c = 1
 * Output: No, the sides cannot form a triangle.
 */
