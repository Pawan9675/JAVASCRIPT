/**
 * UNARY OPERATORS IN JAVASCRIPT
 * ==============================
 * Unary operators perform operations on a single operand. 
 * They are typically used to modify the value of a variable or convert it to another type.
 * 
 * The primary unary operators are:
 * 1. Postfix Increment (`a++`)
 * 2. Prefix Increment (`++a`)
 * 3. Postfix Decrement (`a--`)
 * 4. Prefix Decrement (`--a`)
 * 5. Unary Plus (`+a`)
 * 6. Unary Negation (`-a`)
 * 7. Logical NOT (`!a`)
 * 8. `typeof` (Check the type of the operand)
 * 9. `void` (Returns `undefined` for an expression)
 * 10. `delete` (Deletes a property from an object)
 */

/**
 * 1. POSTFIX INCREMENT (a++)
 * ---------------------------
 * - Increments the value of `a` by 1 but returns the value **before** the increment.
 * - The operand's current value is used in the expression before it is updated.
 * - This is useful when you need to use the current value but increment the variable for the next operation.
 */

// Example:
let a = 5;
let b = a++; // b gets the old value of a, then a is incremented
console.log("a:", a, "b:", b); // Output: a: 6, b: 5

a++; // Increment a by 1
console.log("a:", a, "b:", b); // Output: a: 7, b: 5

/*
Explanation:
- `b` gets the value of `a` before the increment, which is 5, and then `a` is incremented to 6.
- After the first `console.log()`, `a` becomes 6, and `b` remains 5 because `b` was assigned the old value of `a`.
*/

console.log("--------");

/**
 * 2. PREFIX INCREMENT (++a)
 * ---------------------------
 * - Increments the value of `a` by 1 and **returns the new value** of `a`.
 * - The operand is incremented first, and its updated value is then used in the expression.
 * - This is useful when you want to increment the variable and use its new value immediately.
 */

// Example:
let x = 5;
let y = ++x; // x is incremented first, then y gets the new value of x
console.log("x:", x, "y:", y); // Output: x: 6, y: 6

x++; // Increment x by 1
console.log("x:", x, "y:", y); // Output: x: 7, y: 6

/*
Explanation:
- `x` is incremented first, then the new value of `x` (which is 6) is assigned to `y`.
- After the first `console.log()`, both `x` and `y` are 6 because `y` received the incremented value of `x`.
*/

console.log("--------");

/**
 * 3. POSTFIX DECREMENT (a--)
 * ---------------------------
 * - Decrements the value of `a` by 1 but returns the value **before** the decrement.
 * - The operand's current value is used in the expression before it is updated.
 * - Useful when you need to use the current value but decrease the variable for the next operation.
 */

// Example:
let p = 5;
let q = p--; // q gets the old value of p, then p is decremented
console.log("p:", p, "q:", q); // Output: p: 4, q: 5

p--; // Decrement p by 1
console.log("p:", p, "q:", q); // Output: p: 3, q: 5

/*
Explanation:
- `q` gets the value of `p` before the decrement, which is 5, and then `p` is decremented to 4.
- After the first `console.log()`, `p` becomes 4, and `q` remains 5 because `q` was assigned the old value of `p`.
*/

console.log("--------");

/**
 * 4. PREFIX DECREMENT (--a)
 * ---------------------------
 * - Decrements the value of `a` by 1 and **returns the new value** of `a`.
 * - The operand is decremented first, and its updated value is then used in the expression.
 * - Useful when you want to decrement the variable and use its new value immediately.
 */

// Example:
let m = 5;
let n = --m; // m is decremented first, then n gets the new value of m
console.log("m:", m, "n:", n); // Output: m: 4, n: 4

m--; // Decrement m by 1
console.log("m:", m, "n:", n); // Output: m: 3, n: 4

/*
Explanation:
- `m` is decremented first, then the new value of `m` (which is 4) is assigned to `n`.
- After the first `console.log()`, both `m` and `n` are 4 because `n` received the decremented value of `m`.
*/

console.log("--------");

/**
 * 5. UNARY PLUS (+a)
 * ------------------
 * - Converts the operand to a number, if it is not already a number.
 * - If the operand is already a number, the value remains unchanged.
 * - This is commonly used to convert strings representing numbers into actual numeric values.
 */

// Example:
let numStr = "10";
let num = +numStr; // Converts the string "10" into the number 10
console.log(num); // Output: 10

/*
Explanation:
- The unary plus `+` operator is used to convert the string `"10"` to the number `10`.
- If the operand is already a number, the unary plus has no effect on it.
*/

console.log("--------");

/**
 * 6. UNARY NEGATION (-a)
 * -----------------------
 * - Negates the value of `a`, converting positive numbers to negative and vice versa.
 * - If the operand is not a number, JavaScript tries to convert it into a number before negating.
 * - This is often used to change the sign of a number.
 */

// Example:
let num1 = 5;
let num2 = -num1; // Negates the value of num1
console.log(num2); // Output: -5

/*
Explanation:
- The unary negation `-` changes the value of `num1` from `5` to `-5`.
- This operator changes the sign of the number, flipping positive to negative and vice versa.
*/

console.log("--------");

/**
 * 7. LOGICAL NOT (!a)
 * ---------------------
 * - Converts the operand to a boolean and returns the inverse value.
 * - If `a` is truthy, `!a` returns `false`; if `a` is falsy, `!a` returns `true`.
 * - Commonly used for boolean checks or conditionals.
 */

// Example:
let flag = true;
let negFlag = !flag; // Negates the boolean value of flag
console.log(negFlag); // Output: false

/*
Explanation:
- The logical NOT `!` operator inverts the boolean value of `flag`.
- Since `flag` is `true`, `!flag` returns `false`.
*/

console.log("--------");

/**
 * 8. TYPEOF (typeof a)
 * ----------------------
 * - Returns a string indicating the type of the operand.
 * - Commonly used to check the data type of variables.
 */

// Example:
let name = "John";
console.log(typeof name); // Output: string

/*
Explanation:
- The `typeof` operator returns a string that describes the type of `name`, which is `string` in this case.
*/

console.log("--------");

/**
 * 9. VOID (void a)
 * -----------------
 * - Evaluates the expression and returns `undefined`.
 * - Often used when you want to execute an expression for its side effects but don't care about the result.
 */

// Example:
let result = void 0; // Evaluates 0 and returns undefined
console.log(result); // Output: undefined

/*
Explanation:
- The `void` operator evaluates the expression and always returns `undefined`.
- In this case, `0` is evaluated but the result is `undefined`.
*/

console.log("--------");

/**
 * 10. DELETE (delete a)
 * -----------------------
 * - Deletes a property from an object or an element from an array.
 * - It returns `true` if the property was deleted, or `false` if the property does not exist.
 */

// Example:
let person = { name: "Alice", age: 25 };
delete person.age; // Deletes the 'age' property from the person object
console.log(person); // Output: { name: 'Alice' }

/*
Explanation:
- The `delete` operator removes the `age` property from the `person` object.
- After the deletion, the `person` object contains only the `name` property.
*/

console.log("--------");

/**
 * SUMMARY OF UNARY OPERATORS:
 * ---------------------------
 * 1. **Postfix Increment (`a++`)**: Increments `a` by 1, but returns the old value.
 * 2. **Prefix Increment (`++a`)**: Increments `a` by 1 and returns the new value.
 * 3. **Postfix Decrement (`a--`)**: Decrements `a` by 1, but returns the old value.
 * 4. **Prefix Decrement (`--a`)**: Decrements `a` by 1 and returns the new value.
 * 5. **Unary Plus (`+a`)**: Converts `a` to a number (or leaves it unchanged if already a number).
 * 6. **Unary Negation (`-a`)**: Negates `a` (changes the sign).
 * 7. **Logical NOT (`!a`)**: Inverts the boolean value of `a`.
 * 8. **Typeof (`typeof a`)**: Returns the type of `a`.
 * 9. **Void (`void a`)**: Returns `undefined` for the expression.
 * 10. **Delete (`delete a`)**: Deletes a property from an object.
 */
