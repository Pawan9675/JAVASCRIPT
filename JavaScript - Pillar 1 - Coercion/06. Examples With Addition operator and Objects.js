/**
 * ADDITION OPERATOR (`+`) & OBJECT CONVERSIONS IN JAVASCRIPT
 * ==========================================================
 * - The `+` operator performs **either**:
 *    ✅ Numeric Addition (if both operands are numbers).
 *    ✅ String Concatenation (if at least one operand is a string).
 * - When an **object** is used in an addition operation, JavaScript must first **convert** it to a primitive value.
 * - This conversion is done using the **ToPrimitive()** operation.
 * - `ToPrimitive()` calls **OrdinaryToPrimitive()**, which applies either `valueOf()` or `toString()`.
 */

/**
 * 🔹 HOW `ToPrimitive()` WORKS?
 * ------------------------------
 * `ToPrimitive(input, preferredType)`
 * - Converts `input` (an object) into a **primitive value**.
 * - If `preferredType` is `"number"`, it tries `valueOf()` first, then `toString()`.
 * - If `preferredType` is `"string"`, it tries `toString()` first, then `valueOf()`.
 * - If **both** return objects instead of primitives, it throws an error.
 */

/**
 * 🔹 HOW `OrdinaryToPrimitive()` WORKS?
 * -------------------------------------
 * - This is an internal algorithm used by `ToPrimitive()`.
 * - It follows this process:
 * 
 *   1️⃣ If `preferredType` is `"string"`, it checks:
 *        - `toString()` → If it returns a primitive, use it.
 *        - Otherwise, `valueOf()`.
 * 
 *   2️⃣ If `preferredType` is `"number"`, it checks:
 *        - `valueOf()` → If it returns a primitive, use it.
 *        - Otherwise, `toString()`.
 * 
 *   3️⃣ If both return objects, JavaScript throws a **TypeError**.
 */

/**
 * 🔥 EXAMPLE 1: ADDITION OPERATOR WITH EMPTY OBJECT
 * --------------------------------------------------
 * - Here, we have an empty object `{}`.
 * - Let's see how JavaScript handles it in addition operations.
 */

let obj = {};

console.log(obj); // Output: {}

console.log("18" + obj); // Output: "18[object Object]"

console.log(18 + obj); // Output: "18[object Object]"

/**
 * 🔹 BREAKDOWN OF THE FIRST OPERATION `"18" + obj`
 * ------------------------------------------------
 * - `+` is used for **string concatenation** because `"18"` is a **string**.
 * - JavaScript calls `ToPrimitive(obj, "default")` to convert `obj` to a primitive.
 * - `ToPrimitive()` calls `OrdinaryToPrimitive(obj, "string")`, which:
 *      1️⃣ Calls `toString()`, returning `"[object Object]"`.
 *      2️⃣ Since it got a primitive (`"[object Object]"`), it stops.
 * - `"18" + "[object Object]"` → `"18[object Object]"` (String Concatenation).
 */

/**
 * 🔹 BREAKDOWN OF THE SECOND OPERATION `18 + obj`
 * -----------------------------------------------
 * - `+` is used, and `18` is a **number**.
 * - JavaScript calls `ToPrimitive(obj, "default")` to convert `obj` to a primitive.
 * - `ToPrimitive()` calls `OrdinaryToPrimitive(obj, "number")`, which:
 *      1️⃣ Calls `valueOf()`, but it **returns an object**, so it's ignored.
 *      2️⃣ Calls `toString()`, returning `"[object Object]"`.
 *      3️⃣ Since it got a primitive (`"[object Object]"`), it stops.
 * - `18 + "[object Object]"` → `"18[object Object]"` (String Concatenation).
 */

console.log("---------");

/**
 * 2️⃣ OBJECT WITH CUSTOM `toString()`
 * -----------------------------------
 * - If an object has a `toString()` method, it will be used to convert the object.
 */

let obj2 = {
    toString() {
        return "Hello";
    }
};

console.log("18" + obj2); // Output: "18Hello"
console.log(18 + obj2);   // Output: "18Hello"

/*
🔹 How It Works?
   - `obj2.toString()` returns `"Hello"`.
   - `"18" + "Hello"` → `"18Hello"` (String concatenation).
   - `18 + "Hello"` → `"18Hello"` (String concatenation).
*/

console.log("--------");

/**
 * 3️⃣ OBJECT WITH CUSTOM `valueOf()`
 * -----------------------------------
 * - If an object has a `valueOf()` method returning a number, JavaScript will use it.
 */

let obj3 = {
    valueOf() {
        return 42;
    }
};

console.log("18" + obj3); // Output: "1842"
console.log(18 + obj3);   // Output: 60 (Numeric addition)

/*
🔹 How It Works?
   - `obj3.valueOf()` returns `42` (a number).
   - `"18" + 42` → `"1842"` (String concatenation).
   - `18 + 42` → `60` (Numeric addition).
*/

console.log("--------");

/**
 * 4️⃣ OBJECT WITH BOTH `toString()` AND `valueOf()`
 * -------------------------------------------------
 * - `valueOf()` is **preferred for numbers**.
 * - If `valueOf()` is missing or returns an object, `toString()` is used.
 */

let obj4 = {
    toString() {
        return "World";
    },
    valueOf() {
        return 100;
    }
};

console.log("18" + obj4); // Output: "18100"
console.log(18 + obj4);   // Output: 118 (Numeric addition)

/*
🔹 How It Works?
   - `obj4.valueOf()` returns `100` (a number).
   - `"18" + 100` → `"18100"` (String concatenation).
   - `18 + 100` → `118` (Numeric addition).
*/

console.log("--------");

/**
 * 5️⃣ OBJECT WITH `valueOf()` RETURNING AN OBJECT
 * -----------------------------------------------
 * - If `valueOf()` returns an object, JavaScript falls back to `toString()`.
 */

let obj5 = {
    valueOf() {
        return {};  // Invalid return type (object)
    },
    toString() {
        return "Custom Object";
    }
};

console.log("18" + obj5); // Output: "18Custom Object"
console.log(18 + obj5);   // Output: "18Custom Object"

/*
🔹 How It Works?
   - `obj5.valueOf()` returns an **object**, which is invalid.
   - JavaScript then calls `toString()`, which returns `"Custom Object"`.
   - `"18" + "Custom Object"` → `"18Custom Object"` (String concatenation).
   - `18 + "Custom Object"` → `"18Custom Object"` (String concatenation).
*/

console.log("--------");

/**
 * 6️⃣ OBJECT WITH NO `toString()` OR `valueOf()`
 * ----------------------------------------------
 * - If neither `toString()` nor `valueOf()` return a valid primitive, JavaScript throws an error.
 */

let obj6 = {
    valueOf() {
        return {}; // Invalid
    },
    toString() {
        return {}; // Invalid
    }
};

try {
    console.log(18 + obj6); // Throws TypeError
} catch (error) {
    console.log("Error:", error.message); // Output: Cannot convert object to primitive value
}

/*
🔹 How It Works?
   - `valueOf()` returns an object (invalid).
   - `toString()` also returns an object (invalid).
   - JavaScript cannot convert the object to a primitive, so it throws `TypeError`.
*/

console.log("--------");

/**
 * 🔥 SUMMARY OF ADDITION WITH OBJECTS
 * -----------------------------------
 * ✅ **JavaScript applies `ToPrimitive(obj)`, preferring string conversion.**
 * ✅ **If `valueOf()` returns a primitive, it is used.**
 * ✅ **If `valueOf()` is missing or returns an object, `toString()` is used.**
 * ✅ **If both `valueOf()` and `toString()` return objects, JavaScript throws a `TypeError`.**
 */

console.log("Done! ✅"); // ✅ Code execution completed
