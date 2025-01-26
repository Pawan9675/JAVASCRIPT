/**
 * EQUALITY OPERATORS IN JAVASCRIPT
 * =================================
 * JavaScript provides two types of equality operators:
 * 1. `==` (Abstract Equality Operator)
 * 2. `===` (Strict Equality Operator)
 */

/** 
 * 1. `==` (Abstract Equality Operator)
 * -------------------------------------
 * - Compares two values for equality.
 * - **Performs type conversion (coercion)** if the types are different before making the comparison.
 * 
 * Behavior:
 * - If the types of both operands are the same, it calls `===`.
 * - If the types are different, it performs **type conversion** (coercion) and then performs a value comparison.
 * 
 * Example:
 */
console.log(1 == "1");      // Output: true
/*
Explanation:
- Here `1` is a number and `"1"` is a string, so their types are different.
- The string `"1"` is converted to the number `1`.
- The types are now the same, so the comparison proceeds as `1 === 1`.
- The result is `true` because the values are equal.
*/

console.log(1 == "Pawan");  // Output: false
/*
Explanation:
- Here `1` is a number and `"Pawan"` is a string, so their types are different.
- JavaScript tries to convert `"Pawan"` to a number, but it can't.
- The string `"Pawan"` becomes `NaN`, and `1 == NaN` is always `false`.
*/

/** 
 * 2. `===` (Strict Equality Operator)
 * -------------------------------------
 * - Compares both the **value** and the **type** of two operands.
 * - **Does not perform type conversion** (no coercion).
 * 
 * Behavior:
 * - If the types are different, it directly returns `false`.
 * - If the types are the same, it compares the values.
 * 
 * Example:
 */
console.log(1 === "1");  // Output: false
/*
Explanation:
- Here `1` is a number and `"1"` is a string.
- Since their types are different, the comparison directly returns `false`.
*/

console.log(1 === 1);  // Output: true
/*
Explanation:
- Here both operands are numbers and have the same value.
- The result is `true` because both the type and value are identical.
*/

/** 
 * 3. SPECIAL CASES
 * -----------------
 * Some unique cases to consider while using `==` and `===`.
 */

/** 
 * Case 1: NaN (Not a Number)
 * ---------------------------
 * - `NaN` is the only value in JavaScript that **is not equal to itself**.
 * 
 * Example:
 */
console.log(NaN === NaN); // Output: false
console.log(NaN == NaN);  // Output: false
/*
Explanation:
- `NaN` is not equal to itself because it represents an invalid or undefined number.
- To check if a value is `NaN`, use `isNaN()` function instead.
*/
console.log(isNaN(NaN));  // Output: true

/** 
 * Case 2: Null and Undefined
 * ---------------------------
 * - `null` and `undefined` are treated as equal in `==` but not in `===`.
 */
console.log(null == undefined);  // Output: true (Abstract equality allows comparison between null and undefined)
console.log(null === undefined); // Output: false (Strict equality requires same type)

/** 
 * Case 3: Boolean Coercion
 * -------------------------
 * - `true` is coerced to `1` and `false` is coerced to `0` in abstract equality (`==`).
 * - No coercion happens in strict equality (`===`).
 */
console.log(true == 1);    // Output: true (true coerced to 1)
console.log(false == 0);   // Output: true (false coerced to 0)
console.log(true === 1);   // Output: false (strict equality, no coercion)

/** 
 * 4. COERCION (TYPE CONVERSION)
 * ------------------------------
 * JavaScript attempts to convert values to the same type when using `==`.
 * 
 * Example:
 */
console.log("5" == 5);   // Output: true (String "5" coerced to Number 5)
console.log("true" == true); // Output: false ("true" coerced to NaN, true coerced to 1)
console.log(" " == 0);   // Output: true (Empty string coerced to 0)

/** 
 * 5. PRACTICAL COMPARISONS
 * -------------------------
 */
console.log(0 == false);  // Output: true (false coerced to 0)
console.log(0 === false); // Output: false (different types: number vs boolean)

console.log("" == false); // Output: true (false coerced to 0, empty string coerced to 0)
console.log("" === false);// Output: false (different types: string vs boolean)

console.log(null == false);  // Output: false (null is only loosely equal to undefined)
console.log(undefined == false); // Output: false (undefined is not equal to false)

/**
 * SUMMARY OF EQUALITY OPERATORS
 * ------------------------------
 * - `==` (Abstract Equality Operator):
 *   - Performs **type conversion** before comparison.
 *   - Example: `1 == "1"` is `true` because `"1"` is coerced to `1`.
 * 
 * - `===` (Strict Equality Operator):
 *   - Does **not perform type conversion**.
 *   - Example: `1 === "1"` is `false` because the types are different.
 * 
 * Key Differences:
 * - Use `===` for precise comparisons without unexpected type coercion.
 * - Use `==` when you need loose comparisons (with coercion).
 * 
 * Special Notes:
 * - `NaN` is not equal to itself; use `isNaN()` to check for NaN values.
 * - `null` and `undefined` are loosely equal (`==`) but not strictly equal (`===`).
 */
