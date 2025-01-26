/**
 * OPERATORS IN JAVASCRIPT
 * ==========================
 * Operators in JavaScript are used to perform operations on variables and values. 
 * These operations can be mathematical, logical, comparison-based, etc.
 * 
 * - **Operators**: Operators define what operation you want to perform.
 * - **Operands**: Operands define the values on which the operation is performed.
 * 
 * Example:
 * 10 + 3
 * - In this example, `10` and `3` are the **operands**.
 * - The `+` sign is the **operator**, which defines the addition operation.
 */

/** 
 * 1. Arithmetic Operators
 * -------------------------
 * These operators are used for mathematical operations.
 * - Addition: `+`
 * - Subtraction: `-`
 * - Multiplication: `*`
 * - Division: `/`
 * - Remainder (Modulo): `%`
 * - Exponentiation (Power): `**`
 * 
 * Example:
 */
let x = 10;
let y = 3;

console.log("Addition:", x + y);      // Output: 13
console.log("Subtraction:", x - y);   // Output: 7
console.log("Multiplication:", x * y); // Output: 30
console.log("Division:", x / y);      // Output: 3.333...
console.log("Remainder:", x % y);     // Output: 1
console.log("Exponentiation:", y ** 2); // Output: 9 (3^2)

/** 
 * 2. Assignment Operators
 * -------------------------
 * These operators are used to assign values to variables.
 * - `=`: Simple assignment
 * - `+=`: Add and assign
 * - `-=`: Subtract and assign
 * - `*=`: Multiply and assign
 * - `/=`: Divide and assign
 * - `%=`: Modulo and assign
 * - `**=`: Exponentiation and assign
 * 
 * Example:
 */
let a = 10;  // Assign 10 to a

console.log(a += 2);   // Output: 12 (a = a + 2)
console.log(a -= 2);   // Output: 10 (a = a - 2)
console.log(a *= 2);   // Output: 20 (a = a * 2)
console.log(a /= 2);   // Output: 10 (a = a / 2)
console.log(a %= 2);   // Output: 0 (a = a % 2)
console.log(a **= 2);  // Output: 0 (a = a ** 2)

/** 
 * 3. Comparison (Relational) Operators
 * -------------------------------------
 * These operators are used to compare two values.
 * - Equal to: `==`
 * - Strict Equal to: `===`
 * - Not equal to: `!=`
 * - Strict Not equal to: `!==`
 * - Greater than: `>`
 * - Less than: `<`
 * - Greater than or equal to: `>=`
 * - Less than or equal to: `<=`
 * 
 * Example:
 */
let num1 = 5;
let num2 = 10;

console.log(num1 == num2);   // Output: false (5 == 10) - Checks if the values are equal
console.log(num1 != num2);   // Output: true (5 != 10) - Checks if the values are not equal
console.log(num1 === 5);     // Output: true (strict comparison) - Checks if the value and type are exactly equal
console.log(num1 !== num2);  // Output: true (strict not equal) - Checks if the value or type is not equal
console.log(num1 > num2);    // Output: false (5 > 10) - Checks if the first value is greater than the second
console.log(num1 < num2);    // Output: true (5 < 10) - Checks if the first value is less than the second
console.log(num1 >= 5);      // Output: true (5 >= 5) - Checks if the first value is greater than or equal to the second
console.log(num1 <= 10);     // Output: true (5 <= 10) - Checks if the first value is less than or equal to the second


/** 
 * 4. Logical Operators
 * ---------------------
 * These operators are used to perform logical operations.
 * - AND: `&&`
 * - OR: `||`
 * - NOT: `!`
 * 
 * Example:
 */
let isActive = true;
let isMember = false;

console.log(isActive && isMember); // Output: false (Both must be true for AND)
console.log(isActive || isMember); // Output: true (One must be true for OR)
console.log(!isActive);            // Output: false (NOT negates the value)

/** 
 * 5. Unary Operators
 * -------------------
 * These operators perform operations on a single operand.
 * - Increment: `++`
 * - Decrement: `--`
 * - Unary negation: `-`
 * - Unary positive: `+`
 * 
 * Example:
 */
let num = 5;

console.log(++num); // Output: 6 (Pre-increment)
console.log(num--); // Output: 6 (Post-decrement), then num becomes 5
console.log(-num);  // Output: -5 (Unary negation)
console.log(+num);  // Output: 5 (Unary positive, no effect)

/** 
 * 6. Ternary Operator
 * --------------------
 * The ternary operator is a shorthand for `if-else` statements.
 * Syntax: condition ? expr1 : expr2
 * If the condition is true, `expr1` is executed; otherwise, `expr2` is executed.
 * 
 * Example:
 */
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);  // Output: Adult

/** 
 * 7. Bitwise Operators
 * ----------------------
 * These operators are used to perform bit-level operations on integers.
 * - AND: `&`
 * - OR: `|`
 * - XOR: `^`
 * - NOT: `~`
 * - Left shift: `<<`
 * - Right shift: `>>`
 * - Zero-fill right shift: `>>>`
 * 
 * Example:
 */
let p = 5;  // 0101 in binary
let q = 3;  // 0011 in binary

console.log(p & q);  // Output: 1 (AND operation: 0101 & 0011 = 0001)
console.log(p | q);  // Output: 7 (OR operation: 0101 | 0011 = 0111)
console.log(p ^ q);  // Output: 6 (XOR operation: 0101 ^ 0011 = 0110)
console.log(~p);     // Output: -6 (NOT operation: ~0101 = -0110)
console.log(p << 1); // Output: 10 (Left shift: 0101 << 1 = 1010)
console.log(p >> 1); // Output: 2 (Right shift: 0101 >> 1 = 0010)
console.log(p >>> 1);// Output: 2 (Zero-fill right shift: 0101 >>> 1 = 0010)

/** 
 * 8. Identity Operator
 * ----------------------
 * - `typeof`: Returns the type of a variable.
 * - `instanceof`: Checks if an object is an instance of a specific class or constructor function.
 * 
 * Example:
 */
let number = 10;
console.log(typeof number);  // Output: "number" (Returns type of variable)

let obj = new Date();
console.log(obj instanceof Date);  // Output: true (Checks if obj is an instance of Date)

/**
 * SUMMARY OF OPERATORS
 * ---------------------
 * - Arithmetic Operators: +, -, *, /, %, **
 * - Assignment Operators: =, +=, -=, *=, /=, %=, **=
 * - Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
 * - Logical Operators: &&, ||, !
 * - Unary Operators: ++, --, -, +
 * - Ternary Operator: ? :
 * - Bitwise Operators: &, |, ^, ~, <<, >>, >>>
 * - Identity Operators: typeof, instanceof
 */
