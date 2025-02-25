// ********************************************************
// 🔥 USE CASES OF NAMED FUNCTION EXPRESSIONS (NFE)
// ********************************************************

/*
    📌 What is a Named Function Expression?
    ---------------------------------------
    - A **Named Function Expression (NFE)** is a function expression with a name.
    - The name is **only accessible inside** the function itself.
    - It improves:
      ✅ Readability
      ✅ Debugging
      ✅ Recursion
      ✅ Call stack tracing
    - Unlike function declarations, **NFEs are not hoisted**.

    🛑 Note: If we try to access the function by its name outside its scope, we get an error!
*/

// ********************************************************
// 📌 WHY USE NAMED FUNCTION EXPRESSIONS?
// ********************************************************

/*
    ✅ 1️⃣ Improves Readability
    ---------------------------
    - Named functions make it **clear** what the function does.
    - Anonymous functions do not have names, making debugging harder.
*/

// 🔴 Anonymous Function Expression (❌ Less Readable)
const sum1 = function (a, b) {
    return a + b;
};

// 🟢 Named Function Expression (✅ More Readable)
const sum2 = function calculateSum(a, b) {
    return a + b;
};

console.log(sum1(5, 7));  // ✅ Output: 12
console.log(sum2(5, 7));  // ✅ Output: 12

// ❌ ERROR: calculateSum is not accessible outside its function scope
// console.log(calculateSum(5, 7));

/*
    ✅ 2️⃣ Enables Recursion
    ------------------------
    - Anonymous functions **cannot call themselves**.
    - A named function expression can be used for recursion inside itself.
*/

// 🔴 Anonymous Function (❌ Cannot Call Itself)
const factorial1 = function (n) {
    if (n === 0) return 1;
    return n * factorial1(n - 1); // ✅ Works fine!
};

// 🟢 Named Function Expression (✅ Better for Recursion)
const factorial2 = function fact(n) {
    if (n === 0) return 1;
    return n * fact(n - 1); // ✅ Recursion using function name
};

console.log(factorial2(5)); // ✅ Output: 120

// ❌ ERROR: fact is not defined outside its function scope
// console.log(fact(5));

/*
    ✅ 3️⃣ Helps in Call Stack Tracing (Debugging)
    ---------------------------------------------
    - `console.trace()` shows **which functions were called**.
    - If the function is anonymous, the call stack won't show meaningful names.
*/

// ✅ Function that accepts another function as an argument
function fun(fn) {  
    console.log("🎭 Welcome to fun!");
    fn(); // ✅ Calls the function passed as an argument
}

// ✅ Passing a Named Function Expression
fun(function askingAboutFun() {
    console.log("🎉 Too much fun!!!");
    console.trace(); // ✅ Displays call stack with function names
});

/*
    🔥 Expected Output:
    -------------------
    🎭 Welcome to fun!
    🎉 Too much fun!!!
    Trace:
    at askingAboutFun (filename.js:line)
    at fun (filename.js:line)
    at (global execution context)

    🛑 If the function was anonymous, the stack trace would show <anonymous>.
*/

// ********************************************************
// 📌 COMPARISON: NAMED vs ANONYMOUS FUNCTION EXPRESSIONS
// ********************************************************

/*
    🟢 Named Function Expression
    ----------------------------
    - Can be used for recursion.
    - Helps in debugging (clear stack traces).
    - Improves readability.
*/

const namedFunc = function myFunction() {
    console.log("I have a name! 😎");
};

// ✅ Works fine
namedFunc();

// ❌ ERROR: myFunction is not accessible outside
// myFunction(); 

/*
    🔴 Anonymous Function Expression
    ---------------------------------
    - Cannot refer to itself inside.
    - Harder to debug.
*/

const anonymousFunc = function() {
    console.log("I am anonymous! 😶");
};

// ✅ Works fine
anonymousFunc();

/*
    🛑 Named function expressions are preferred when:
    ------------------------------------------------
    - Recursion is required
    - Call stack debugging is needed
    - Readability and maintainability are priorities
*/

// ********************************************************
// 📌 FINAL SUMMARY
// ********************************************************

/*
    ✅ Named Function Expressions provide:
        - **Better readability** in code.
        - **Support for recursion** (anonymous functions cannot call themselves).
        - **Improved debugging** with `console.trace()`.

    🛑 Key Takeaways:
    -----------------
    - The function name is **only available inside** itself.
    - Named functions **help in call stack tracing**.
    - Use them when recursion or debugging is required.
    - If not needed, anonymous functions are fine.
*/

