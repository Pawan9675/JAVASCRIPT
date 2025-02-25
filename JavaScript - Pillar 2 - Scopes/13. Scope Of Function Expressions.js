// ********************************************************
// 🔥 FUNCTION EXPRESSION SCOPE IN JAVASCRIPT (DETAILED)
// ********************************************************

/**
 * 📌 Scope in Function Expressions
 * --------------------------------
 * - A **function expression** assigns a function to a variable.
 * - If the function is **named**, the function name is **only available inside** the function's own scope.
 * - The variable to which the function is assigned can be used to call the function **outside**.
 * - This is different from **function declarations**, which are hoisted globally.
 */

// ********************************************************
// 📌 NAMED FUNCTION EXPRESSION & ITS SCOPE
// ********************************************************

/**
 * ✅ Named Function Expression:
 * -----------------------------
 * - A function with a **name**, assigned to a variable.
 * - The function name is **only accessible inside** the function itself.
 * - Outside the function, we can call it only using the variable.
 */

const f = function fun() {
    console.log("🎉 So much funnnnn!!!");
    
    // ✅ This works because fun() is accessible inside itself.
    fun();
};

// ✅ Calling using 'f'
f(); 

// ❌ ERROR: fun is not defined in the global scope.
// fun(); 

/**
 * 🔥 Why Does This Happen?
 * -------------------------
 * - The function **fun** is only available inside the function body.
 * - Outside the function, we must call it using **f** (the assigned variable).
 * - This is a part of **scoping rules** in JavaScript.
 *
 * 🛑 IMPORTANT:
 * --------------
 * - **f is globally scoped.** ✅ (Accessible anywhere)
 * - **fun is function-scoped to f.** ❌ (Not accessible outside f)
 *
 * 🔍 When calling fun() inside itself, recursion works.
 * 💡 But calling fun() outside f will result in an error.
 */

// ********************************************************
// 📌 UNDERSTANDING FUNCTION SCOPE IN FUNCTION EXPRESSIONS
// ********************************************************

/**
 * ✅ Function Expression Scope Breakdown:
 * --------------------------------------
 * - `f` is **global-scoped** (since it's declared with const in the global scope).
 * - `fun` is **only available inside f** (it is function-scoped).
 */

const f2 = function innerFunction() {
    console.log("🔥 Function inside function!");

    // ✅ Works fine (innerFunction is accessible inside itself)
    innerFunction();
};

// ✅ Works fine (f2 is accessible globally)
f2();

// ❌ ERROR: innerFunction is not accessible outside f2
// innerFunction();

/**
 * 🔥 Summary of Scope in Function Expressions:
 * --------------------------------------------
 * 1️⃣ **Function Name Scope**:
 *    - If a function is named inside a function expression, its name is available **only inside** the function.
 *
 * 2️⃣ **Variable Scope**:
 *    - The variable holding the function is **global or block-scoped** depending on `var`, `let`, or `const`.
 *
 * 3️⃣ **Recursion Inside Function Expression**:
 *    - Named function expressions allow recursion inside themselves using the function name.
 *
 * 4️⃣ **Access Outside Scope**:
 *    - The function variable (`f`) allows access, but the inner function name (`fun`) does not.
 */

// ********************************************************
// 📌 EXAMPLES OF FUNCTION EXPRESSION SCOPING ISSUES
// ********************************************************

/**
 * ✅ Example 1: Anonymous Function Expression Scope
 * - An anonymous function does not have an internal name.
 */

const anonymousFunc = function() {
    console.log("Hello from an anonymous function!");
    
    // ❌ ERROR: Cannot call itself because there's no function name
    // anonymousFunc();
};

anonymousFunc(); // ✅ Works fine

/**
 * ✅ Example 2: Named Function Expression & Recursion
 */

const factorial = function fact(n) {
    if (n === 0) return 1;
    
    // ✅ Works fine (fact() is available inside itself)
    return n * fact(n - 1);
};

console.log(factorial(5)); // ✅ Output: 120

// ❌ ERROR: fact is not defined outside the function
// console.log(fact(5));

/**
 * ✅ Example 3: Function Expressions with Block Scope
 * - `let` and `const` create **block-scoped** function variables.
 */

if (true) {
    const blockFunction = function() {
        console.log("Block-scoped function!");
    };

    blockFunction(); // ✅ Works fine inside the block
}

// ❌ ERROR: blockFunction is not defined outside the block
// blockFunction();

/**
 * ✅ Example 4: Function Expression in Loops (Scope Issue)
 */

for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Var Loop i:", i); // ❌ Outputs 3, 3, 3 (Due to var's function scope)
    }, 1000);
}

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Let Loop i:", i); // ✅ Outputs 0, 1, 2 (Due to let's block scope)
    }, 1000);
}

/**
 * ✅ Example 5: Passing Function Expressions as Arguments
 */

function executeFunction(fn) {
    fn();
}

executeFunction(function() {
    console.log("Function Expression as an Argument!");
});

/**
 * ✅ Example 6: Assigning Function Expression to Object Properties
 */

const obj = {
    method: function() {
        console.log("Method inside object!");
    }
};

obj.method(); // ✅ Works fine

// ********************************************************
// 📌 FINAL SUMMARY
// ********************************************************

/**
 * ✅ Function expressions create functions assigned to variables.
 * ✅ Named function expressions have an **internal name** but are not available globally.
 * ✅ Anonymous function expressions have **no internal name**.
 * ✅ Function expressions follow **scope rules**:
 *    - The assigned variable (like `f`) is **global/block-scoped**.
 *    - The function name (like `fun`) is **function-scoped**.
 * ✅ Named function expressions allow **recursion** inside themselves.
 * ✅ Use function expressions for **callbacks, modularity, and scope control**.
 * ✅ Anonymous function expressions are useful in **event handlers and setTimeout**.
 * ✅ `let` and `const` help avoid scope-related issues in loops and blocks.
 *
 * 🚀 RULE OF THUMB:
 * -----------------
 * - **Use function expressions** when functions are dynamic.
 * - **Use named function expressions** when recursion is needed.
 * - **Be mindful of scoping issues** with function expressions.
 */

