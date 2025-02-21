/**
 * TOPRIMITIVE ABSTRACT OPERATION IN JAVASCRIPT
 * ==============================================
 * `ToPrimitive(input, preferredType)` is an internal ECMAScript operation used to 
 * convert an object into a **primitive value**.
 * 
 * 🔹 **Why Do We Need ToPrimitive?**
 * -----------------------------------
 * - JavaScript automatically calls `ToPrimitive()` when an **object** is used in a **context** 
 *   where a primitive value is expected (e.g., arithmetic, string concatenation, etc.).
 * - Objects **cannot be directly converted** to numbers or strings, so JavaScript follows a 
 *   specific sequence of **conversion rules**.
 * - If an object defines its own `toString()` or `valueOf()`, JavaScript will use them 
 *   to convert the object to a primitive.
 * 
 * 🔹 **How ToPrimitive Works?**
 * ------------------------------
 * 1. If `input` is already a **primitive**, return it.
 * 2. If `input` is an **object**, JavaScript tries to **convert it to a primitive**.
 * 3. The conversion can **prefer "string" or "number"**, depending on the operation.
 * 4. JavaScript will try different **methods (`valueOf()`, `toString()`)** to get a primitive value.
 * 
 * 🔹 **What is `OrdinaryToPrimitive`?**
 * -------------------------------------
 * - If an object doesn't have a custom conversion method, JavaScript uses **OrdinaryToPrimitive**.
 * - It tries **two methods** in a specific order:
 *   1. If `hint` is `"string"` → Calls `toString()` first, then `valueOf()`.
 *   2. If `hint` is `"number"` → Calls `valueOf()` first, then `toString()`.
 * - If both return an **object**, a `TypeError` is thrown.
 */

/**
 * 1️⃣ DEFAULT OBJECT BEHAVIOR
 * ---------------------------
 * When you use an object in an operation (like subtraction or concatenation), JavaScript tries to convert it.
 * By default, objects have:
 * - `toString()`: Returns `[object Object]`
 * - `valueOf()`: Returns the same object
 */

let obj1 = {};

console.log(obj1.toString()); // Output: "[object Object]"
console.log(typeof obj1.toString()); // Output: string
console.log(obj1.valueOf()); // Output: {} (same object)
console.log(typeof obj1.valueOf()); // Output: object

console.log("---------");


/**
 * 2️⃣ OVERRIDING `toString()` AND `valueOf()`
 * --------------------------------------------
 * - We can **override** `toString()` or `valueOf()` to return a custom value.
 * - JavaScript will use these **overridden methods** in **type conversion**.
 */

let obj2 = {
    toString() {
        return "My name is Pawan";
    },
    valueOf() {
        return 10;
    }
};

console.log(obj2.toString()); // Output: "My name is Pawan"
console.log(obj2.valueOf());  // Output: 10

console.log("---------");

/**
 * 3️⃣ HOW JAVASCRIPT USES `ToPrimitive()` IN OPERATIONS
 * -----------------------------------------------------
 * - When performing **arithmetic operations**, JavaScript tries to convert objects to numbers.
 * - It first calls `valueOf()`, if it returns a primitive, it uses that value.
 * - If `valueOf()` doesn't return a primitive, it calls `toString()`.
 * - If neither method returns a primitive, JavaScript throws an error.
 */

console.log("Hello " + obj2); // Output: "Hello I am an object" (`toString()` is used)
console.log(100 - obj2);      // Output: 90 (`valueOf()` is used)

console.log("---------");

/**
 * 🔹 SUBTRACTION OPERATOR (-) & OBJECT CONVERSION
 * -----------------------------------------------
 * - The `-` operator **expects a number**.
 * - JavaScript will **attempt to convert** objects to numbers before subtraction.
 */

// Example 1: Subtracting an empty object
let obj3 = {};
console.log(10 - obj3); // Output: NaN (Default `valueOf()` returns object, so `ToNumber("[object Object]")` gives NaN)

// Example 2: Subtracting an object with properties (default behavior)
let obj4 = { x: 10, y: 20 };
console.log(100 - obj4); // Output: NaN (Default behavior)

// Example 3: Custom `valueOf()` (number conversion)
let obj5 = {
    x: 10,
    valueOf() {
        return 99;
    }
};
console.log(100 - obj5); // Output: 1 (`valueOf()` returns 99, so 100 - 99 = 1)

// Example 4: Custom `toString()` (string conversion)
let obj6 = {
    x: 10,
    toString() {
        return "88";
    }
};
console.log(90 - obj6); // Output: 2 (`toString()` returns "88", so 90 - 88 = 2)

console.log("---------");

/**
 * 4️⃣ ERROR CASES: WHAT HAPPENS WHEN OBJECT RETURNS ANOTHER OBJECT?
 * ------------------------------------------------------------------
 * - If `toString()` or `valueOf()` return **another object**, JavaScript **throws an error**.
 */

let obj7 = {
    x: 10,
    toString() {
        return {}; // ❌ This should return a string, but it's an object
    }
};

try {
    console.log(100 - obj7); // Throws TypeError
} catch (error) {
    console.log("Error:", error.message); // Output: Cannot convert object to primitive value
}

console.log("---------");


/**
 * 🔹 SUMMARY OF ToPrimitive RULES:
 * ---------------------------------
 * 1. **If the value is already a primitive, return it.**
 * 2. **If preferred type is "number":**
 *    - Call `valueOf()`
 *    - If `valueOf()` returns a primitive, use it.
 *    - Otherwise, call `toString()` and use its result.
 * 3. **If preferred type is "string":**
 *    - Call `toString()`
 *    - If `toString()` returns a primitive, use it.
 *    - Otherwise, call `valueOf()` and use its result.
 * 4. **If neither method returns a primitive, JavaScript throws an error.**
 */

console.log("Done! ✅");
