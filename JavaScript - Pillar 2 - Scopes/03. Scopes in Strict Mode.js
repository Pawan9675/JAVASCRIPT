// *****************************
// 🔥 SCOPES IN STRICT MODE
// *****************************


/**
 * 📌 Non-Strict Mode (Sloppy Mode)
 * -------------------------------------
 * - In non-strict mode, JavaScript has fewer restrictions and allows certain behaviors that may lead to errors.
 * - Non-strict mode is the default mode in JavaScript.
 * - Example: You can assign a value to an undeclared variable, and JavaScript will implicitly create it in the global scope.
 */

// Example of Non-Strict Mode:
x = 10;  // ✅ No error; x is automatically created in the global scope
console.log(x);  // Output: 10

/**
 * 🔍 Explanation:
 * -------------------------------------
 * - Here, `x` is not explicitly declared with `var`, `let`, or `const`.
 * - JavaScript implicitly creates `x` in the global scope, which can lead to unexpected behavior.
 */

/**
 * 📌 Strict Mode
 * -------------------------------------
 * - Strict mode eliminates silent errors and enforces better practices.
 * - It is enabled by adding `"use strict";` at the top of your script or function.
 * - Strict mode applies several important restrictions, making JavaScript more predictable and secure.
 * - It throws errors where non-strict mode would fail silently.
 */

/**
 * 📌 Important Changes in Strict Mode:
 * -------------------------------------
 * 1️⃣ **Eliminates Silent Errors**: It turns silent errors into explicit errors.
 *      - Example: Assigning a value to an undeclared variable throws an error.
 * 2️⃣ **Optimizations**: Strict mode helps JavaScript engines optimize code, potentially making it run faster.
 * 3️⃣ **Disallows Reserved Keywords**: Future reserved keywords (e.g., `let`, `class`) cannot be used in strict mode.
 * 4️⃣ **Prevents `this` from Referring to Global Object**: In non-strict mode, `this` can refer to the global object in certain cases. In strict mode, `this` is `undefined` when used improperly.
 */

/**
 * 📌 Why Use Strict Mode?
 * -------------------------------------
 * - Helps to **catch mistakes early** (such as using undeclared variables).
 * - Provides **better optimization** for JavaScript engines.
 * - Makes it easier to write **secure** JavaScript code by disallowing some dangerous behaviors.
 * - Avoids future issues as some features could be restricted in future versions of ECMAScript.
 */

/**
 * 📌 How to Enable Strict Mode?
 * -------------------------------------
 * - Strict mode can be enabled by adding `"use strict";` at the beginning of a script or a function.
 * - If applied to a function, strict mode is **local to that function**.
 * - If applied to the script, **all code** within that script will run in strict mode.
 */

// Example of Strict Mode:
"use strict";  // ✅ Enable strict mode globally

x = 10;  // ❌ Error: x is not defined because it's not declared with var, let, or const
console.log(x);  // This won't run due to the error above

/**
 * 🔍 Explanation:
 * -------------------------------------
 * - In strict mode, trying to assign a value to an undeclared variable (x) will throw a `ReferenceError`.
 * - Unlike non-strict mode, strict mode does not allow the implicit creation of global variables.
 */


/**
 * 📌 Strict Mode Inside Functions
 * -------------------------------------
 * - Strict mode can also be applied inside a function to restrict its behavior within that function.
 * - To enable strict mode in a function, add `"use strict";` at the start of the function body.
 */

// Example of Strict Mode Inside a Function:
function test() {
  "use strict";  // ✅ Enable strict mode inside the function
  y = 20;  // ❌ Error: y is not defined because it's not declared with var, let, or const
  console.log(y);
}

test();  // This will throw a ReferenceError due to the undeclared variable y

/**
 * 🔍 Explanation:
 * -------------------------------------
 * - In strict mode, any variable used inside the function must be declared first.
 * - Trying to assign a value to `y` without declaring it causes a `ReferenceError`.
 */

/**
 * 📌 Common Errors in Strict Mode
 * -------------------------------------
 * 1️⃣ **Using undeclared variables**: In strict mode, using a variable without declaring it will throw an error.
 *    - In non-strict mode, the variable is automatically added to the global scope.
 * 2️⃣ **Deleting variables or functions**: You cannot delete variables or functions in strict mode.
 * 3️⃣ **Duplicate parameter names**: Strict mode throws an error if function parameters have duplicate names.
 */

// 📝 Example 1: Undeclared Variable in Strict Mode
"use strict";
x = 5;  // ❌ ReferenceError: x is not defined

// 📝 Example 2: Deleting a Variable
"use strict";
var y = 10;
delete y;  // ❌ SyntaxError: Delete of an unqualified identifier in strict mode

// 📝 Example 3: Duplicate Parameters in Functions
"use strict";
function sum(a, a) {  // ❌ SyntaxError: Duplicate parameter name not allowed in this context
    return a + a;
}

/**
 * 📌 Differences Between Strict and Non-Strict Mode
 * -------------------------------------
 * - In non-strict mode, undeclared variables are automatically created in the global scope. 
 *   In strict mode, this results in a ReferenceError.
 * - Strict mode **disallows** some features like `with` statement, `eval` (unsafe), and `arguments` object modifications.
 * - Strict mode **enforces** rules that improve code quality, like making `this` behave in a more predictable way.
 */

// 📝 Example: Strict Mode Throws Error for `this`
function testThis() {
    "use strict";
    console.log(this);  // ❌ In strict mode, `this` will be `undefined` (in non-strict mode, `this` refers to global object)
}

testThis();

// *************************************************
// 🎯 EXAMPLE 1: Strict Mode vs Non-Strict Mode
// *************************************************

// 📝 Example: Non-Strict Mode (default)
x = 20;  // ✅ Automatically becomes a global variable (non-strict mode)

function demo() {
    console.log(x);  // ✅ Output: 20
}

demo();

// 📝 Example: Strict Mode
"use strict";
function strictDemo() {
    y = 30;  // ❌ ReferenceError: y is not defined
}

strictDemo();  // Throws error because `y` is undeclared

/**
 * 🔍 Key Differences:
 * -------------------------------------
 * - In non-strict mode, JavaScript silently creates `x` as a global variable.
 * - In strict mode, `y` must be explicitly declared before use, or a ReferenceError will occur.
 */

// *************************************************
// 💡 Key Points about Strict Mode
// *************************************************

/**
 * 📌 Key Benefits of Strict Mode:
 * -------------------------------------
 * 1️⃣ Helps catch **common coding mistakes** early (e.g., forgetting to declare variables).
 * 2️⃣ Improves **performance** by allowing JavaScript engines to optimize the code better.
 * 3️⃣ **Makes debugging easier** due to clearer error messages.
 * 4️⃣ Prevents the use of **future reserved keywords**.
 */

// 📝 Example: Reserved Keywords in Strict Mode
"use strict";
// var let = 5;  // ❌ SyntaxError: Unexpected strict mode reserved word

/**
 * 📌 Conclusion:
 * -------------------------------------
 * Strict mode is a useful tool for writing cleaner, more optimized, and error-free JavaScript code. 
 * It’s highly recommended to enable it in both scripts and functions to avoid subtle bugs and make your code more predictable.
 */