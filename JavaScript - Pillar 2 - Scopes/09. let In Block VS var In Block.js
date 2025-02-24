// *************************************************
// 🔥 LET AND VAR IN BLOCK: UNDERSTAND BLOCK SCOPE
// *************************************************

/**
 * 📌 `let` in Block (Block Scope)
 * -------------------------------------
 * - **`let`** is **block-scoped**, meaning the variable is only available inside the block `{}` where it's defined.
 * - Trying to access the variable before it's declared results in a **Temporal Dead Zone (TDZ)**, causing an error.
 * - This behavior is also called **Temporal Dead Zone (TDZ)**, which prevents the variable from being accessed before it is initialized.
 * - `let` is useful when you want to limit a variable's visibility to just a block (like inside loops or conditionals).
 */

/**
 * 📌 Example 1: `let` inside a block (with Temporal Dead Zone)
 * -------------------------------------
 * In this example, we declare a block-scoped variable `content` inside a function.
 * If we try to access it before the declaration, a **ReferenceError** will be thrown due to the Temporal Dead Zone (TDZ).
 */

console.log(teacher);  // Undefined due to hoisting
var teacher = "Pulkit";  // `teacher` is function-scoped or global-scoped

function fun() {
    console.log(teacher);    // No error, logs: "Pulkit" (due to hoisting and var)
    console.log(content);    // Throws error: Temporal Dead Zone (TDZ) -> ReferenceError
    
    var teacher = "pulkit";  // `teacher` is now in function scope
    let content = "JS";      // `content` is block-scoped (TDZ behavior here)
    
    if (content == "JS") {
        let hours = "120+";   // `hours` is block-scoped
        console.log(hours);   // Logs: "120+"
        console.log(content); // Logs: "JS"
    }
    
    console.log(teacher);   // Logs: "pulkit" (function-scoped)
    console.log(content);   // Throws error: ReferenceError (TDZ for block-scoped `content`)
    console.log(hours);     // Throws error: ReferenceError (not accessible outside block)
}

fun();

console.log(teacher);  // Logs: "Pulkit" (global scope)
console.log(content);  // Throws error: ReferenceError (not defined outside `fun()`)

/**
 * Explanation:
 * 1️⃣ **TDZ (Temporal Dead Zone)**: 
 *    - Variables declared with `let` and `const` are hoisted but remain uninitialized until their declaration is reached.
 *    - Trying to access them before the initialization results in an error.
 *    - This is what we call the **Temporal Dead Zone**.
 * 2️⃣ The variable `content` is hoisted to the top of the `fun()` function but is in the TDZ until it's initialized.
 * 3️⃣ Inside the `if` block, `hours` is declared with `let`, so it's only accessible within the block.
 *    - Attempting to access it outside the block will throw a **ReferenceError**.
 */

/**
 * 📌 Temporal Dead Zone (TDZ) in JavaScript
 * -------------------------------------
 * **TDZ (Temporal Dead Zone)** refers to the period between the entering of the scope and the actual declaration of a `let` or `const` variable.
 * During this time, the variable cannot be accessed.
 * 
 * The reason for this behavior is that JavaScript **hoists** variables, meaning it moves them to the top of their scope.
 * However, unlike `var`, `let` and `const` are not initialized until their declaration line is reached.
 * If you try to access them before that, you'll get a **ReferenceError**.
 * 
 * This helps avoid bugs that arise when trying to access variables before they are initialized.
 */

/**
 * 📌 Example: TDZ in Action
 * -------------------------------------
 * Let's see how trying to access a `let` variable before its declaration causes a TDZ error.
 */

function tdzExample() {
    console.log(myVariable);  // Throws: ReferenceError: Cannot access 'myVariable' before initialization

    let myVariable = "Hello!";
}

tdzExample();

/**
 * Explanation:
 * 1️⃣ The `let` variable `myVariable` is hoisted to the top of the block, but it’s not initialized until its declaration.
 * 2️⃣ Attempting to access it before its initialization throws a **ReferenceError** because of the Temporal Dead Zone.
 * 3️⃣ The error occurs because we tried to access `myVariable` before the line where it is actually initialized.
 */

/**
 * 📌 `var` in Block (Function Scope)
 * -------------------------------------
 * - Unlike `let`, **`var`** is not block-scoped. It is either **function-scoped** or **globally scoped** if declared outside any function.
 * - Even if declared inside a block, the `var` variable behaves as if it were declared in the enclosing function, not the block.
 * - **`var`** can be problematic in large code due to this behavior.
 */

/**
 * 📌 Example 1: `var` inside a block (Function Scope Behavior)
 * -------------------------------------
 * Let's see how `var` behaves differently from `let` when used inside blocks.
 */

function example() {
    var i = 5;
    while (i < 10) {
        var x = i;  // `x` is function-scoped, not block-scoped
        i++;
    }
    
    console.log(x);  // Logs: 9, because `x` is accessible anywhere in the function, even outside the loop
}

example();

/**
 * Explanation:
 * 1️⃣ The `x` variable is declared inside the while loop, but since it is declared using `var`, 
 *    it is function-scoped and accessible anywhere inside the `example()` function, even after the loop.
 * 2️⃣ If we had used `let` instead of `var`, `x` would have been **block-scoped** and not accessible outside the loop.
 */

/**
 * 📌 Example 2: `var` inside a block (Global Scope Behavior)
 * -------------------------------------
 * Here, we demonstrate how `var` behaves when declared outside any function (global scope).
 * It will behave as a global variable, not restricted to the block.
 */

let j = 1;
console.log(y);  // Logs: undefined, because `y` is hoisted to the top of the function scope

while (j < 5) {
    var y = 10;  // `y` is globally scoped, even though it's inside a block
    j++;
}

console.log(y);  // Logs: 10, because `y` is globally scoped and accessible after the loop finishes

/**
 * Explanation:
 * 1️⃣ `y` is declared using `var`, so even though it is inside the `while` loop (a block), 
 *    it is **globally scoped** because it's not inside a function.
 * 2️⃣ The `while` loop doesn't affect the scope of `y` since `var` ignores block scoping and treats `y` as a global variable.
 */

// *************************************************
// 📝 KEY TAKEAWAYS FROM THIS EXAMPLE
// *************************************************

/**
 * **Let in Block (Block Scope):**
 * - Variables declared with `let` inside a block are only accessible within that block.
 * - They can't be accessed before their declaration, which leads to a **ReferenceError** due to the **Temporal Dead Zone (TDZ)**.
 * 
 * **Var in Block (Function Scope):**
 * - Variables declared with `var` are not block-scoped, but function-scoped.
 * - This means a `var` declared inside a block will still be accessible outside that block if it is within a function.
 * - If declared globally, it is globally scoped and can be accessed anywhere in the program.
 */

/**
 * **Which to Use:**
 * - Use **`let`** for block-scoped variables when you want to limit the scope to a specific block.
 * - Use **`const`** for values that should not be reassigned.
 * - Avoid **`var`** unless absolutely necessary, because it can introduce unintended side effects due to its function-scoping behavior.
 */

// *************************************************
// 📌 SUMMARY OF `LET` AND `VAR` IN BLOCKS
// *************************************************

/**
 * **Key Differences Between `let` and `var`:**
 * - **`let`**: Block-scoped. Variables declared with `let` are confined to the block `{}` where they are declared and cannot be accessed before their initialization (due to TDZ).
 * - **`var`**: Function-scoped. Variables declared with `var` are either function-scoped or globally scoped. They are accessible outside the block if declared inside a function or globally.
 *
 * **Which One to Use:**
 * - Prefer **`let`** or **`const`** for block scoping to avoid accidental variable leakage and improve code readability.
 * - Avoid using **`var`** unless you need function-level scoping, as it can cause unexpected behavior when used inside blocks.
 */
