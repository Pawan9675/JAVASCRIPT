// ******************************************
// 🔹 BOXING IN JAVASCRIPT
// ******************************************

/**
 * 📌 What is Boxing?
 * -------------------------------------
 * - **Boxing** is the process of converting a **primitive datatype** into a **non-primitive (object)**.
 * - When we access a method (like `.toString()`) on a primitive, **JavaScript temporarily converts** it into an object.
 * - This temporary object allows access to properties and methods.
 */

// Example:
console.log((1).toString());  // ✅ "1" (Number is temporarily converted into a Number object)

// ******************************************
// 🔹 WHY DOES `(1).toString()` WORK BUT `1.toString()` DOES NOT?
// ******************************************

/**
 * 🔍 Why `1.toString()` gives an error?
 * -------------------------------------
 * - JavaScript **thinks the dot (.) is a decimal point**, not a method call.
 * - So `1.toString()` is interpreted as `1.` (which is invalid syntax).
 * - Wrapping the number in parentheses `(1).toString()` fixes this.
 */

// ❌ This will give an error:
// console.log(1.toString()); 

// ✅ Correct way:
console.log((1).toString());  // ✅ "1"

// ******************************************
// 🔹 HOW BOXING WORKS INTERNALLY?
// ******************************************

/**
 * 📌 How JavaScript does Boxing?
 * -------------------------------------
 * 1️⃣ When calling `(1).toString()`, JavaScript **temporarily converts** `1` into a `Number` object.
 * 2️⃣ Calls the `.toString()` method on the **temporary** Number object.
 * 3️⃣ Returns the result as a **primitive string**.
 * 4️⃣ The temporary object is then discarded.
 */

let num = 10;       
console.log(num.toString());  // ✅ "10"

// ******************************************
// 🔹 BOXING WITH DIFFERENT PRIMITIVES
// ******************************************

/**
 * 📌 Other primitive values that get boxed:
 * -------------------------------------
 * - **Number** → `new Number(value)`
 * - **String** → `new String(value)`
 * - **Boolean** → `new Boolean(value)`
 */

console.log(("hello").toUpperCase());  // ✅ "HELLO" (String temporarily converted to object)
console.log((true).toString());        // ✅ "true" (Boolean temporarily converted to object)

// ******************************************
console.log(`✅ Done! Hope this helps!`);
