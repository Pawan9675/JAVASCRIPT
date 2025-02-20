/**
 * ADDITION & UNARY PLUS OPERATORS IN JAVASCRIPT
 * =============================================
 * JavaScript provides two main types of `+` operators:
 * 1️⃣ **Addition Operator (`+`)**: Used for numeric addition or string concatenation.
 * 2️⃣ **Unary Plus (`+`)**: Converts a value into a number.
 */

console.log("---------");

/**
 * 🔹 1. ADDITION OPERATOR (`+`)
 * -----------------------------
 * - The `+` operator performs **either** numeric addition **or** string concatenation.
 * - If **both operands are numbers**, it performs **numeric addition**.
 * - If **at least one operand is a string**, it performs **string concatenation**.
 * - If an operand is an **object**, JavaScript calls `ToPrimitive()` on it before applying `+`.
 */

console.log(10 + 5); // Output: 15  (Both are numbers → Numeric Addition)
console.log(10 + "5"); // Output: "105" (One operand is a string → String Concatenation)
console.log("10" + "5"); // Output: "105" (Both are strings → String Concatenation)

console.log("---------");

/**
 * 🔹 2. HOW OBJECTS BEHAVE WITH ADDITION (`+`)
 * --------------------------------------------
 * - If an operand is an **object**, JavaScript calls `ToPrimitive(obj, "default")`.
 * - `ToPrimitive` first checks for `[Symbol.toPrimitive]`, then `valueOf()`, and finally `toString()`.
 * - If the result is a **string**, JavaScript performs **string concatenation**.
 * - If the result is a **number**, JavaScript performs **numeric addition**.
 */

// Example: Object with `toString()`
let obj1 = {
    toString() {
        return "99"; // Returns a string
    }
};
console.log(10 + obj1); // Output: "109" (Object converts to string → String Concatenation)

// Example: Object with `valueOf()`
let obj2 = {
    valueOf() {
        return 99; // Returns a number
    }
};
console.log(10 + obj2); // Output: 109 (Object converts to number → Numeric Addition)

console.log("---------");

/**
 * 🔹 3. UNARY PLUS (`+`)
 * ----------------------
 * - The unary plus operator **converts a value into a number**.
 * - It works similarly to `Number(value)`, but is more concise.
 * - If the operand is already a number, it **does nothing**.
 * - If the operand is a string containing a valid number, it converts it.
 * - If the operand is an object, JavaScript applies **ToPrimitive(obj, "number")** first.
 */

console.log(typeof +"99"); // Output: "number" (String "99" is converted to number 99)

let y = +"88"; // Converts "88" to number 88
console.log(12 + y); // Output: 100 (12 + 88 = 100)

console.log("---------");

/**
 * 🔹 4. HOW UNARY PLUS WORKS INTERNALLY
 * -------------------------------------
 * - The **ToNumber()** operation is applied to convert values into numbers.
 * - Works like `Number(value)`, but does **not** convert empty strings to `NaN`.
 */

// Example: Converting Different Types
console.log(+true);  // Output: 1
console.log(+false); // Output: 0
console.log(+null);  // Output: 0
console.log(+undefined); // Output: NaN
console.log(+"123abc");  // Output: NaN (Cannot convert "123abc" to a number)

console.log("---------");

/**
 * 🔹 5. UNARY PLUS WITH OBJECTS
 * -----------------------------
 * - If the operand is an object, JavaScript first applies `ToPrimitive(obj, "number")`.
 * - This means it first checks `valueOf()`, then `toString()`.
 */

// Example: Object with `toString()`
let obj3 = {
    toString() {
        return "77"; // Converts to string "77"
    }
};
console.log(+obj3); // Output: 77 (String "77" is converted to number 77)

// Example: Object with `valueOf()`
let obj4 = {
    valueOf() {
        return 55; // Converts to number 55
    }
};
console.log(+obj4); // Output: 55 (Directly returns a number)

console.log("---------");

/**
 * 🔹 6.  UNARY PLUS WITH NULL & UNDEFINED
 * ------------------------------------
 * - `null` converts to `0`.
 * - `undefined` converts to `NaN`.
 */

console.log(+null);      // Output: 0
console.log(+undefined); // Output: NaN

/**
 * 🔥 SUMMARY: ADDITION OPERATOR (`+`) VS UNARY PLUS (`+`)
 * -------------------------------------------------------
 * ✅ **Addition Operator (`+`)**
 *    - Performs **numeric addition** when both operands are numbers.
 *    - Performs **string concatenation** when at least one operand is a string.
 *    - If an operand is an **object**, JavaScript calls `ToPrimitive()` on it.
 *    - Calls `toString()` if `valueOf()` is absent or returns an object.
 * 
 * ✅ **Unary Plus (`+`)**
 *    - Converts the operand into a number (like `Number(value)`).
 *    - If the operand is already a number, it remains unchanged.
 *    - Converts `true → 1`, `false → 0`, `null → 0`, `undefined → NaN`.
 *    - Calls `ToPrimitive(obj, "number")` on objects.
 */

console.log("Done! ✅"); // ✅ Code execution completed
