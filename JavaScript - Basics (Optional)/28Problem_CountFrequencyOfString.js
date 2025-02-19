/**
 * CHARACTER OCCURRENCE COUNTER
 * =============================
 * Problem: Given a string, count the number of times each unique character appears.
 * - The function should be **case-sensitive** (i.e., 'A' and 'a' are different).
 * - Spaces, numbers, and special characters should also be counted.
 * 
 * Approach:
 * 1. Initialize an empty object `{}` (or use `new Map()`).
 * 2. Loop through each character in the string.
 * 3. If the character exists in the object, increment the count.
 * 4. Otherwise, initialize it with count `1`.
 * 5. Return or print the final counts.
 */

// Function to count character occurrences
function countCharacterOccurrences(str) {
    let charCount = {}; // Using an object as a hashmap

    for (let char of str) {
        // Increment count if exists, otherwise set to 1
        charCount[char] = (charCount[char] || 0) + 1;
    }

    return charCount;
}

// Example Usage
let inputString = "hello world!";
let result = countCharacterOccurrences(inputString);
console.log(result); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: str = "hello world!"
 * Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1, '!': 1 }
 * 
 * Case 2: str = "JavaScript"
 * Output: { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
 * 
 * Case 3: str = "112233"
 * Output: { '1': 2, '2': 2, '3': 2 }
 * 
 * Case 4: str = "!!!"
 * Output: { '!': 3 }
 */
