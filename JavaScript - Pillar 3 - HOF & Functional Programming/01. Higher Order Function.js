// ********************************************************
// 🔥 HIGHER-ORDER FUNCTIONS (HOF) - THE COMPLETE GUIDE
// ********************************************************

/*
    📌 WHAT ARE HIGHER-ORDER FUNCTIONS (HOF)?
    -----------------------------------------
    - A **Higher-Order Function (HOF)** is a function that:
        ✅ Takes another function as an **argument**.
        ✅ Returns another function as **output**.
    
    🔥 WHY USE HIGHER-ORDER FUNCTIONS?
    -----------------------------------
    - **Reusability**: Avoid code duplication by writing modular functions.
    - **Abstraction**: Hides unnecessary details and focuses on logic.
    - **Functional Programming**: Makes JavaScript more powerful.
    - **Callbacks & Asynchronous Operations**: Used in event listeners, promises, and async programming.

    🛑 KEY PROPERTIES OF HOFs:
    -------------------------
    ✅ A function that **accepts another function** as a parameter.
    ✅ A function that **returns another function**.
    ✅ Can be **anonymous** or **named** functions.
*/

// ********************************************************
// 📌 EXAMPLE 1: A FUNCTION TAKING ANOTHER FUNCTION AS ARGUMENT (HOF)
// ********************************************************

function f(x, fn) {
    /*
        * x  -> normal variable
        * fn -> function passed as an argument
    */
    console.log("Received value:", x);
    console.log("Received function:", fn);
    fn(); // ✅ Executing the function passed as an argument
}

// ✅ Passing a function as an argument
f(10, function exec() {
    console.log("👋 Hi, I am a function expression passed to a HOF!");
});

/*
    🔥 OUTPUT:
    ----------
    Received value: 10
    Received function: [Function: exec]
    👋 Hi, I am a function expression passed to a HOF!
*/

/*
    🛑 Here, `f` is a **higher-order function** because it:
        - Accepts a function `fn` as an argument.
        - Calls the function inside it.
*/

// ********************************************************
// 📌 EXAMPLE 2: A FUNCTION RETURNING ANOTHER FUNCTION (HOF)
// ********************************************************

function outerFunction() {
    console.log("Outer function called! 🚀");
    
    return function innerFunction() {
        console.log("Inner function executed! 🎉");
    };
}

// ✅ Call the outer function and store the returned function
const inner = outerFunction(); 

// ✅ Execute the returned function
inner();

/*
    🔥 OUTPUT:
    ----------
    Outer function called! 🚀
    Inner function executed! 🎉

    🛑 Here, `outerFunction` is a **higher-order function** because it:
        - Returns another function.
        - The returned function can be executed later.
*/

// ********************************************************
// 📌 EXAMPLE 3: FUNCTION FACTORY (RETURNING DIFFERENT FUNCTIONS)
// ********************************************************

function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // ✅ Output: 10
console.log(triple(5));  // ✅ Output: 15

/*
    🔥 HOW DOES THIS WORK?
    ----------------------
    - `multiplier(2)` returns a function that multiplies numbers by 2.
    - `multiplier(3)` returns a function that multiplies numbers by 3.
    - We can use `double()` and `triple()` as reusable functions.
*/

// ********************************************************
// 📌 EXAMPLE 4: USING HOFs IN ARRAY METHODS (MAP, FILTER, REDUCE)
// ********************************************************

const numbers = [1, 2, 3, 4, 5];

// 🟢 MAP: Transforms each element of the array
const doubled = numbers.map(function (num) {
    return num * 2;
});
console.log(doubled); // ✅ Output: [2, 4, 6, 8, 10]

// 🟢 FILTER: Returns only the elements that pass a condition
const evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // ✅ Output: [2, 4]

// 🟢 REDUCE: Reduces an array to a single value
const sum = numbers.reduce(function (acc, num) {
    return acc + num;
}, 0);
console.log(sum); // ✅ Output: 15

/*
    🔥 WHY ARE THESE HIGHER-ORDER FUNCTIONS?
    ---------------------------------------
    - `map`, `filter`, and `reduce` take a **function** as an argument.
    - They apply that function to each element in the array.
    - They return **a new array or a value** based on the logic inside the passed function.
*/

// ********************************************************
// 📌 EXAMPLE 5: CALLBACK FUNCTIONS & ASYNCHRONOUS OPERATIONS
// ********************************************************

// 🟢 Using a callback in a function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

greet("Pawan", function () {
    console.log("This is a callback function executing.");
});

/*
    🔥 OUTPUT:
    ----------
    Hello, Pawan!
    This is a callback function executing.
*/

// 🟢 Using setTimeout (Higher-Order Function)
setTimeout(function () {
    console.log("This runs after 2 seconds! ⏳");
}, 2000);

/*
    🔥 Here, `setTimeout` is a **Higher-Order Function** because:
        - It takes a function as an argument.
        - It executes that function after a delay.
*/

// ********************************************************
// 📌 EXAMPLE 6: FUNCTION COMPOSITION USING HOFs
// ********************************************************

function add(x) {
    return function (y) {
        return x + y;
    };
}

const addFive = add(5);
console.log(addFive(10)); // ✅ Output: 15

/*
    🔥 WHY FUNCTION COMPOSITION?
    ----------------------------
    - We create smaller, reusable functions.
    - They can be combined to build more complex logic.
*/

// ********************************************************
// 📌 FINAL SUMMARY
// ********************************************************

/*
    ✅ HIGHER-ORDER FUNCTIONS:
        - Accept a **function as an argument**.
        - OR return a **function as output**.
        - Make code **reusable, readable, and efficient**.
    
    ✅ COMMON USE CASES:
        - Array methods like `map`, `filter`, and `reduce`.
        - Function factories that create multiple utility functions.
        - Callbacks for event handling or asynchronous operations.
        - Function composition (creating reusable logic).

    🔥 HOFs make JavaScript more powerful, cleaner, and functional!
*/

