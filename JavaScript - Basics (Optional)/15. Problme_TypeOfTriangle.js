/**
 * TRIANGLE TYPE CHECKER
 * ========================
 * Problem: Given the side lengths of a triangle as three integers `a`, `b`, and `c`, 
 * determine whether the triangle is:
 * - Equilateral: All three sides are equal.
 * - Isosceles: Any two sides are equal.
 * - Scalene: All sides are of different lengths.
 * 
 * Approach:
 * 1. First, ensure the given sides can form a valid triangle using the Triangle Inequality Theorem.
 * 2. Check the conditions for each type of triangle.
 */

// Example Code:

let a = 5; // Side 1
let b = 5; // Side 2
let c = 5; // Side 3

// Check if the sides form a valid triangle
if (a + b > c && b + c > a && a + c > b) {
    // Determine the type of triangle
    if (a === b && b === c) {
        console.log("The triangle is Equilateral."); // Output: The triangle is Equilateral.
    } else if (a === b || b === c || a === c) {
        console.log("The triangle is Isosceles."); // Output for example: The triangle is Isosceles.
    } else {
        console.log("The triangle is Scalene."); // Output for example: The triangle is Scalene.
    }
} else {
    console.log("The given sides do not form a valid triangle.");
}

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: a = 5, b = 5, c = 5
 * Output: The triangle is Equilateral.
 * 
 * Case 2: a = 5, b = 5, c = 8
 * Output: The triangle is Isosceles.
 * 
 * Case 3: a = 7, b = 9, c = 11
 * Output: The triangle is Scalene.
 * 
 * Case 4: a = 1, b = 2, c = 3
 * Output: The given sides do not form a valid triangle.
 */
