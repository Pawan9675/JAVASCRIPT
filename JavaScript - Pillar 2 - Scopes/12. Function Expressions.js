// ********************************************************
// 🔥 FUNCTION EXPRESSIONS & IIFE IN JAVASCRIPT (DETAILED)
// ********************************************************

/**
 * 📌 What is a Function Expression?
 * --------------------------------
 * - A function expression is a way to define a function as a value and assign it to a variable.
 * - Unlike function declarations, function expressions are **NOT hoisted**.
 * - Function expressions can be **named** or **anonymous**.
 * - They can be **immediately invoked** using IIFE.
 * - Useful for **scoping**, **modularity**, and **encapsulation**.
 */

// ********************************************************
// 📌 FUNCTION DECLARATION VS FUNCTION EXPRESSION
// ********************************************************

/**
 * ✅ Function Declaration:
 * ------------------------
 * - Declares a function with a name.
 * - Starts with the `function` keyword.
 * - **Hoisted** (Can be called before definition).
 */

function sayHello() {
    console.log("Hello, world!");
}

sayHello(); // ✅ Works fine

/**
 * ✅ Function Expression:
 * -----------------------
 * - Function assigned to a variable.
 * - Starts with a variable (`let`, `const`, `var`).
 * - **Not hoisted** (Must be defined before calling).
 */

const sayHi = function() {
    console.log("Hi there!");
};

sayHi(); // ✅ Works fine

// sayHiBefore(); ❌ ERROR: Cannot access 'sayHiBefore' before initialization
const sayHiBefore = function() {
    console.log("I was declared after calling!");
};


/**
 * 🔥 Key Differences:
 * -------------------
 * 1️⃣ Function declarations are **hoisted**, function expressions are **not**.
 * 2️⃣ Function expressions are used when functions are needed **dynamically**.
 * 3️⃣ Function expressions can be **anonymous** or **named**.
 */


// **********************************************
// 📌 TYPES OF FUNCTION EXPRESSIONS
// **********************************************

/**
 * 1️⃣ Anonymous Function Expression
 *    - A function **without a name** assigned to a variable.
 *
 * 2️⃣ Named Function Expression
 *    - A function **with a name** assigned to a variable.
 */

// ********************************************************
// 📌 ANONYMOUS FUNCTION EXPRESSION
// ********************************************************

/**
 * ✅ Anonymous Function Expression:
 * - A function **without a name**, assigned to a variable.
 * - Useful when a function doesn't need to reference itself.
 */

const greet = function() {
    console.log("Good Morning! ☀️");
};

greet(); // ✅ Works fine

// ********************************************************
// 📌 NAMED FUNCTION EXPRESSION
// ********************************************************

/**
 * ✅ Named Function Expression:
 * - A function **with a name**, assigned to a variable.
 * - The name is **only accessible inside the function**.
 */

const namedGreet = function greetMe() {
    console.log("Good Evening! 🌙");
};

// ✅ Works fine
namedGreet(); 

// greetMe(); ❌ ERROR: Not accessible outside the function

/**
 * 🔥 Key Takeaways:
 * -----------------
 * - The function `greetMe` is only accessible **inside** itself.
 * - Outside, we can only access it via `namedGreet`, not `greetMe`.
 */

// ********************************************************
// 📌 USE CASES OF FUNCTION EXPRESSIONS
// ********************************************************

/**
 * ✅ Use Case 1: Callback Functions
 * - Function expressions are commonly used in callbacks.
 */

setTimeout(function() {
    console.log("⏳ 2 seconds later... Time's up!");
}, 2000);

/**
 * ✅ Use Case 2: Storing Functions in Data Structures
 */

const operations = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { return a - b; }
};

console.log(operations.add(5, 3));  // ✅ Output: 8
console.log(operations.subtract(5, 3));  // ✅ Output: 2

// ********************************************************
// 📌 DIFFERENT FUNCTION EXPRESSIONS
// ********************************************************

/**
 * ✅ Named Function Expression:
 * - A function assigned to a variable **with a name**.
 * - Can only be referenced **inside** the function.
 */

let f = function gun() { 
    console.log("This is a named function expression.");
};

f(); // ✅ Works fine
// gun(); ❌ ERROR: Not accessible outside the function

/**
 * ✅ Anonymous Function Expression:
 * - A function assigned to a variable **without a name**.
 * - Commonly used when the function name isn't needed.
 */

let A = function() { 
    console.log("This is an anonymous function expression.");
};

A(); // ✅ Works fine

/*
📌 FUNCTION EXPRESSION USING PARENTHESES
--------------------------------------------
*/

/**
 * ✅ Function Expressions Wrapped in Parentheses:
 * - When a function is enclosed in parentheses, it is **still a function expression**.
 * - The first valid piece of code here is **parentheses**, making it a function expression.
 */

// Named Function Expression inside Parentheses
(function x() { 
    console.log("Named function inside parentheses.");
})();

// Anonymous Function Expression inside Parentheses
(function() { 
    console.log("Anonymous function inside parentheses.");
})();

/**
 * ✅ Arrow Function Expression:
 * - Shorter syntax for function expressions.
 * - Implicit return when used with one expression.
 */

let Y = () => { 
    console.log("Arrow function expression.");
};

Y(); // ✅ Works fine

// ********************************************************
// 🔥 IIFE - IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// ********************************************************

/**
 * ✅ IIFE (Immediately Invoked Function Expression)
 * ----------------------------------------------
 * - A function that runs as soon as it is defined.
 * - It is **wrapped in parentheses** and **immediately executed**.
 * - **Does not pollute the global scope**.
 * 
 * 📌 Structure:
 * (function() {
 *      // Code inside the IIFE
 * })();
 * 
 */

(function() {
    console.log("🚀 IIFE executed immediately!");
})();

/**
 * ✅ IIFE with Parameters:
 */

(function(name) {
    console.log("Hello, " + name + "!");
})("Pawan");

/**
 * ✅ IIFE with Return Value:
 */

const sum = (function(a, b) {
    return a + b;
})(5, 10);

console.log(sum); // ✅ Output: 15

// ********************************************************
// 📌 WHY USE IIFE? USE CASES
// ********************************************************

/**
 * ✅ Use Case 1: Avoid Global Namespace Pollution
 * - Variables inside an IIFE do not affect the global scope.
 */

(function() {
    let localVar = "I am local!";
    console.log(localVar);
})();

// console.log(localVar); ❌ ERROR: Not defined in global scope

/**
 * ✅ Use Case 2: Private Variables & Encapsulation
 */

const counter = (function() {
    let count = 0;  // Private variable
    return {
        increment: function() {
            count++;
            console.log("Count:", count);
        }
    };
})();

counter.increment(); // ✅ Output: Count: 1
counter.increment(); // ✅ Output: Count: 2

/**
 * ✅ Use Case 3: Avoid Conflicts in Function Naming
 */

function fun() {
    console.log("Hello from fun()");
} 

(function fun(y) { // This 'fun' is different from global 'fun'
    console.log("Hi", y);
})("Pawan");

fun(); // ✅ Calls the global fun()

/**
 * ✅ Use Case 4: Dynamic Function Execution
 */

function f() {
    return "Function F";
}

function g() {
    return "Function G";
}

var i = 10;

// ✅ Using IIFE to decide which function to call
var res = (function evaluate(i) {
    return i % 2 === 0 ? g() : f();
})(i);

console.log(res); // ✅ Output: "Function G"

// ********************************************************
// 📌 FINAL SUMMARY
// ********************************************************

/**
 * ✅ Function expressions are assigned to variables and **NOT hoisted**.
 * ✅ Function expressions can be **named** or **anonymous**.
 * ✅ IIFE (Immediately Invoked Function Expression) runs **immediately** when defined.
 * ✅ Function expressions are useful for **modularity**, **scoping**, and **encapsulation**.
 * ✅ Use IIFE when you need **immediate execution** without polluting the global scope.
 *
 * 🚀 RULE OF THUMB:
 * -----------------
 * - **Use function declarations** when you need a reusable function.
 * - **Use function expressions** when defining functions dynamically.
 * - **Use IIFE** when you need **immediate execution** without polluting the global scope.
 */

