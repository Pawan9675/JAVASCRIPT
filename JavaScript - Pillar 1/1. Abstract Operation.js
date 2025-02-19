/**
 * ABSTRACT OPERATIONS IN JAVASCRIPT
 * ==================================
 * Abstract Operations are internal algorithms specified in the **ECMAScript Specification (ECMA-262)**.
 * 
 * 🔹 **What are Abstract Operations?**
 * -----------------------------------
 * - They are **not directly available** for developers to use in JavaScript.
 * - They define how JavaScript internally handles different operations.
 * - They help standardize the behavior of language constructs.
 * 
 * 🔹 **Why Do They Exist?**
 * ------------------------
 * - JavaScript needs **well-defined rules** for various actions (e.g., type conversions, comparisons).
 * - Abstract operations help explain how JavaScript works **under the hood**.
 * - They ensure **consistency** across different JavaScript engines (V8, SpiderMonkey, JavaScriptCore, etc.).
 */

/**
 * 1️⃣ EXAMPLE OF ABSTRACT OPERATION: ToNumber()
 * ----------------------------------------------
 * The `ToNumber()` operation is an abstract algorithm used internally 
 * to convert a value into a number.
 * 
 * Example Conversions:
 * - `"42"` → **42** (String to Number)
 * - `true` → **1** (Boolean to Number)
 * - `false` → **0** (Boolean to Number)
 * - `null` → **0** (Null to Number)
 * - `undefined` → **NaN** (Undefined to Number)
 */

// JavaScript automatically calls ToNumber() when using `Number()`
console.log(Number("42"));        // Output: 42
console.log(Number(true));        // Output: 1
console.log(Number(false));       // Output: 0
console.log(Number(null));        // Output: 0
console.log(Number(undefined));   // Output: NaN

console.log("---------");

/**
 * 2️⃣ EXAMPLE OF ABSTRACT OPERATION: ToBoolean()
 * -----------------------------------------------
 * The `ToBoolean()` operation determines how JavaScript converts values to `true` or `false`.
 * 
 * Values that convert to `false` (Falsy Values):
 * - `false`
 * - `0`
 * - `-0`
 * - `""` (Empty String)
 * - `null`
 * - `undefined`
 * - `NaN`
 * 
 * All other values are truthy.
 */

// JavaScript internally calls ToBoolean() when using Boolean()
console.log(Boolean(0));        // Output: false
console.log(Boolean(""));       // Output: false
console.log(Boolean(null));     // Output: false
console.log(Boolean(undefined));// Output: false
console.log(Boolean(NaN));      // Output: false
console.log(Boolean("hello"));  // Output: true
console.log(Boolean(42));       // Output: true

console.log("---------");

/**
 * 3️⃣ EXAMPLE OF ABSTRACT OPERATION: SameValue()
 * -----------------------------------------------
 * The `SameValue()` operation is used internally to check if two values are **exactly equal**.
 * - It is **stricter** than `===` (triple equals).
 * - It considers `NaN === NaN` as `true` (Unlike `===`).
 */

// Example: Comparing values using SameValue operation
console.log(Object.is(NaN, NaN));      // Output: true
console.log(Object.is(0, -0));         // Output: false
console.log(Object.is(42, "42"));      // Output: false
console.log(Object.is(true, 1));       // Output: false

console.log("---------");

/**
 * 4️⃣ EXAMPLE OF ABSTRACT OPERATION: IsCallable()
 * -----------------------------------------------
 * - `IsCallable()` is an internal operation that checks if a value is a function.
 * - JavaScript provides `typeof` to achieve a similar result.
 */

// Example: Checking if a value is callable
function greet() {
    return "Hello!";
}
console.log(typeof greet === "function"); // Output: true
console.log(typeof 42 === "function");    // Output: false

console.log("---------");

/**
 * 5️⃣ EXAMPLE OF ABSTRACT OPERATION: IsPropertyKey()
 * ---------------------------------------------------
 * - Determines if a given value can be used as an **object key**.
 * - Only **Strings** and **Symbols** are valid property keys.
 */

// Example: Property keys in objects
let obj = {};
obj["name"] = "Pawan"; // String as key
obj[Symbol("id")] = 123; // Symbol as key
console.log(obj); 

console.log("---------");

/**
 * 6️⃣ EXAMPLE OF ABSTRACT OPERATION: OrdinaryToPrimitive()
 * -------------------------------------------------------
 * - Used when JavaScript converts an object to a primitive value (string, number, boolean).
 * - It checks for `valueOf()` and `toString()` methods.
 */

// Example: Converting an object to a primitive
let user = {
    name: "Pawan",
    age: 25,
    toString() {
        return "User: Pawan";
    }
};
console.log(String(user)); // Output: "User: Pawan"

console.log("---------");

/**
 * 🔥 WHY ABSTRACT OPERATIONS MATTER
 * ----------------------------------
 * 1. **They define JavaScript’s internal behavior** (like how type conversion works).
 * 2. **They ensure consistency** in different JavaScript engines.
 * 3. **Developers cannot use them directly**, but they explain why JavaScript behaves the way it does.
 * 4. **Understanding them helps in writing better and bug-free code**.
 */
