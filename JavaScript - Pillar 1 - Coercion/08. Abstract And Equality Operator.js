/**
 * 🔹 COMPARISON OPERATORS IN JAVASCRIPT (`==` vs `===`)
 * ====================================================
 * - JavaScript provides two types of equality operators:
 *   1️⃣ **Abstract Equality (`==`)** → Allows type conversion.
 *   2️⃣ **Strict Equality (`===`)** → No type conversion (strict type checking).
 */

/**
 * 🔥 1️⃣ ABSTRACT EQUALITY (`==`)
 * -------------------------------
 * - Also called **loose equality**.
 * - It compares two values but **allows type coercion**.
 * - Uses **ToNumber(), ToPrimitive()**, and **other conversions** to compare values.
 *
 * 📌 RULES FOR `x == y`
 * ----------------------
 * 1️⃣ If `Type(x) === Type(y)`, it simply checks using `===` (Strict Equality).
 * 2️⃣ `null == undefined` → ✅ `true`
 * 3️⃣ `undefined == null` → ✅ `true`
 * 4️⃣ If `x` is a Number and `y` is a String → Convert `y` to a Number, then compare.
 * 5️⃣ If `x` is a String and `y` is a Number → Convert `x` to a Number, then compare.
 * 6️⃣ If `x` is a Boolean → Convert it to a Number, then compare.
 * 7️⃣ If `y` is a Boolean → Convert it to a Number, then compare.
 * 8️⃣ If `x` is a String, Number, or Symbol & `y` is an Object → Convert `y` to a Primitive, then compare.
 * 9️⃣ If `x` is an Object & `y` is a String, Number, or Symbol → Convert `x` to a Primitive, then compare.
 * 🔟 Otherwise, return `false`.
 */

// Example 1: Null & Undefined Comparison
console.log(null == undefined); // ✅ true (Special Rule)

// Example 2: Number & String Comparison
console.log(5 == "5");  // ✅ true (`"5"` is converted to `5`)
console.log(0 == "");   // ✅ true (`""` is converted to `0`)
console.log(0 == "0");  // ✅ true (`"0"` is converted to `0`)

// Example 3: Boolean & Number Comparison
console.log(true == 1);  // ✅ true (`true` → `1`)
console.log(false == 0); // ✅ true (`false` → `0`)

// Example 4: Object to Primitive Conversion
console.log(42 == { valueOf: () => 42 }); // ✅ true (Object → 42)
console.log("5" == [5]);                  // ✅ true (`[5]` → `"5"` → `5`)
console.log(null == {});                   // ❌ false (No coercion rule)

console.log("--------");

/**
 * 🔥 2️⃣ STRICT EQUALITY (`===`)
 * -------------------------------
 * - Also called **strict equality**.
 * - It does **not** allow type coercion.
 * - The values must be of the **same type** to be considered equal.
 *
 * 📌 RULES FOR `x === y`
 * ----------------------
 * 1️⃣ If `Type(x) !== Type(y)`, return `false`.
 * 2️⃣ If both are `Number`:
 *     - If either is `NaN`, return `false`.
 *     - If both are the same number, return `true`.
 *     - `+0 === -0` is ✅ `true`.
 * 3️⃣ If both are `String`, return `true` if they are identical (same characters).
 * 4️⃣ If both are `Boolean`, return `true` if they have the same value.
 * 5️⃣ If both are `Symbol`, return `true` if they are the same Symbol.
 * 6️⃣ If both are Objects, return `true` only if they reference the **same object**.
 */

// Example 1: Different Types
console.log(5 === "5");  // ❌ false (Different types)
console.log(false === 0); // ❌ false (Boolean vs Number)

// Example 2: Number Rules
console.log(NaN === NaN); // ❌ false (Special case: NaN is never equal to itself)
console.log(+0 === -0);   // ✅ true (Special case: +0 and -0 are considered the same)

// Example 3: SameValueNonNumber Check
console.log("hello" === "hello"); // ✅ true (Exact same string)
console.log(true === true);       // ✅ true (Exact same boolean)
console.log(Symbol("a") === Symbol("a")); // ❌ false (Different Symbol instances)
// console.log({} === {});   // ❌ false (Different object references)
// console.log([] === []);   // ❌ false (Different array references)


console.log("--------");

/**
 * 🔥 3️⃣ SAME VALUE NON-NUMBER COMPARISON (`SameValueNonNumber()`)
 * ---------------------------------------------------------------
 * - Used when comparing **non-number values** for strict equality.
 * - This function is called internally when using `===` for non-number values.
 *
 * 📌 RULES FOR `SameValueNonNumber(x, y)`
 * ---------------------------------------
 * 1️⃣ If `Type(x) !== Type(y)`, throw an error (this should never happen).
 * 2️⃣ If both are `Undefined`, return `true`.
 * 3️⃣ If both are `Null`, return `true`.
 * 4️⃣ If both are `String`, return `true` if they are identical.
 * 5️⃣ If both are `Boolean`, return `true` if they are both `true` or both `false`.
 * 6️⃣ If both are `Symbol`, return `true` if they refer to the same Symbol.
 * 7️⃣ If both are Objects, return `true` only if they refer to the same object.
 */

// Example 1: Undefined & Null
console.log(undefined === undefined); // ✅ true
console.log(null === null);           // ✅ true

// Example 2: String Comparison
console.log("apple" === "apple"); // ✅ true (Exact match)
console.log("hello" === "Hello"); // ❌ false (Case-sensitive)

// Example 3: Boolean Comparison
console.log(true === true);   // ✅ true
console.log(false === false); // ✅ true
console.log(true === false);  // ❌ false

// Example 4: Symbol Comparison
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // ❌ false (Different Symbol instances)

// Example 5: Object Reference Comparison
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2); // ❌ false (Different object references)

let obj3 = obj1; // obj3 points to the same object as obj1
console.log(obj1 === obj3); // ✅ true (Same reference)

console.log("--------");

/**
 * 🔥 SUMMARY: `==` vs `===`
 * ------------------------
 * ✅ `==` (Abstract Equality)
 *    - **Allows type conversion**.
 *    - Converts types before comparison.
 *    - `null == undefined` ✅ `true`.
 *    - `0 == ""` ✅ `true` (string converts to number).
 *
 * ✅ `===` (Strict Equality)
 *    - **No type conversion**.
 *    - Compares both type & value.
 *    - `null === undefined` ❌ `false`.
 *    - `0 === ""` ❌ `false` (different types).
 *
 * ✅ `SameValueNonNumber(x, y)`
 *    - Used internally for **non-number strict comparison**.
 *    - Ensures objects, strings, booleans, and symbols are compared correctly.
 */

console.log("Comparison Rules Explained! ✅");
