/**
 * `typeof` OPERATOR IN JAVASCRIPT
 * =================================
 * The `typeof` operator is used to determine the type of a variable or value.
 * It returns a string describing the type of the operand.
 * 
 * Syntax:
 *   typeof operand
 * 
 * 
 * Common use cases:
 * - To check the type of a variable or value.
 * - To identify primitive and non-primitive data types.
 * 
 * RETURNS: A string describing the type of the operand.
 * 
 * Example:
 */

// Examples for Primitive Types
console.log(typeof "Hello World");  // Output: "string"
console.log(typeof 42);             // Output: "number"
console.log(typeof true);           // Output: "boolean"
console.log(typeof undefined);      // Output: "undefined"

// Examples for Non-Primitive Types
console.log(typeof {});             // Output: "object" (Plain object)
console.log(typeof []);             // Output: "object" (Arrays are objects)
console.log(typeof (() => {}));     // Output: "function" (Functions are a special type of object)

// Example for BigInt and Symbol
console.log(typeof 123n);           // Output: "bigint" (BigInt for large integers)
console.log(typeof Symbol("id"));   // Output: "symbol" (Symbol for unique identifiers)

/**
 * SPECIAL CASES
 * ---------------
 * 1. `null`:
 *    - The `typeof` operator returns `"object"` for `null`.
 *    - This is a **historical mistake** in JavaScript.
 *    - `null` is **not** an object; it is a primitive value that represents the intentional absence of any object value.
 */
console.log(typeof null);        // Output: "object" (Historical mistake in JavaScript) (Special case)

/**
 * 2. Arrays:
 *    - Arrays in JavaScript are a type of object.
 *    - `typeof` returns `"object"` for arrays.
 *    - To check if a value is an array, use `Array.isArray()`.
 */
let arr = [1, 2, 3];
console.log(typeof arr);         // Output: "object" (Arrays are technically objects)
console.log(Array.isArray(arr)); // Output: true (Checks if the value is an array)

/**
 * 3. Functions:
 *    - Functions in JavaScript are a special type of object.
 *    - The `typeof` operator returns `"function"` for functions.
 */
function greet() {
    console.log("Hello!");
}
console.log(typeof greet);       // Output: "function" (Special case for functions)

/**
 * 4. Symbols:
 *    - `typeof` returns `"symbol"` for values of the `symbol` data type.
 *    - Symbols are used to create unique and immutable identifiers.
 */
let sym = Symbol("id");
console.log(typeof sym);         // Output: "symbol" (Represents a unique identifier)

/**
 * 5. BigInt:
 *    - `typeof` returns `"bigint"` for BigInt values.
 *    - BigInt is a special numeric type for arbitrarily large integers.
 */
let bigIntValue = 123n;
console.log(typeof bigIntValue); // Output: "bigint" (Represents a BigInt)

/**
 * 6. NaN (Not a Number):
 *    - `NaN` stands for "Not a Number" and is returned when a mathematical operation fails.
 *    - It is of type `"number"`.
 */
console.log(typeof NaN);          // Output: "number" (NaN is still considered a number)

/**
 * TYPEOF OPERATOR: ALL POSSIBLE RETURNS
 * -------------------------------------
 * The `typeof` operator can return one of the following strings:
 * 1. `"undefined"`: For variables that are declared but not initialized.
 * 2. `"string"`: For string values.
 * 3. `"number"`: For numeric values (both integers and floats).
 * 4. `"boolean"`: For boolean values (`true` or `false`).
 * 5. `"object"`: For `null`, objects, and arrays.
 * 6. `"function"`: For functions.
 * 7. `"symbol"`: For symbol values.
 * 8. `"bigint"`: For BigInt values.

 * Practical Examples:
 */
console.log(typeof undefined);     // Output: "undefined"
console.log(typeof "Hello World"); // Output: "string"
console.log(typeof 42);            // Output: "number"
console.log(typeof true);          // Output: "boolean"
console.log(typeof null);          // Output: "object" (Special case)
console.log(typeof {});            // Output: "object" (Plain object)
console.log(typeof []);            // Output: "object" (Array is also an object)
console.log(typeof (() => {}));    // Output: "function" (Arrow function)
console.log(typeof Symbol("id"));  // Output: "symbol"
console.log(typeof 123n);          // Output: "bigint"

/**
 * PRACTICAL EXAMPLES
 * -------------------
 * Using `typeof` to check the types of various values.
 */
let exampleUndefined;
console.log(typeof exampleUndefined); // Output: "undefined" (Variable is declared but not initialized)

console.log(typeof "");                // Output: "string" (Empty string)
console.log(typeof 0);                 // Output: "number" (Zero is a number)
console.log(typeof true);              // Output: "boolean" (Boolean type)
console.log(typeof { name: "Pawan" }); // Output: "object" (Plain object)

/**
 * DIFFERENTIATING OBJECTS AND ARRAYS
 * -----------------------------------
 * Since `typeof` returns `"object"` for both objects and arrays, 
 * use `Array.isArray()` to differentiate between them.
 */
let obj = { name: "Pawan" };
let arr2 = [1, 2, 3];
console.log(typeof obj);              // Output: "object" (Plain object)
console.log(typeof arr2);             // Output: "object" (Arrays are objects)
console.log(Array.isArray(obj));      // Output: false (Not an array)
console.log(Array.isArray(arr2));     // Output: true (It is an array)

/**
 * TYPEOF AND FUNCTIONS
 * ---------------------
 * Functions are a special type of object in JavaScript.
 * `typeof` returns `"function"` for functions.
 */
function sum(a, b) {
    return a + b;
}
console.log(typeof sum);             // Output: "function" (A function type)

/**
 * TYPEOF AND NULL
 * ----------------
 * - `typeof null` returns `"object"`. This is a historical bug in JavaScript.
 * - To check explicitly for `null`, use a strict comparison: `value === null`.
 */
let value = null;
console.log(typeof value);           // Output: "object" (Historical mistake)
console.log(value === null);         // Output: true (Correct way to check for null)

/**
 * SUMMARY
 * --------
 * - The `typeof` operator is used to determine the type of a value.
 * - It works on primitive types, objects, arrays, and functions.
 * - Special Cases:
 *   - `typeof null` returns `"object"` (historical mistake).
 *   - `typeof []` returns `"object"`, but `Array.isArray()` is used to check for arrays.
 *   - `typeof` returns `"function"` for functions.
 */
