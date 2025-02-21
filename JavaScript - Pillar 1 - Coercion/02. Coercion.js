/**
 * COERCION (IMPLICIT TYPE CONVERSION)
 * ====================================
 * Type coercion refers to **JavaScript’s automatic conversion** of values 
 * from one data type to another when an operation requires it.
 * 
 * 🔹 **Explicit Type Conversion (Type Casting)**
 *    - The developer manually converts a value using functions like `Number()`, `String()`, `Boolean()`, etc.
 * 
 * 🔹 **Implicit Type Conversion (Coercion)**
 *    - JavaScript **automatically** converts values when performing operations.
 *    - This happens in mathematical expressions, string concatenation, and logical operations.
 */

/**
 * 1️⃣ EXAMPLES OF IMPLICIT TYPE COERCION
 * --------------------------------------
 * JavaScript automatically converts data types based on the operation.
 */

// Example 1: Number + String → String (Concatenation)
console.log(1 + "1");  // Output: "11" (Number is coerced into a string)

// Example 2: String - Number → Number (Subtraction converts to Number)
console.log("10" - 5); // Output: 5 ("10" is coerced into a number)

// Example 3: Boolean + Number → Number
console.log(true + 1);  // Output: 2 (true → 1, false → 0)
console.log(false + 1); // Output: 1 (false → 0)

// Example 4: Null + Number → Number
console.log(null + 5);  // Output: 5 (null → 0)

// Example 5: Undefined + Number → NaN
console.log(undefined + 5); // Output: NaN (undefined → NaN)

console.log("---------");

/**
 * 2️⃣ EXPLICIT TYPE CONVERSION (TYPECASTING)
 * -------------------------------------------
 * Type coercion can also be done **explicitly** using built-in functions.
 */

// Converting to Number
console.log(Number("42"));     // Output: 42
console.log(Number("42abc"));  // Output: NaN
console.log(Number(true));     // Output: 1
console.log(Number(false));    // Output: 0
console.log(Number(null));     // Output: 0
console.log(Number(undefined));// Output: NaN

// Converting to String
console.log(String(42));       // Output: "42"
console.log(String(true));     // Output: "true"
console.log(String(null));     // Output: "null"

// Converting to Boolean
console.log(Boolean(1));       // Output: true
console.log(Boolean(0));       // Output: false
console.log(Boolean(""));      // Output: false (Empty string → false)
console.log(Boolean("hello")); // Output: true (Non-empty string → true)

console.log("---------");


/**
 * 3️⃣ COMPARISON COERCION (== VS ===)
 * -----------------------------------
 * - `==` (Loose Equality) allows **type coercion** before comparison.
 * - `===` (Strict Equality) checks both **value and type** without coercion.
 */

// Loose Equality (`==`) - Allows Coercion
console.log(5 == "5");    // Output: true (String coerced to Number)
console.log(0 == false);  // Output: true (false → 0)
console.log(null == undefined); // Output: true (Both treated as "empty values")

// Strict Equality (`===`) - No Coercion
console.log(5 === "5");   // Output: false (Different types)
console.log(0 === false); // Output: false
console.log(null === undefined); // Output: false

console.log("---------");


/**
 * 4️⃣ COERCION IN `if` STATEMENTS & LOGICAL OPERATORS
 * ---------------------------------------------------
 * - The `if` condition expects a boolean, so values get converted implicitly.
 */

if ("Hello") console.log("Truthy!"); // Output: Truthy!
if (0) console.log("Falsy!"); // (Does not run)

console.log("---------");

// Logical `OR` (`||`) returns the first truthy value
console.log("" || "default");  // Output: "default" (Empty string is falsy)
console.log(0 || 100);         // Output: 100 (0 is falsy)
console.log("Hi" || "Bye");    // Output: "Hi" (First truthy value is returned)

// Logical `AND` (`&&`) returns the first falsy value or the last truthy value
console.log("Hello" && 100);  // Output: 100 (Both truthy, returns last)
console.log("" && "World");   // Output: "" (First falsy value)

console.log("---------");

/**
 * 5️⃣ AVOIDING UNEXPECTED COERCION
 * --------------------------------
 * - Always use `===` for strict equality checks.
 * - Convert values explicitly using `Number()`, `String()`, `Boolean()`.
 * - Be aware of **falsy values** when using logical operators.
 */

// Example: Preventing unintended coercion
let input = "123";
if (input === 123) {
    console.log("Matched!"); // This will not run (since input is a string)
} else {
    console.log("Use explicit conversion!"); // Output: Use explicit conversion!
}

/**
 * 6️⃣ UNEXPECTED TYPE COERCION ISSUES
 * -----------------------------------
 * - Sometimes, coercion can lead to **unexpected results**.
 */

// Example 1: Adding an array to a number
console.log([] + 1); // Output: "1" (Empty array → "" → String)

// Example 2: Weird Boolean conversions
console.log([] == false);  // Output: true (Empty array → "" → false)
console.log("0" == false); // Output: true ("0" coerced to Number 0)

// Example 3: Object to String Conversion
console.log({} + []);  // Output: "[object Object]"
console.log([] + {});  // Output: "[object Object]"

// Example 4: `typeof` weird behavior
console.log(typeof null); // Output: "object" (Legacy bug in JavaScript)

console.log("---------");


console.log("---------");

/**
 * 🔥 WHY IS TYPE COERCION IMPORTANT?
 * -----------------------------------
 * - JavaScript is a dynamically typed language, so **type coercion is unavoidable**.
 * - Understanding it helps prevent **unexpected bugs**.
 * - Always use **strict equality (===)** when checking values.
 */

/**
 * ✅ BEST PRACTICES TO AVOID COERCION BUGS:
 * ----------------------------------------
 * 1. Always use `===` instead of `==` for comparisons.
 * 2. Convert types explicitly using `Number()`, `String()`, or `Boolean()`.
 * 3. Be careful with **falsy values** (`0`, `""`, `null`, `undefined`, `false`, `NaN`).
 * 4. Use `typeof` to check types before operations.
 */



/**
 * SUMMARY OF COERCION:
 * ---------------------
 * 1. **Implicit Type Conversion (Coercion)**:
 *    - Happens automatically in JavaScript.
 *    - `"10" + 5 → "105"` (String concatenation)
 *    - `"10" - 5 → 5` (String converted to number)
 *    - `true == 1 → true`
 *    - `null == undefined → true`
 * 
 * 2. **Explicit Type Conversion**:
 *    - Done manually using `Number()`, `String()`, `Boolean()`.
 *    - Example: `Number("42") → 42`
 * 
 * 3. **Avoid Common Pitfalls**:
 *    - Use `===` for strict comparison to prevent unintended coercion.
 *    - Be cautious when using logical operators (`||`, `&&`) with falsy values.
 */
