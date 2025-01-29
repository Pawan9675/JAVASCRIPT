/**
 * PALINDROME NUMBER CHECKER
 * =========================
 * Problem: Given a number `num`, determine whether the number is a palindrome.
 * - A palindrome is a number that reads the same forward and backward.
 * - Example:
 *   - 121 → Palindrome ✅
 *   - 123 → Not a Palindrome ❌
 *   - 1221 → Palindrome ✅
 * 
 * DIFFERENT APPROACHES:
 * ---------------------
 * 1. **String Reversal Approach**: Convert number to string, reverse, and compare.
 * 2. **Two-Pointer Approach**: Compare digits from start and end without reversing.
 * 3. **Mathematical Approach**: Reverse the number mathematically and compare.
 */

// 1️⃣ String Reversal Approach (Easy & Readable)
function isPalindromeString(num) {
    let str = num.toString();            // Convert number to string
    let reversedStr = str.split("").reverse().join(""); // Reverse the string
    return str === reversedStr;          // Compare original and reversed
}

// 2️⃣ Two-Pointer Approach (Optimized, No Extra Space)
function isPalindromeTwoPointer(num) {
    let str = num.toString();
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If mismatch found, not a palindrome
        }
        left++;
        right--;
    }
    return true; // If no mismatch, it's a palindrome
}

// 3️⃣ Mathematical Approach (No String Conversion, Best for Space Optimization)
function isPalindromeMath(num) {
    if (num < 0) return false; // Negative numbers are not palindromes

    let original = num, reversed = 0;

    while (num > 0) {
        let digit = num % 10;       // Extract last digit
        reversed = reversed * 10 + digit; // Append to reversed number
        num = Math.floor(num / 10); // Remove last digit
    }

    return original === reversed; // Compare original and reversed number
}

// Example Usage
let num = 1221;

console.log("Using String Reversal:", isPalindromeString(num)); // Output: true
console.log("Using Two-Pointer:", isPalindromeTwoPointer(num)); // Output: true
console.log("Using Mathematical Approach:", isPalindromeMath(num)); // Output: true

/**
 * OUTPUT EXAMPLES
 * -----------------
 * Case 1: num = 121
 * - String Reversal: true
 * - Two-Pointer: true
 * - Mathematical: true
 * 
 * Case 2: num = 123
 * - String Reversal: false
 * - Two-Pointer: false
 * - Mathematical: false
 * 
 * Case 3: num = 1221
 * - String Reversal: true
 * - Two-Pointer: true
 * - Mathematical: true
 * 
 * Case 4: num = -121
 * - String Reversal: false
 * - Two-Pointer: false
 * - Mathematical: false
 */
