/**
 * SHORT-CIRCUITING AND COERCION IN JAVASCRIPT
 * ===========================================
 * In JavaScript, **short-circuiting** refers to the behavior of logical operators (`&&`, `||`) 
 * where the second operand is not evaluated if the result can be determined by the first operand.
 * **Coercion** (or type conversion) is the automatic or implicit conversion of values between types.
 */

/** 
 * FALSY VALUES IN JAVASCRIPT
 * --------------------------
 * In JavaScript, the following values are considered falsy (i.e., they evaluate to `false` in a boolean context):
 * 1. `null`
 * 2. `undefined`
 * 3. `""` (Empty String)
 * 4. `+0`, `-0`, `NaN`
 * 5. `false`
 * 
 * All other values are considered **truthy** (i.e., they evaluate to `true` in a boolean context).
 */

/** 
 * SHORT-CIRCUIT EVALUATION WITH `&&` (AND) OPERATOR
 * -------------------------------------------------
 * In the `&&` (AND) operation:
 * - If the first operand is falsy, JavaScript immediately returns the first operand, skipping the second operand.
 * - If the first operand is truthy, then the second operand is evaluated, and the result of the second operand is returned.
 * 
 * Example:
 */
console.log(10 && 6);   // Output: 6 (First value is truthy, so the second value is returned)
console.log(6 && 10);   // Output: 10 (First value is truthy, so the second value is returned)
console.log(0 && 10);   // Output: 0 (First value is falsy, so the first value is returned)
console.log(null && 10); // Output: null (First value is falsy, so the first value is returned)
console.log('' && 10);  // Output: '' (First value is falsy, so the first value is returned)

/** 
 * SHORT-CIRCUIT EVALUATION WITH `||` (OR) OPERATOR
 * -------------------------------------------------
 * In the `||` (OR) operation:
 * - If the first operand is truthy, JavaScript immediately returns the first operand, skipping the second operand.
 * - If the first operand is falsy, then the second operand is evaluated, and the result of the second operand is returned.
 * 
 * Example:
 */
console.log(10 || 0);    // Output: 10 (First value is truthy, so the first value is returned)
console.log(6 || 19);    // Output: 6 (First value is truthy, so the first value is returned)
console.log(0 || 10);    // Output: 10 (First value is falsy, so the second value is returned)
console.log(0 || -0);    // Output: -0 (First value is falsy, so the second value is returned)
console.log('' || 5);    // Output: 5 (First value is falsy, so the second value is returned)

/** 
 * COERCION (TYPE CONVERSION) IN JAVASCRIPT
 * ----------------------------------------
 * JavaScript performs automatic type conversion (coercion) in certain situations, especially in conditional checks and arithmetic operations.
 * This is known as **coercion**.
 * 
 * Example 1: Coercion in logical operators
 * - `&&` and `||` convert operands to booleans before evaluating.
 * - `&&` returns the **first falsy value** or the **last truthy value**.
 * - `||` returns the **first truthy value** or the **last falsy value**.
 */
console.log("10" && 6);  // Output: 6 ("10" is a truthy string, so the second value is returned)
console.log("0" || 10);  // Output: "0" ("0" is a truthy string, so the first value is returned)

console.log(10 && "test"); // Output: "test" (Both are truthy, so the second value is returned)
console.log(0 || "hello"); // Output: "hello" (First value is falsy, so the second value is returned)

/** 
 * Example 2: Implicit Type Coercion in Arithmetic Operations
 * - JavaScript will automatically convert values to numbers for mathematical operations.
 * - If a string contains a numeric value, it will be converted to a number for arithmetic operations.
 */
console.log("5" + 5);  // Output: "55" (String + number => string concatenation)
console.log("5" - 5);  // Output: 0 (String is coerced to number for subtraction)
console.log("10" * 2); // Output: 20 (String is coerced to number for multiplication)

/** 
 * Example 3: Coercion with `==` and `===`
 * - `==` (Loose equality): Performs type coercion if the types are different.
 * - `===` (Strict equality): Does not perform type coercion.
 */
let a = "10";  // String
let b = 10;    // Number

console.log(a == b);   // Output: true (loose equality, coerces string to number)
console.log(a === b);  // Output: false (strict equality, no coercion)


/** 
 * SUMMARY OF SHORT-CIRCUITING AND COERCION
 * ----------------------------------------
 * 1. **Short-Circuiting**:
 * - `&&` (AND): If the first operand is falsy, the second operand is not evaluated.
 * - `||` (OR): If the first operand is truthy, the second operand is not evaluated.
 * 
 * 2. **Coercion**:
 * - JavaScript automatically converts values between types.
 * - **Truthy values**: Any value that is not falsy.
 * - **Falsy values**: `null`, `undefined`, `""`, `+0`, `-0`, `NaN`, `false`.
 * - **Implicit type conversion** occurs when a value is used in a context where a specific type is expected.
 */
