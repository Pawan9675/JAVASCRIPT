// ************************************************************
// 🔥 JAVASCRIPT CALLBACK FUNCTION - COMPLETE GUIDE
// ************************************************************

/*
    📌 WHAT IS A CALLBACK FUNCTION?
    -----------------------------------
    - A **callback function** is a function that is **passed as an argument** to another function.
    - The **receiving function (Higher Order Function)** then calls the callback function at some point.
    - This allows for **flexibility** in function execution.

    🔥 Why use Callbacks?
    ---------------------
    ✅ To **execute a function later**, after another function has completed.
    ✅ To **handle asynchronous operations** (like fetching data from APIs).
    ✅ To **avoid duplicating code** by passing behavior as an argument.
*/

// ************************************************************
// 📌 EXAMPLE 1: SIMPLE CALLBACK FUNCTION
// ************************************************************

function fun(x, callbackFn) {
    for (let i = 0; i < x; i++) {
        console.log(i);
    }
    callbackFn(); // Calling the callback function
}

// ✅ Passing a callback function
fun(5, function exec() {
    console.log("I am being executed.");
});

/*
    🔥 Explanation:
    --------------
    - The `fun()` function executes a loop from `0` to `x-1`.
    - After the loop, it calls `callbackFn()`, executing whatever function was passed.
*/

// ************************************************************
// 📌 EXAMPLE 2: CALLBACK FUNCTION IN `setTimeout()`
// ************************************************************

/*
    🔥 Understanding `setTimeout()`
    -------------------------------
    - `setTimeout()` is a built-in JavaScript function that **delays execution**.
    - It takes **two arguments**:
        1️⃣ A function (callback) to execute after the delay.
        2️⃣ A time (in milliseconds) after which the function runs.
*/

setTimeout(function exec() {
    console.log("I am running after 4 seconds!");
}, 4000);

/*
    🔥 Explanation:
    --------------
    - The function `exec()` will be executed **after 4000 milliseconds (4 seconds)**.
    - JavaScript doesn't **pause** execution but schedules the function **asynchronously**.
*/

// ************************************************************
// 📌 EXAMPLE 3: CALLBACK FUNCTION IN ARRAY METHODS
// ************************************************************

const numbers = [1, 2, 3, 4, 5];

/*
    🔥 The `forEach()` method
    -------------------------
    - It loops over an array and executes the callback function for each element.
*/

numbers.forEach(function (num) {
    console.log("Processing number:", num);
});

/*
    🔥 Explanation:
    --------------
    - The `forEach()` method takes a callback function.
    - It passes each array element (`num`) to the function.
*/

// ************************************************************
// 📌 PROBLEMS WITH CALLBACK FUNCTIONS
// ************************************************************

/*
    🚨 PROBLEM 1: CALLBACK HELL (Pyramid of Doom)
    ---------------------------------------------
    - When using multiple nested callbacks, the code becomes **hard to read**.
    - This is often called **Callback Hell** or **Pyramid of Doom**.
*/

// ❌ BAD PRACTICE: Callback Hell Example
setTimeout(() => {
    console.log("Task 1 complete.");
    setTimeout(() => {
        console.log("Task 2 complete.");
        setTimeout(() => {
            console.log("Task 3 complete.");
            setTimeout(() => {
                console.log("Task 4 complete.");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

/*
    🔥 Problem:
    -----------
    - Too many nested callbacks create a **"pyramid shape"**, making it hard to read & maintain.
    - Hard to debug and modify.
*/

/*
    🚨 PROBLEM 2: INVERSION OF CONTROL
    ----------------------------------
    - **Inversion of Control** happens when we pass control of function execution to another function.
    - We do **not** control when or how the callback function will be executed.
*/

// 📌 Example of Inversion of Control
function doTask(callbackFn, x) {
    // Function written by Team A
    callbackFn(x * x); // Executing callback function with `x*x`
    callbackFn(x * x);
}

// Function written by Team B
doTask(function exec(num) {
    console.log("Whoa! num is:", num);
}, 5);

/*
    🔥 Problem:
    -----------
    - Team A wrote `doTask()`, and we (Team B) don't know exactly **how it executes our function**.
    - We are **giving control** to someone else's function, which may not behave as expected.
    - This can lead to **bugs and unexpected behavior**.
*/

// ************************************************************
// 📌 SOLUTIONS TO CALLBACK PROBLEMS 🚀
// ************************************************************

/*
    ✅ Solution 1: Use Promises to Avoid Callback Hell
    --------------------------------------------------
    - Promises provide a **cleaner** way to handle async tasks.
    - Instead of passing callbacks, we use `.then()` and `.catch()`.
*/

// 🔥 Converting Callback Hell into Promises
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 complete.");
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 complete.");
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 complete.");
            resolve();
        }, 1000);
    });
}

task1().then(task2).then(task3);

/*
    ✅ Benefits of Promises:
    ------------------------
    - **Removes nested callbacks** (avoiding Callback Hell).
    - **Improves readability** and maintainability.
    - **Gives control back to the user** (avoiding Inversion of Control).
*/

/*
    ✅ Solution 2: Use Async/Await for Even Cleaner Code
    ----------------------------------------------------
    - `async/await` is a **modern way** to handle asynchronous code.
    - It makes the code look **synchronous** and is easier to understand.
*/

// 🔥 Using Async/Await
async function runTasks() {
    await task1();
    await task2();
    await task3();
}

runTasks();

/*
    ✅ Benefits of Async/Await:
    ---------------------------
    - **Code looks sequential** (easier to read & debug).
    - **No nested callbacks** (cleaner than Promises).
    - **No need for `.then()` chains**.
*/

// ************************************************************
// 📌 FINAL SUMMARY - EVERYTHING IN ONE PLACE!
// ************************************************************

/*
    ✅ CALLBACK FUNCTION IN A NUTSHELL:
        - A **callback function** is a function **passed as an argument** to another function.
        - It is **executed later** by the receiving function.
        - Used for **asynchronous operations** and **higher-order functions**.

    ✅ PROBLEMS WITH CALLBACKS:
        - ❌ Callback Hell (Too many nested functions).
        - ❌ Inversion of Control (Giving execution control to another function).

    ✅ SOLUTIONS:
        - 🔥 Use **Promises** instead of deeply nested callbacks.
        - 🔥 Use **Async/Await** for even better readability.

    🚀 Callbacks are powerful but should be used carefully to avoid messy code! 🎯
*/
