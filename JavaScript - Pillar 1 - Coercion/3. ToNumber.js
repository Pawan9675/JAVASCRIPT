/**
 * ToNumber ABSTRACT OPERATION
 * ============================
 * The `ToNumber(argument)` operation is used **internally by JavaScript** to convert different types of values into numbers.
 * 
 * 🔹 **What is ToNumber?**
 * ------------------------
 * - `ToNumber(argument)` attempts to convert `argument` into a numeric value.
 * - If the value cannot be converted, it returns `NaN`.
 * - This operation is performed **implicitly** whenever JavaScript expects a number (e.g., arithmetic operations).
 * 
 * 🔹 **How It Works?**
 * -------------------
 * - If `argument` is already a **Number**, return it as is.
 * - If `argument` is **undefined**, return `NaN`.
 * - If `argument` is **null**, return `+0`.
 * - If `argument` is `false`, return `0`, and if `true`, return `1`.
 * - If `argument` is a **String**, convert it using `StringToNumber()`.
 * - If parsing fails (e.g., `"abc"`), it returns `NaN`.
 * - If `argument` is **Symbol** or **BigInt**, throw a `TypeError`.
 * - If `argument` is an **Object**, convert it to a primitive, then apply `ToNumber()`.
 */

/**
 * 1️⃣ ToNumber applied to Primitive Types
 * ---------------------------------------
 * Below are the conversions that happen when `ToNumber()` is applied to different primitive values.
 */

// Conversion of `undefined`, `null`, `true`, `false`
console.log(Number(undefined)); // Output: NaN
console.log(Number(null));      // Output: 0
console.log(Number(true));      // Output: 1
console.log(Number(false));     // Output: 0

console.log("---------");

/**
 * 2️⃣ ToNumber applied to Strings
 * --------------------------------
 * - JavaScript tries to convert a **string** to a valid **number** character by character.
 * - If it cannot be converted, it results in `NaN`.
 */

console.log(Number("123"));     // Output: 123 (Valid number)
console.log(Number("-45.67"));  // Output: -45.67 (Valid number)
console.log(Number("0xa"));     // Output: 10 (Hexadecimal conversion)
console.log(Number("Infinity"));// Output: Infinity
console.log(Number("123abc"));  // Output: NaN (Invalid number format)
console.log(Number("Hello"));   // Output: NaN (Cannot convert to number)

console.log("---------");

/**
 * 3️⃣ OBJECTS & ARRAYS TO NUMBER CONVERSION
 * -----------------------------------------
 * - Objects are first **converted to primitives** using `ToPrimitive(argument, number)`. Then `ToNumber()` is applied to the resulting primitive.
 * - Arrays are converted to numbers by first converting them to **strings**.
 * - If an object **cannot be converted**, `NaN` is returned.
 */

console.log(Number({}));         // Output: NaN (Objects cannot be converted)
console.log(Number([]));         // Output: 0 (Empty array → "")
console.log(Number([10]));       // Output: 10 (Array with one element → number)
console.log(Number([1, 2, 3]));  // Output: NaN (Multiple elements → NaN)
console.log(Number(new Date())); // Output: Number (Milliseconds since 1970)

let obj = {
    valueOf() {
        return "123"; // Converted to String, then Number
    }
};
console.log(Number(obj)); // Output: 123

console.log("---------");

/**
 * 4️⃣ ToNumber in Arithmetic Operations
 * --------------------------------------
 * - Arithmetic operations in JavaScript **implicitly call `ToNumber()`** on operands.
 */

// Addition with non-number types
console.log(10 + undefined); // Output: NaN (undefined → NaN)
console.log(10 + null);      // Output: 10 (null → 0)
console.log(10 + true);      // Output: 11 (true → 1)
console.log(10 + false);     // Output: 10 (false → 0)

// Subtraction forces type conversion
console.log(10 - "5");       // Output: 5 ("5" → 5)
console.log("12" - "8");     // Output: 4 (Both converted to numbers)
console.log(10 - "abc");     // Output: NaN ("abc" → NaN)
console.log(10 - undefined); // Output: NaN (undefined → NaN)
console.log(10 - true);      // Output: 9 (true → 1)
console.log(1 - "0xa");      // Output: 9 (Hexadecimal string "0xa" → 10)

console.log("---------");

/**
 * 5️⃣ HOW STRING-TO-NUMBER CONVERSION WORKS
 * ------------------------------------------
 * - If a string **only contains digits**, it is converted successfully.
 * - If a string contains **non-numeric characters**, JavaScript tries to parse the **initial valid portion**.
 * - If parsing fails completely, `NaN` is returned.
 */

console.log(Number("123"));     // Output: 123
console.log(Number("12.34"));   // Output: 12.34
console.log(Number("   56 "));  // Output: 56 (Whitespace is ignored)
console.log(Number("42abc"));   // Output: NaN (Contains non-numeric characters)
console.log(Number("abc42"));   // Output: NaN (Cannot start with non-numeric characters)
console.log(Number("0xF"));     // Output: 15 (Hexadecimal conversion)
console.log(Number("0b1010"));  // Output: 10 (Binary conversion)
console.log(Number("0o52"));    // Output: 42 (Octal conversion)
console.log(Number("Infinity"));// Output: Infinity
console.log(Number("-Infinity"));// Output: -Infinity

/**
 * 6️⃣ SPECIAL BEHAVIOR IN SUBTRACTION
 * -----------------------------------
 * - Unlike `+` (which can perform string concatenation), `-` **always** converts both operands to numbers.
 */

// Example: Both strings converted to numbers
console.log("12" - "8");  // Output: 4

// Undefined in Subtraction (Results in NaN)
console.log(10 - undefined); // Output: NaN

// Boolean in Subtraction
console.log(10 - true); // Output: 9 (true → 1)

// String to NaN
console.log(10 - "Pawan"); // Output: NaN (Cannot convert "Pawan" to number)

console.log("---------");

/**
 * 7️⃣ SPECIAL CASES
 * -----------------
 * - `+""` returns `0`, while `-" "` returns `0`.
 * - `"0xa"` is a valid **hexadecimal**, but `"abc"` is not.
 */

console.log(+"");        // Output: 0 (Empty string → 0)
console.log(-" ");       // Output: 0 (Whitespace → 0)
console.log(+"0xa");     // Output: 10 (Hexadecimal)
console.log(Number("abc"));// Output: NaN (Invalid number)

console.log("---------");

/**
 * 🔥 WHY IS ToNumber IMPORTANT?
 * -----------------------------
 * - JavaScript is a **loosely typed** language, meaning variables can hold different types.
 * - JavaScript **automatically converts types** when necessary (implicit coercion).
 * - Understanding `ToNumber()` helps **avoid unexpected behavior** in calculations.
 */

/**
 * ✅ BEST PRACTICES TO AVOID ToNumber() ISSUES:
 * --------------------------------------------
 * 1. Always **convert explicitly** using `Number()` instead of relying on implicit conversion.
 * 2. Avoid using `==` for comparisons because it allows coercion (`"5" == 5` → true).
 * 3. Use `===` instead of `==` to prevent unintended type conversion.
 * 4. Be cautious with `null`, `undefined`, and `NaN`, as they can lead to unexpected results.
 * 5. When parsing numbers from strings, use `parseInt()` or `parseFloat()` when necessary.
 */