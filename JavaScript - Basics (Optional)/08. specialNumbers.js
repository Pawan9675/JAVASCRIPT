/**
 * SPECIAL NUMBERS IN JAVASCRIPT
 * =============================
 * JavaScript has some special numeric values that are unique and have specific behaviors:
 * - `+0`: Positive zero
 * - `-0`: Negative zero
 * - `NaN`: Not a Number
 * - `Infinity`: Positive infinity
 * - `-Infinity`: Negative infinity
 */

/** 
 * 1. Positive Zero (`+0`)
 * ------------------------
 * - `+0` is the standard zero value.
 * - It's used when the value is exactly zero.
 * 
 * Example:
 */
console.log(+0); // Output: 0 (Represents the positive zero)

/** 
 * 2. Negative Zero (`-0`)
 * ------------------------
 * - `-0` is a special value that represents negative zero.
 * - In most cases, `+0` and `-0` behave the same in comparisons and arithmetic.
 * - The only notable difference is that `-0` will show a difference when using methods like `1 / -0`.
 * 
 * Example:
 */
console.log(-0); // Output: 0 (Representing negative zero)

/** 
 * 3. NaN (Not a Number)
 * ----------------------
 * - `NaN` is a special value representing an invalid number or an operation that doesn't return a valid number.
 * - `NaN` is the **only value in JavaScript** that is not equal to itself.
 * - If there is a situation where you're bound to return a number, but there is no possible value to return, then we use NaN.
 * Example:
 */
console.log(undefined / null);  // Output: NaN (Invalid operation results in Not a Number)
console.log(NaN === NaN);       // Output: false (NaN is not equal to itself)

/** 
 * 4. Infinity
 * -------------
 * - `Infinity` is a special numeric value representing an infinitely large number.
 * - It results from mathematical operations like dividing a positive number by zero.
 * 
 * Example:
 */
console.log(Infinity);  // Output: Infinity (Represents a number larger than any finite number)
console.log(1 / 0);     // Output: Infinity (Dividing by zero returns Infinity)

/** 
 * 5. -Infinity
 * --------------
 * - `-Infinity` is the negative counterpart to `Infinity`.
 * - It results from operations like dividing a negative number by zero.
 * 
 * Example:
 */
console.log(-Infinity);  // Output: -Infinity (Represents a number smaller than any finite number)
console.log(-1 / 0);     // Output: -Infinity (Dividing a negative number by zero returns -Infinity)

/**
 * SUMMARY OF SPECIAL NUMBERS
 * ---------------------------
 * - `+0` (Positive zero): Standard zero value.
 * - `-0` (Negative zero): Negative zero value, behaves similarly to `+0` but has unique properties.
 * - `NaN`: Represents an invalid number or operation that doesn't return a valid number.
 * - `Infinity`: Represents a number larger than any finite number (result of dividing by zero).
 * - `-Infinity`: Represents a number smaller than any finite number (result of dividing a negative number by zero).
 */
