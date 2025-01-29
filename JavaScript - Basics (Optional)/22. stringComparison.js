/**
 * STRING COMPARISON IN JAVASCRIPT
 * ================================
 * In JavaScript, strings can be represented in two main ways:
 * 1. String literals
 * 2. String objects (created using the String constructor)
 * 
 * While both store text, there are key differences when comparing them.
 */

/**
 * 1. STRING LITERALS vs STRING OBJECTS
 * -------------------------------------
 * - A string literal is a simple text string enclosed in quotes: `"abc"`.
 * - A String object is created using the `new String()` constructor: `new String("abc")`.
 * - They behave differently when compared, even though they may store the same value.
 * 
 * Example Code:
 */

// String literals
let s = "abc";      // String literal
let t = "abc";      // String literal

// String objects
let str1 = String("abc");       // String object created using String constructor
let str2 = new String("abc");  // String object created using new keyword

// Check the type of each
console.log("Type of s:", typeof s);        // Output: string
console.log("Type of str1:", typeof str1);  // Output: string
console.log("Type of str2:", typeof str2);  // Output: object

// Comparing values with `==` (loose equality)
console.log("\nUsing loose equality (==):");
console.log(s == t);           // Output: true  (both are string literals with the same value)
console.log(str1 == str2);     // Output: false (str1 is a string, str2 is a String object)

console.log(str1 == s);        // Output: true  (value comparison: "abc" == "abc")
console.log(str2 == s);        // Output: false (str2 is a String object, s is a string literal)

console.log("abc" == new String("abc")); // Output: true (value comparison: "abc" == "abc")

console.log("----------------");

// Comparing values with `===` (strict equality)
console.log("\nUsing strict equality (===):");
console.log(s === t);          // Output: true  (both are string literals with the same value)
console.log(str1 === str2);    // Output: false (str1 is a string, str2 is a String object)

console.log(str1 === s);       // Output: true  (both have the same string value)
console.log(str2 === s);       // Output: false (str2 is a String object, s is a string literal)

console.log("abc" === new String("abc")); // Output: false (strict comparison, different types: string vs String object)

console.log("----------------");

// Example of comparing string values inside an object
let person = {
    name: "John"
};

let personName = new String("John");

console.log(person.name == personName);  // Output: true (value comparison: "John" == "John")
console.log(person.name === personName); // Output: false (strict comparison, string vs String object)

console.log("----------------");

/**
 * 2. WHY THE DIFFERENCE?
 * -----------------------
 * - The `==` operator compares values and coerces types if necessary. 
 *   When comparing a primitive string with a String object, JavaScript converts the object to its string value.
 * - The `===` operator compares both the value and the type. So, a string literal and a String object will not be equal, even if their values are the same.
 */

/**
 * 3. ADDITIONAL NOTES:
 * ---------------------
 * - JavaScript automatically converts a `String` object to a primitive string value when necessary in loose equality (`==`), 
 *   but this does not happen in strict equality (`===`).
 * - String objects have some additional methods that string literals don't have, which is why they are objects.
 */

/**
 * SUMMARY OF STRING COMPARISONS:
 * -------------------------------
 * 1. **String Literals (`"abc"`)**: A basic string value.
 * 2. **String Objects (`new String("abc")`)**: A wrapper object that holds a string value.
 * 3. **Loose Equality (`==`)**: Compares values, performing type coercion when needed.
 *    - `"abc" == new String("abc")` returns `true`.
 * 4. **Strict Equality (`===`)**: Compares both value and type, no type coercion.
 *    - `"abc" === new String("abc")` returns `false`.
 */

