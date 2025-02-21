// ******************************************
// 🔹 EXPLICIT TYPE CONVERSION (TYPE CASTING)
// ******************************************

/**
 * 📌 WHAT IS EXPLICIT TYPE CONVERSION?
 * -------------------------------------
 * - **Manually converting** one data type to another.
 * - **Unlike implicit coercion**, it does **not** happen automatically.
 * - Uses built-in methods like:
 *    - `String()`
 *    - `Number()`
 *    - `Boolean()`
 *    - `parseInt()`, `parseFloat()`
 *    - `JSON.stringify()`
 */

// **********************************
// 🔹 STRING CONVERSION
// **********************************
console.log(String(123));        // ✅ "123" (Number → String)
console.log(String(true));       // ✅ "true" (Boolean → String)
console.log(String(null));       // ✅ "null"
console.log(String(undefined));  // ✅ "undefined"
console.log(String([1, 2, 3]));  // ✅ "1,2,3" (Array → String)
console.log(String({ a: 1 }));   // ✅ "[object Object]" (Object → String)

// Using `toString()`
console.log((123).toString());   // ✅ "123"

// **********************************
// 🔹 NUMBER CONVERSION
// **********************************
console.log(Number("123"));       // ✅ 123 (String → Number)
console.log(Number("123abc"));    // ❌ NaN (Invalid conversion)
console.log(Number(""));          // ✅ 0 (Empty string → 0)
console.log(Number(true));        // ✅ 1
console.log(Number(false));       // ✅ 0
console.log(Number(null));        // ✅ 0
console.log(Number(undefined));   // ❌ NaN
console.log(Number([]));          // ✅ 0
console.log(Number([99]));        // ✅ 99 (Single value array → Number)
console.log(Number([1, 2, 3]));   // ❌ NaN (Multiple values)

// Using `parseInt()` and `parseFloat()`
console.log(parseInt("42px"));    // ✅ 42 (Extracts number)
console.log(parseFloat("3.14cm")); // ✅ 3.14

// **********************************
// 🔹 BOOLEAN CONVERSION
// **********************************
console.log(Boolean(1));          // ✅ true
console.log(Boolean(0));          // ✅ false
console.log(Boolean("hello"));    // ✅ true (Non-empty string)
console.log(Boolean(""));         // ✅ false (Empty string)
console.log(Boolean([]));         // ✅ true (Empty array is truthy)
console.log(Boolean({}));         // ✅ true (Empty object is truthy)
console.log(Boolean(null));       // ✅ false
console.log(Boolean(undefined));  // ✅ false

// **********************************
// 🔹 JSON CONVERSION (Object ↔ String)
// **********************************
let obj = { name: "Alice", age: 25 };
let jsonStr = JSON.stringify(obj); // ✅ Converts object to JSON string
console.log(jsonStr); // '{"name":"Alice","age":25}'

let parsedObj = JSON.parse(jsonStr); // ✅ Converts JSON string back to object
console.log(parsedObj); // { name: 'Alice', age: 25 }

// **********************************