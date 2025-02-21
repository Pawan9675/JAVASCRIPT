/**
 * 🔹 ABSTRACT OPERATION: ToString ( argument )
 * ===========================================
 * - `ToString(argument)` converts any given value into a **String**.
 * - If conversion is **not possible**, it **throws an error**.
 *
 * 📌 STEPS TO CONVERT A VALUE TO STRING:
 * -------------------------------------
 * 1️⃣ If `argument` is already a `String`, return it as is.
 * 2️⃣ If `argument` is a `Symbol`, **throw a TypeError** (Symbols cannot be converted).
 * 3️⃣ If `argument` is `undefined`, return `"undefined"`.
 * 4️⃣ If `argument` is `null`, return `"null"`.
 * 5️⃣ If `argument` is `true`, return `"true"`.
 * 6️⃣ If `argument` is `false`, return `"false"`.
 * 7️⃣ If `argument` is a `Number`, return its **string representation** (base 10).
 * 8️⃣ If `argument` is a `BigInt`, return its **string representation** (base 10).
 * 9️⃣ If `argument` is an `Object`:
 *      - Convert it to a **primitive value** using `ToPrimitive(argument, "string")`.
 *      - Then apply `ToString()` to the resulting value.
 */

// 📌 EXAMPLES:

console.log(String("Hello"));  // ✅ "Hello"  (String remains unchanged)
console.log(String(123));      // ✅ "123"  (Number → String)
console.log(String(true));     // ✅ "true"  (Boolean → String)
console.log(String(false));    // ✅ "false" (Boolean → String)
console.log(String(null));     // ✅ "null"  (Null → String)
console.log(String(undefined));// ✅ "undefined" (Undefined → String)
console.log(String(3.14));     // ✅ "3.14"  (Number → String)
console.log(String(1000000));  // ✅ "1000000" (Number → String)
console.log(String(0));        // ✅ "0" (Number → String)
console.log(String(BigInt(10)));// ✅ "10" (BigInt → String)

// 📌 BIGINT CONVERSION:
console.log(String(123n));  // ✅ "123" (BigInt converted to string)

// 📌 SYMBOL CONVERSION:
try {
    console.log(String(Symbol("test")));  // ❌ Throws TypeError
} catch (e) {
    console.log(e.message); // ✅ "Cannot convert a Symbol value to a string"
}
/**
 * 🔥 OBJECT CONVERSION (`ToPrimitive` + `ToString`)
 * -------------------------------------------------
 * - If an object is converted to a string, JavaScript **calls `ToPrimitive()`** first.
 * - `ToPrimitive(argument, "string")` follows these steps:
 *   1️⃣ If the object has a `toString()` method, call it.
 *   2️⃣ If `toString()` returns a **primitive**, use it.
 *   3️⃣ Otherwise, call `valueOf()`.
 *   4️⃣ If `valueOf()` returns a **primitive**, use it.
 *   5️⃣ Otherwise, throw a `TypeError`.
 */

// 📌 OBJECT EXAMPLES:

let obj1 = {
    toString() {
        return "Custom Object";
    }
};
console.log(String(obj1));  // ✅ "Custom Object" (Calls `toString()`)

let obj2 = {
    valueOf() {
        return 42;
    }
};
console.log(String(obj2));  // ✅ "42" (Calls `valueOf()`, then converts to string)

let obj3 = {};
console.log(String(obj3));  // ✅ "[object Object]" (Default `toString()`)

let arr = [1, 2, 3];
console.log(String(arr));   // ✅ "1,2,3" (Array `toString()` joins elements)

let date = new Date();
console.log(String(date));  // ✅ "Tue Feb 06 2025 18:30:00 GMT+0530 (IST)" (Date `toString()`)

// 📌 OBJECT CONVERSION:
console.log(String({}));          // ✅ "[object Object]" (Default Object to String)
console.log(String([]));          // ✅ "" (Empty array to empty string)
console.log(String([1, 2, 3]));   // ✅ "1,2,3" (Array converts to a comma-separated string)
console.log(String(function(){}));// ✅ "function(){}" (Function converts to string representation)

// 📌 SPECIAL CASES:
console.log(String(NaN));  // ✅ "NaN"
console.log(String(Infinity)); // ✅ "Infinity"
console.log(String(-Infinity)); // ✅ "-Infinity"

console.log("--------");

/**
 * 🔥 SUMMARY: How ToString() Works?
 * ---------------------------------
 * ✅ **Primitives** are converted **directly**.
 * ✅ **Objects** use `toString()` or `valueOf()`.
 * ✅ **Symbols** cause an **error** (`TypeError`).
 * ✅ **Special cases**:
 *    - `null → "null"`
 *    - `undefined → "undefined"`
 *    - `true → "true"`, `false → "false"`
 *    - `Number → "string"`
 *    - `BigInt → "string"`
 *    - `Object → "[object Object]"` (default) or custom `toString()`
 */

console.log("✅ Done! Everything is clear!");
