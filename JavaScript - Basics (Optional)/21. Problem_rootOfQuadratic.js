/**
 * QUADRATIC ROOT FINDER
 * ======================
 * Problem: Given the coefficients `a`, `b`, and `c` of a quadratic expression, 
 * determine the roots of the quadratic equation ax² + bx + c = 0.
 * 
 * Approach:
 * 1. First, calculate the discriminant (Δ) = b² - 4ac.
 * 2. If the discriminant is positive, there are two real roots.
 * 3. If the discriminant is zero, there is one real root (repeated).
 * 4. If the discriminant is negative, the roots are complex (imaginary).
 */

// Example Code:

let a = 1; // Coefficient of x²
let b = -3; // Coefficient of x
let c = 2; // Constant term

// Function to find the roots of the quadratic equation
function findQuadraticRoots(a, b, c) {
    let discriminant = b * b - 4 * a * c; // Calculate the discriminant

    if (discriminant > 0) {
        // Two real and distinct roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots are real and distinct: Root 1 = ${root1}, Root 2 = ${root2}`);
    } else if (discriminant === 0) {
        // One real root (repeated)
        let root = -b / (2 * a);
        console.log(`The roots are real and equal: Root = ${root}`);
    } else {
        // Complex roots
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        console.log(`The roots are complex: Root 1 = ${realPart} + ${imaginaryPart}i, Root 2 = ${realPart} - ${imaginaryPart}i`);
    }
}

// Output the result
findQuadraticRoots(a, b, c);

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: a = 1, b = -3, c = 2
 * Output: The roots are real and distinct: Root 1 = 2, Root 2 = 1
 * 
 * Case 2: a = 1, b = -2, c = 1
 * Output: The roots are real and equal: Root = 1
 * 
 * Case 3: a = 1, b = 2, c = 5
 * Output: The roots are complex: Root 1 = -1 + 2i, Root 2 = -1 - 2i
 */
