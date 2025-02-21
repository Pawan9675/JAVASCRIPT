// **********************************
// 🔹 COERCION WITH TEMPLATE STRINGS
// **********************************

/**
 * 📌 COERCION (TYPE CASTING)
 * --------------------------
 * - Also called **Type Conversion**.
 * - **Explicit Coercion**: When we manually convert data types (e.g., `Number("123")`).
 * - **Implicit Coercion** (Coercion): When JavaScript **automatically converts** data types.
 */

// ✅ EXAMPLES OF COERCION:
let obj = { x: 10, y: 20 };
let num = 10;

// ✅ STRING COERCION:
console.log("My age is " + 34);   // ✅ "My age is 34" (number → string)
console.log("My age is ", 34);    // ✅ "My age is ", 34 (no coercion, just prints separately)
console.log(`My age is ${num}`);  // ✅ "My age is 10" (Template String → Converts `num` to string)

/**
 * 📌 TEMPLATE STRINGS (` `)
 * -------------------------
 * - When using **backticks (` `)**, we are creating a **Template String**.
 * - Inside a template string, `${variable}` is **automatically converted** into a string.
 */

// ✅ MORE EXAMPLES:
console.log(`The object is ${obj}`);  // ✅ "The object is [object Object]"

