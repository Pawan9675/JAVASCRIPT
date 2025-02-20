/**
 * TOBOOLEAN & LOGICAL NOT (`!`) OPERATOR IN JAVASCRIPT
 * =====================================================
 * - The `ToBoolean(argument)` operation converts a value into a **Boolean**.
 * - JavaScript automatically converts values to `true` or `false` in **logical operations**.
 * - The `!` (Logical NOT) operator **inverts** the Boolean value of a given expression.
 */

/**
 * 🔹 HOW `ToBoolean()` WORKS?
 * ----------------------------
 * - `ToBoolean(argument)` is an **abstract operation** that determines the truthy or falsy nature of a value.
 * - It follows **three rules**:
 * 
 *   1️⃣ If `argument` is already a **Boolean**, return it **as is**.
 *   2️⃣ If `argument` is any of these **falsy values**, return `false`:
 *         ❌ `undefined`
 *         ❌ `null`
 *         ❌ `+0` or `-0`
 *         ❌ `NaN`
 *         ❌ `""` (Empty String)
 *   3️⃣ For all other values, return `true`.
 */

// Example: Checking different values with `Boolean()`
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(null));      // Output: false
console.log(Boolean(0));         // Output: false
console.log(Boolean(-0));        // Output: false
console.log(Boolean(NaN));       // Output: false
console.log(Boolean(""));        // Output: false

console.log(Boolean(1));         // Output: true
console.log(Boolean("Hello"));   // Output: true
console.log(Boolean([]));        // Output: true (Empty array is truthy)
console.log(Boolean({}));        // Output: true (Empty object is truthy)
console.log(Boolean(function() {})); // Output: true (Functions are truthy)

console.log("---------");

/**
 * 🔹 LOGICAL NOT (`!`) OPERATOR
 * ------------------------------
 * - The `!` (Logical NOT) operator **inverts** the truthy or falsy nature of a value.
 * - It follows this process:
 * 
 *   1️⃣ Evaluate the **expression**.
 *   2️⃣ Convert it to a Boolean using `ToBoolean()`.
 *   3️⃣ If the Boolean is `true`, return `false`.
 *   4️⃣ If the Boolean is `false`, return `true`.
 */

// Example: Using `!` operator
console.log(!10);        // Output: false (10 is truthy, so `!10` is false)
console.log(!0);         // Output: true  (0 is falsy, so `!0` is true)
console.log(!"Hello");   // Output: false (Non-empty string is truthy)
console.log(!"");        // Output: true  (Empty string is falsy)
console.log(!NaN);       // Output: true  (NaN is falsy)
console.log(!undefined); // Output: true  (undefined is falsy)
console.log(!null);      // Output: true  (null is falsy)

console.log("---------");

/**
 * 🔹 DOUBLE NOT (`!!`) OPERATOR
 * ------------------------------
 * - The `!!` operator is used to **explicitly convert a value into a Boolean**.
 * - It works by applying `!` twice:
 *      - First `!` inverts the value.
 *      - Second `!` inverts it back to its original truthy/falsy nature.
 * - This is a **commonly used technique** for Boolean conversion.
 */

// Example: Using `!!` to explicitly convert values to Boolean
console.log(!!10);       // Output: true
console.log(!!0);        // Output: false
console.log(!!"Hello");  // Output: true
console.log(!!"");       // Output: false
console.log(!!NaN);      // Output: false
console.log(!!undefined);// Output: false
console.log(!!null);     // Output: false

console.log("---------");

/**
 * 🔹 USING `!` IN CONDITIONAL STATEMENTS
 * --------------------------------------
 * - The `if` statement automatically converts values using `ToBoolean()`.
 * - This means falsy values (`undefined`, `null`, `0`, `NaN`, `""`) will **not execute the block**.
 */

let y = undefined;

if (y) {
    console.log(y, ": It is a truthy value");
} else {
    console.log(y, ": It is a falsy value"); // Output: undefined : It is a falsy value
}

console.log("---------");

/**
 * 🔹 OBJECTS & `ToBoolean()`
 * ---------------------------
 * - **All objects**, even **empty ones (`{}` and `[]`)**, are **always truthy**.
 */

let obj = {}; // Empty object
let arr = []; // Empty array

if (obj) {
    console.log("obj is truthy"); // Output: obj is truthy
}

if (arr) {
    console.log("arr is truthy"); // Output: arr is truthy
}

console.log("---------");

/**
 * 🔹 SPECIAL CASE: `document.all`
 * --------------------------------
 * - `document.all` is a **special object** in JavaScript.
 * - It behaves **falsy** in Boolean contexts **(only case of falsy object)**.
 */

console.log(Boolean(document.all)); // Output: false (Special case)
console.log(!document.all);         // Output: true  (Special case)

console.log("---------");

/**
 * 🔥 SUMMARY: `ToBoolean()` & Logical NOT (`!`)
 * ---------------------------------------------
 * ✅ `ToBoolean()` converts values into **true** or **false**.
 * ✅ **Falsy values**: `undefined`, `null`, `0`, `-0`, `NaN`, `""` (empty string).
 * ✅ **Truthy values**: Everything else (numbers, strings, objects, arrays, functions).
 * ✅ **Logical NOT (`!`)** inverts the truthy/falsy nature of a value.
 * ✅ **Double NOT (`!!`)** is used to explicitly convert a value to Boolean.
 * ✅ **All objects (`{}` & `[]`) are truthy**, except `document.all` (special case).
 */

console.log("Done! ✅");
