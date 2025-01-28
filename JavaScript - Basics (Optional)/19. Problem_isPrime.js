/**
 * PRIME NUMBER CHECKER
 * ======================
 * Problem: Given a number `num`, determine whether the number is prime or not.
 * - A prime number is a number greater than 1 that has no divisors other than 1 and itself.
 * 
 * Approach:
 * 1. If the number is less than 2, return false (since numbers less than 2 are not prime).
 * 2. Check if the number is divisible by any integer from 2 to the square root of the number.
 * 3. If divisible by any number, return false.
 * 4. If no divisors are found, return true (the number is prime).
 */

// Example Code:

let num = 29; // Number to check

// Check if the number is prime
function isPrime(num) {
    // If num is less than 2, it's not prime
    if (num < 2) {
        return false;
    }

    // Check divisibility from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // num is divisible by i, so it's not prime
        }
    }

    return true; // num is prime if no divisors were found
}

// Output the result
if (isPrime(num)) {
    console.log(num + " is a prime number."); // Output: 29 is a prime number.
} else {
    console.log(num + " is not a prime number.");
}

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: num = 1
 * Output: 1 is not a prime number.
 * 
 * Case 2: num = 2
 * Output: 2 is a prime number.
 * 
 * Case 3: num = 29
 * Output: 29 is a prime number.
 * 
 * Case 4: num = 30
 * Output: 30 is not a prime number.
 */
