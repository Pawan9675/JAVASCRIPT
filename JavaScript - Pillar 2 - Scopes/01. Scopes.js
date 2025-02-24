// *************************************************
// 🔥 SCOPES IN JAVASCRIPT (DETAILED NOTES)
// *************************************************

/**
 * 📌 What is Scope?
 * -------------------------------------
 * - Scope defines **where a variable or function is accessible**.
 * - It determines **the visibility of variables** inside a JavaScript program.
 * - In simple terms: **Where can I use this variable/function?**
 */

/**
 * 📌 What does Scope Control?
 * -------------------------------------
 * - Where variables & functions are **declared**.
 * - Where variables & functions are **accessible**.
 * - How long variables & functions **exist** in memory.
 */

/**
 * 📌 How do Variables Work in JavaScript?
 * -------------------------------------
 * Every variable in JavaScript is used in **two ways**:
 *   1️⃣ It is assigned a **value**.
 *   2️⃣ Its **value** is retrieved and used somewhere.
 */

// *************************************************
// 🚀 COMPILED VS INTERPRETED LANGUAGE
// *************************************************

/**
 * 📌 Is JavaScript a Compiled or Interpreted Language?
 * -------------------------------------
 * ❌ JavaScript is **not purely compiled**.
 * ❌ JavaScript is **not purely interpreted**.
 * ✅ JavaScript is **both compiled and interpreted**.
 *
 * 📌 How JavaScript Executes Code? (Two Phases)
 * -------------------------------------
 * 1️⃣ **Parsing Phase (Compilation Phase)**
 *      - The JS engine scans the entire code.
 *      - It allocates memory for:
 *              a. Variables (var variables get undefined).
 *              b. Function declarations (hoisted entirely).
 *      - Syntax errors are checked in this phase.
 *      - The program does not execute yet.
 *      - Key Thing: Variables declared with var are given undefined, while let and const are stored in the "Temporal Dead Zone" (TDZ) and cannot be accessed before declaration.
 *
 * 2️⃣ **Execution Phase (Interpretation Phase)**
 *      - Code is executed **line by line**.
 *      - Variables are **assigned values**.
 *      - Functions are **executed**.
 *      - Key Thing: Any reference to let or const before initialization causes a ReferenceError.
 */

// *************************************************
// 🎯 EXAMPLE 1: Parsing Phase vs Execution Phase
// *************************************************

// 📝 Example 1
var teacher = "Rahul";

function fun() {
    var teacher = "Manish";
    content = "Software Engineer"; // ❗ Auto-globalling (Explained later)
    console.log(teacher);
}

function gun() {
    var student = "Pawan";
    console.log(student);
}

fun();
gun();
console.log(teacher);

/**
 * 🔍 Parsing Phase (Compilation Step-by-Step)
 * -------------------------------------
 * - `teacher` (global variable) is **declared**.
 * - `fun()` function is **stored** in memory.
 * - `gun()` function is **stored** in memory.
 * - Variables inside functions (`teacher` inside `fun` & `student` inside `gun`) are **declared** but **not assigned** values.
 *
 * 🔥 Execution Phase (Step-by-Step)
 * -------------------------------------
 * 1️⃣ `teacher` is assigned `"Rahul"`.
 * 2️⃣ `fun()` is called:
 *     - Local `teacher` is assigned `"Manish"`.
 *     - `content` is **implicitly created** (Auto-globalling).
 * 3️⃣ `gun()` is called:
 *     - Local `student` is assigned `"Pawan"`.
 * 4️⃣ Global `teacher` is printed (`"Rahul"`).
 */


// **************************************************************
// 🎯 EXAMPLE 2: Parsing Phase vs Execution Phase (Step-by-Step)
// **************************************************************

console.log(teacher);  // ❌ Output: undefined (Hoisted but not initialized)

var teacher = "Rahul";  // ✅ Now assigned

function fun() {
    var teacher = "Manish";  // ✅ Function-scoped
    content = "JS";  // ❗ Auto-globalling
    console.log(teacher);
}

function gun() {
    var student = "Pawan";  // ✅ Function-scoped
    console.log(student);
}

// console.log(content);  // ❌ ReferenceError: content is not defined
fun();
gun();
console.log(teacher);  // ✅ Output: "Rahul"
console.log(content);  // ✅ Output: "JS" (Created due to auto-globalling)

/**
 * 🔍 Parsing Phase (Compilation)
 * -------------------------------------
 * 1️⃣ `teacher` variable is **declared**.
 * 2️⃣ `fun()` function is **stored** in memory.
 * 3️⃣ `gun()` function is **stored** in memory.
 * 4️⃣ Inside `fun()`, `teacher` (local) and `content` are **declared but not assigned**.
 * 5️⃣ Inside `gun()`, `student` is **declared but not assigned**.
 *
 * 🔥 Execution Phase (Step-by-Step)
 * -------------------------------------
 * 1️⃣ `console.log(teacher)` → `undefined` (Hoisted but not initialized).
 * 2️⃣ `teacher = "Rahul"` → Assigned in global scope.
 * 3️⃣ `fun()` is called:
 *     - `teacher = "Manish"` inside `fun()` (Local scope).
 *     - `content = "JS"` (Auto-globalling! Created in global scope).
 * 4️⃣ `gun()` is called:
 *     - `student = "Pawan"` inside `gun()` (Local scope).
 * 5️⃣ `console.log(teacher)` → `"Rahul"` (Global variable).
 * 6️⃣ `console.log(content)` → `"JS"` (Auto-globalling created it globally).
 */


// *************************************************
// 💡 AUTO-GLOBALLING (Execution Phase Behavior)
// *************************************************

/**
 * 🔥 What is Auto-Globalling?
 * -------------------------------------
 * - When a **variable is used without declaration**, JavaScript automatically **creates** it in the **global scope**.
 * - This only happens during the **execution phase**.
 * - If accessed **before assignment**, it gives an error.
 */

// Example:
console.log(content);  // ❌ ReferenceError: content is not defined

function fun() {
    content = "JavaScript";  // ❗ No `var`, `let`, or `const` → Auto-globalling!
    console.log(content);
}
fun();
console.log(content);  // ✅ Output: "JavaScript"

// ******************************************
// 🔹 TYPES OF SCOPES IN JAVASCRIPT
// ******************************************

/**
 * 📌 1. Global Scope
 * -------------------------------------
 * - Variables declared **outside any function or block**.
 * - Accessible anywhere in the file.
 */

let name = "Pawan"; // ✅ Global Scope

function fun() {
    console.log(name);  // ✅ Accessible inside function
}

fun();
console.log(name);  // ✅ Accessible outside function

/**
 * 📌 2. Function Scope
 * -------------------------------------
 * - Variables declared inside a function are **only accessible inside that function**.
 * - `var` is **function-scoped**, so it is **accessible anywhere inside the function**.
 * - `let` and `const` are **block-scoped**, so they are only accessible within the block `{}`.
 */

function exampleFunction() {
    var functionScopedVar = "Hello";
    console.log(functionScopedVar);  // ✅ Accessible inside function
}

// console.log(functionScopedVar);  // ❌ Error: Not accessible outside function

/**
 * 📌 3. Block Scope
 * -------------------------------------
 * - Variables declared with `let` and `const` inside `{}` are only accessible inside the block.
 * - `var` does **not** have block scope.
 */

if (true) {
    let blockScopedVar = 10;
    var functionScopedVar = 20;
}

// console.log(blockScopedVar);  // ❌ Error: Block scope
console.log(functionScopedVar);  // ✅ Works! Because `var` is function-scoped, not block-scoped.

/**
 * 📌 4. Module Scope (ES6+)
 * -------------------------------------
 * - Variables declared inside a module are **only available inside that module**.
 * - Use `export` and `import` to access them in other files.
 */

// In file1.js:
export let moduleVariable = "I'm a module-scoped variable!";

// In file2.js:
// import { moduleVariable } from './file1.js';
// console.log(moduleVariable);  // ✅ Works!

