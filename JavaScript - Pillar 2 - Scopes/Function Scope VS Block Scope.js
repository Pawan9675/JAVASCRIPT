// *************************************************
// 🔥 FUNCTION AND BLOCK SCOPE IN JAVASCRIPT (DETAILED NOTES)
// *************************************************

/**
 * 📌 What is Scope?
 * -------------------------------------
 * - **Scope** refers to the context in which a variable or function is accessible in your code.
 * - In JavaScript, there are three primary types of scope:
 *      1. **Global Scope**: Variables accessible throughout the entire code.
 *      2. **Function Scope**: Variables accessible only within the function where they are declared.
 *      3. **Block Scope**: Variables accessible only within the block `{}` they are declared in (e.g., inside loops, if-statements).
 */

/**
 * 📌 Function Scope in JavaScript
 * -------------------------------------
 * - **Function Scope** means that a variable declared inside a function is only accessible within that function.
 * - If a variable is declared using `var`, it is **function-scoped**, meaning it can be accessed anywhere inside the function but not outside.
 * - Variables declared with `let` or `const` behave similarly to `var` within a function but are still **block-scoped**.
 */

/**
 * 📌 Function Scope Example
 * -------------------------------------
 */

// Example 1: `var` in function scope
function exampleFunction() {
    var functionScopedVar = "Hello from inside function!";
    console.log(functionScopedVar);  // ✅ Accessible inside function
}

exampleFunction();
// console.log(functionScopedVar);  // ❌ Error: functionScopedVar is not defined outside function

/**
 * Explanation:
 * 1️⃣ The variable `functionScopedVar` is declared inside `exampleFunction` using `var`.
 * 2️⃣ This makes it **function-scoped**. It can be accessed inside the function.
 * 3️⃣ Trying to access it outside the function will result in a **ReferenceError** since it is not available outside the function.
 */

// Example 2: `let` and `const` inside function scope
function anotherFunction() {
    let functionScopedLet = "Hello from let inside function!";
    const functionScopedConst = "Hello from const inside function!";
    console.log(functionScopedLet);  // ✅ Accessible inside function
    console.log(functionScopedConst);  // ✅ Accessible inside function
}

anotherFunction();
// console.log(functionScopedLet);  // ❌ Error: functionScopedLet is not defined outside function
// console.log(functionScopedConst);  // ❌ Error: functionScopedConst is not defined outside function

/**
 * Explanation:
 * 1️⃣ Both `let` and `const` are **block-scoped**, but they still behave like `var` within a function: they are **function-scoped**.
 * 2️⃣ These variables cannot be accessed outside the function, resulting in a **ReferenceError** if accessed outside.
 */

/**
 * 📌 Block Scope in JavaScript
 * -------------------------------------
 * - **Block Scope** refers to variables declared inside a block (e.g., inside loops, if-statements) being accessible only within that block.
 * - Variables declared with `let` or `const` are **block-scoped**.
 * - `var` does not follow block scope. It is function-scoped, so it is accessible outside the block if declared inside a function.
 */

/**
 * 📌 Block Scope Example
 * -------------------------------------
 */

// Example 1: `let` and `const` inside block scope
if (true) {
    let blockScopedLet = "I'm inside an if block!";
    const blockScopedConst = "I'm inside an if block with const!";
    console.log(blockScopedLet);  // ✅ Accessible inside block
    console.log(blockScopedConst);  // ✅ Accessible inside block
}

// console.log(blockScopedLet);  // ❌ Error: blockScopedLet is not defined outside block
// console.log(blockScopedConst);  // ❌ Error: blockScopedConst is not defined outside block

/**
 * Explanation:
 * 1️⃣ Both `let` and `const` are **block-scoped**.
 * 2️⃣ They are accessible only inside the block `{}` in which they are declared.
 * 3️⃣ Trying to access them outside the block leads to a **ReferenceError**.
 */

// Example 2: `var` inside block (Function Scope Behavior)
if (true) {
    var functionScopedVar = "I'm inside an if block with var!";
    console.log(functionScopedVar);  // ✅ Accessible inside block
}

console.log(functionScopedVar);  // ✅ Accessible outside block, because `var` is function-scoped

/**
 * Explanation:
 * 1️⃣ The variable `functionScopedVar` is declared inside the block using `var`.
 * 2️⃣ Since `var` is **function-scoped**, it is accessible outside the block if declared within a function.
 * 3️⃣ Unlike `let` and `const`, `var` **does not respect block scoping**, meaning it can be accessed even outside the block.
 */

/**
 * 📌 Key Differences Between Function Scope and Block Scope
 * -------------------------------------
 * 1️⃣ **Function Scope (with `var`):**
 *      - Variables are **accessible anywhere inside the function**.
 *      - They are **not** accessible outside the function.
 * 2️⃣ **Block Scope (with `let` and `const`):**
 *      - Variables are only accessible **within the block** `{}` they are declared in.
 *      - They are **not accessible** outside the block, even within functions.
 */

// *************************************************
// 📝 SUMMARY OF FUNCTION AND BLOCK SCOPES
// *************************************************

/**
 * **Function Scope (using `var`)**:
 * - Variables are accessible anywhere inside the function, even after the block they are declared in.
 * - They are **not accessible outside the function**.
 *
 * **Block Scope (using `let` or `const`)**:
 * - Variables are accessible only inside the block `{}` they are declared in.
 * - They are **not accessible outside the block**, even inside functions.
 */

/**
 * 📌 **Key Takeaways:**
 * -------------------------------------
 * - **`var`** is function-scoped, meaning variables declared with `var` can be accessed inside the entire function, but not outside.
 * - **`let`** and **`const`** are block-scoped, which means they are confined to the block in which they are declared.
 * - Always prefer **`let`** and **`const`** over `var` for better scoping control and to avoid accidental leakage.
 */