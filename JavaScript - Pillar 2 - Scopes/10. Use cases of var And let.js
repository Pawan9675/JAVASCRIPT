// *****************************************
// 🔥 UNDERSTANDING `var` vs `let` IN JAVASCRIPT
// *****************************************

/**
 * JavaScript has two commonly used ways to declare variables: `var` and `let`.
 *
 * ✅ `var`: Global or function-scoped (DOES NOT respect block scope)
 * ✅ `let`: Block-scoped (Respects block scope)
 * ✅ `const`: Similar to `let`, but the value cannot be reassigned (not covered here)
 *
 * Let's explore these differences with **real-world examples**.  
 */

// *********************************
// 📌 `var` - FUNCTION SCOPED
// *********************************

/**
 * 🔥 Important Characteristics of `var`:
 * ---------------------------------------
 * ✅ `var` is **global-scoped** if declared outside any function.
 * ✅ `var` is **function-scoped** if declared inside a function.
 * ✅ It IGNORES block scope `{}` inside loops, conditionals, etc.
 * ✅ It allows RE-DECLARATION within the same scope.
 * ✅ Variables declared with `var` are HOISTED (moved to the top) but initialized as `undefined`.
 */

/**
 * 📌 Example 1: `var` ignores block scope
 * ---------------------------------------
 */

function varCase1(x) {
    let i;  // Declare `i` before using it (scoped properly)
    if (x % 2 == 0) {
        i = 0;
    } else {
        i = 1;
    }
    console.log(i); // Logs: 0 (for even numbers) or 1 (for odd numbers)
}
varCase1(4);  // Logs: 0

function varCase2(x) {
    if (x % 2 == 0) {
        var i = 0;  // `var` is function-scoped
    } else {
        var i = 1;  // The same `i` is redeclared here
    }
    console.log(i);  // ✅ Logs: 0 (for even numbers) or 1 (for odd numbers) - accessible outside the block
}
varCase2(4);  // Logs: 0

/**
 * 🔍 Observation:
 * - In `varCase2`, `i` is accessible outside the `if` block because `var` is function-scoped.
 * - In contrast, `let` (used in `varCase1`) keeps the variable properly scoped inside the block.
 */

/**
 * 📌 Example 2: `var` allows re-declaration
 * ----------------------------------------
 */

var x = 10;
var x = 12;  // ✅ No error, re-declaration is allowed.

console.log(x); // Logs: 12

// ❌ `let` does not allow re-declaration:
// let y = 10;
// let y = 12;  // ❌ SyntaxError: Identifier 'y' has already been declared.

/**
 * 🔍 Why avoid re-declaration?
 * - If you accidentally redeclare a variable using `var`, it may override a previous value.
 * - This can lead to **hard-to-find bugs** in large codebases.
 */

/**
 * 📌 Example 3: `var` in loops
 * ----------------------------
 */

function varExample2() {
    for (var i = 0; i < 5; i++) {
        // Some logic
    }
    console.log(i);  // ✅ Logs: 5 (i is accessible outside the loop)
}
varExample2();

/**
 * 🔍 Problem:
 * - The variable `i` was declared **inside** the loop but is still accessible **outside**.
 * - This is because `var` does not respect block scope.
 */

// *********************************
// 📌 `let` - BLOCK SCOPED
// *********************************

/**
 * 🔥 Important Characteristics of `let`:
 * ---------------------------------------
 * ✅ `let` is **block-scoped**, meaning it is accessible ONLY inside the `{}` block where it is declared.
 * ✅ It prevents accidental overwriting by disallowing re-declaration.
 * ✅ It is NOT hoisted like `var` (but exists in a "Temporal Dead Zone" until declared).
 * ✅ It is preferable for loops, conditionals, and temporary variables.
 */

/**
 * 📌 Example 1: `let` respects block scope
 * ---------------------------------------
 */

function letExample1() {
    if (true) {
        let num = 42;
        console.log(num); // ✅ Logs: 42 (inside the block)
    }
    console.log(num); // ❌ ReferenceError: num is not defined (outside the block)
}
letExample1();

/**
 * 🔍 What happened?
 * - `let` ensures that `num` is accessible **only** inside the `if` block.
 * - This prevents unintended access to the variable outside its scope.
 */

/**
 * 📌 Example 2: `let` in loops
 * ----------------------------
 */

function letExample2() {
    for (let j = 0; j < 5; j++) {
        // Some logic
    }
    console.log(j);  // ❌ ReferenceError: j is not defined (block-scoped)
}
letExample2();

/**
 * 🔍 Why is `let` better here?
 * - `let` limits the scope of `j` to the loop itself.
 * - This prevents accidental modifications outside the loop.
 */

/**
 * 📌 Example 3: `let` for swapping variables
 * -----------------------------------------
 */

function letExample3(a, b) {
    if (a > b) {
        let temp = a; // Temporary variable exists ONLY inside this block
        a = b;
        b = temp;
    }
    console.log(`After swap: a = ${a}, b = ${b}`);
}

letExample3(10, 20);

/**
 * 🔍 Why use `let` here?
 * - The `temp` variable is only needed **inside** the `if` block.
 * - `let` ensures it does not exist outside the block, keeping code clean.
 */

// *********************************
// 📌 TEMPORAL DEAD ZONE (TDZ)
// *********************************

/**
 * ❌ Accessing `let` variables **before** declaration leads to an error.
 * This period is called the **Temporal Dead Zone (TDZ)**.
 */

function tdzExample() {
    console.log(myVar);  // ✅ `undefined` (due to hoisting)
    var myVar = "Hello";

    console.log(myLet);  // ❌ ReferenceError (because `let` is in TDZ)
    let myLet = "Hi";
}

tdzExample();

/**
 * 🔥 What is TDZ (Temporal Dead Zone)?
 * - The time between the **beginning of a scope** and the actual **declaration** of a `let` variable.
 * - Accessing a `let` variable before declaration **throws an error**.
 *
 * ✅ `var` is hoisted (moved to the top) and initialized with `undefined`.
 * ✅ `let` is hoisted but NOT initialized (exists in TDZ until assigned a value).
 */

// *********************************
// 📝 SUMMARY: `var` vs `let`
// *********************************

/**
 * 🚀 Prefer `let` over `var` in modern JavaScript!
 *
 * ✅ **Use `let` when:**
 *    - You need a block-scoped variable.
 *    - You want to avoid accidental re-declarations.
 *    - You're working with loops or temporary variables inside a block.
 *
 * ❌ **Avoid `var` because:**
 *    - It is either **function-scoped or global-scoped**.
 *    - It allows re-declaration, which can lead to bugs.
 *    - It ignores block `{}` scope, leading to unexpected behavior.
 *
 * ⭐ Conclusion: Use `let` for better scoping control and maintainability.
 */

