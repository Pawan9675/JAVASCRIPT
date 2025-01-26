/**
 * CHECK IF A NUMBER IS EVEN OR ODD
 * =================================
 * Problem: Given a number `x`, check whether the number is even or odd.
 * 
 * Concept:
 * - A number is **even** if it is divisible by 2 without leaving a remainder (x % 2 === 0).
 * - A number is **odd** if it leaves a remainder when divided by 2 (x % 2 !== 0).
 * 
 * Approach:
 * - Use the modulus operator `%` to check the remainder when dividing the number by 2.
 */

// Example Code:

let num = 11; // Replace with any number you want to check

if (num % 2 === 0) {
    console.log(`${num} is an even number.`);
} else {
    console.log(`${num} is an odd number.`);
}

/*
console.log(num % 2 === 0 ? `${num} is even.` : `${num} is odd.`);
*/

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: x = 11
 * Output: 11 is an odd number.
 * 
 * Case 2: x = 4
 * Output: 4 is an even number.
 * 
 * Case 3: x = 0
 * Output: 0 is an even number.
 */
