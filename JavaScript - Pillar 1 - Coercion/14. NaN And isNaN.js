// ******************************************
// 🔹 NaN (Not a Number) in JavaScript
// ******************************************

/**
 * 📌 WHAT IS NaN?
 * -------------------------------------
 * - **NaN** stands for **"Not a Number."**
 * - It **indicates an invalid mathematical operation**.
 * - **Special properties of NaN:**
 *    - NaN is **not equal to itself** (`NaN !== NaN`).
 *    - Any arithmetic operation with NaN **results in NaN**.
 */

console.log(Number("123"));   // ✅ 123 (Valid number)
console.log(Number("abcd"));  // ❌ NaN (Invalid number)
console.log(Number(0xa));     // ✅ 10  (Hexadecimal number converted to decimal)

// **********************************
// 🔹 isNaN() Function
// **********************************

/**
 * 📌 isNaN(value)
 * -------------------------------------
 * - **Converts the input to a number** (Implicit conversion).
 * - **Checks if the result is NaN.**
 * - Returns `true` if the input is NaN, otherwise `false`.
 */

console.log(isNaN(NaN));         // ✅ true
console.log(isNaN("Pawan"));     // ✅ true (Converted to NaN first)
console.log(isNaN(undefined));   // ✅ true (Converted to NaN)
console.log(isNaN(null));        // ❌ false (Converted to 0)
console.log(isNaN("123"));       // ❌ false (Converted to 123)
console.log(isNaN(123));         // ❌ false (It's already a number)
console.log(isNaN("123abc"));    // ✅ true (Converted to NaN)

/**
 * 🔍 How isNaN() works?
 * -------------------------------------
 * - It **first converts the input into a number**.
 * - Then, it checks **if the result is NaN**.
 */

// **********************************
// 🔹 Number.isNaN() Function
// **********************************

/**
 * 📌 Number.isNaN(value)
 * -------------------------------------
 * - **Stricter version of isNaN().**
 * - **Does NOT convert types** (No implicit conversion).
 * - **Only returns `true` for actual NaN values.**
 */

console.log(Number.isNaN(NaN));         // ✅ true
console.log(Number.isNaN("Pawan"));     // ❌ false (It's a string)
console.log(Number.isNaN(undefined));   // ❌ false (It's undefined)
console.log(Number.isNaN(null));        // ❌ false (It's null)
console.log(Number.isNaN("123"));       // ❌ false (It's a string)
console.log(Number.isNaN(123));         // ❌ false (It's a number)
console.log(Number.isNaN("123abc"));    // ❌ false (It's a string)

/**
 * 🔍 How Number.isNaN() works?
 * -------------------------------------
 * - It **does NOT convert the input**.
 * - It **only returns true if the value is exactly NaN**.
 */

// **********************************
// 🔹 Key Differences: isNaN() vs. Number.isNaN()
// **********************************

/**
 * 🔥 isNaN() vs. Number.isNaN()
 * -------------------------------------
 * ✅ `isNaN(value)` **converts the value** before checking.
 * ✅ `Number.isNaN(value)` **does NOT convert the value**.
 * ✅ Use `Number.isNaN()` when you **only want to check for NaN without type coercion**.
 */

console.log(isNaN("Pawan"));         // ✅ true  (Converted to NaN)
console.log(Number.isNaN("Pawan"));  // ❌ false (It's a string)

// **********************************
console.log(`✅ Done! Hope this helps!`);
