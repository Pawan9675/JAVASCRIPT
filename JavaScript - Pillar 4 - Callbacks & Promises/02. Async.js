// ************************************************************
// 🔥 ASYNCHRONOUS PROGRAMMING IN JAVASCRIPT - COMPLETE GUIDE 🚀
// ************************************************************

/*
✅ JavaScript is a single-threaded, synchronous language, meaning it executes code line by line, in the order it appears. 
✅ However, it can also handle asynchronous operations using features provided by the JavaScript runtime (browser or Node.js runtime). 
✅ The Runtime provides:
   - **Call Stack** 🏗️ → Handles synchronous execution.
   - **Heap Memory** 🗄️ → Stores variables & objects.
   - **Web APIs** 🌐 → Provides async features (setTimeout, fetch, etc.).
   - **Callback Queue** 📤 → Stores completed async tasks.
   - **Event Loop** 🔄 → Moves tasks from Callback Queue to Call Stack when it's empty.

Let's analyze the execution of **multiple asynchronous functions** with different timers!
*/

// ************************************************************
// 📌 UNDERSTANDING JAVASCRIPT'S PROPERTIES
// ************************************************************

/*
    1️⃣ JavaScript is Synchronous in Nature
    ---------------------------------------
    - JavaScript executes **one operation at a time** in the order it's written (meaning it has only one call stack).
    - It waits for each operation to finish before moving forward means  If an operation takes a long time, it blocks the execution of the next line.
*/

// ✅ Example of Synchronous Code:

console.log("Hi, we are starting");

for(let i = 0; i < 100000000000; i++){
    // Some heavy computation
}

console.log("End");

/*
    🔥 Execution Flow:
    -------------------
    1️⃣ `console.log("Start")` → Executes first, prints `Start`.
    2️⃣ The `for` loop runs, **blocking the Call Stack** (CPU is stuck in this loop).
    3️⃣ `console.log("End")` → Runs **only after** the loop is completed.

    ✅ Final Output:
    ---------------
    Start
    (Loop runs for a long time ⏳)
    End

    ❌ Problem:
    -----------
    - If an operation is slow, it **blocks everything else** from executing.
    - JavaScript needs **Asynchronous Programming** to avoid blocking the UI.
*/

/*
    2️⃣ JavaScript is Single-Threaded 🧵
    -----------------------------------
    - JavaScript has one Call Stack, meaning it can only process one task at a time.
    - JavaScript has only **one execution thread**.
    - It can execute **one piece of code at a time** (inside the Call Stack).
    - This means JavaScript **cannot run multiple tasks in parallel** by itself.

    🛠 Solution to avoid blocking?
    ➡ Use asynchronous features like setTimeout, Promises, and async/await.

    🔥 Why is this important?
    -------------------------
    ✅ JavaScript does not execute code **simultaneously** but still manages to handle 
       multiple operations efficiently using **asynchronous programming**.
*/

// ************************************************************
// 🛠 ROLE OF RUNTIME IN EXECUTING ASYNCHRONOUS CODE
// ************************************************************

/*
    🔥 JavaScript's Runtime Environment
    -----------------------------------
    When we execute JavaScript, it's not just the ECMAScript engine (like V8 in Chrome)
    running the code. The **runtime environment** (like the browser or Node.js) provides:

    ✅ Call Stack
    ✅ Heap Memory
    ✅ Web APIs (Async features like `setTimeout`)
    ✅ Event Queue
    ✅ Event Loop
*/

// ************************************************************
// 📌 Understanding Call Stack, Event Loop, and Task Queue
// ************************************************************

/*
    📌 1️⃣ CALL STACK 🏗️
        - JavaScript has a **single execution thread**.
        - Functions are executed in a **Last In, First Out (LIFO)** manner.
        - If an operation is **blocking** (like loops), the entire execution **halts**.
        - The Call Stack executes synchronous JavaScript code.
        - If a function is called, it is pushed onto the Call Stack.
        - When a function finishes, it is popped off the Call Stack.

    📌 2️⃣ WEB APIs 🌐:
        - Handles async operations like setTimeout(), fetch(), DOM events.
        - Once completed, the callback is moved to the Callback Queue.
        - JavaScript does **not** handle async functions directly.
        - The **runtime environment** (browser/Node.js) provides:
            ✅ `setTimeout()` → Executes after a delay.
            ✅ `fetch()` → Handles HTTP requests.
            ✅ `addEventListener()` → Listens for events.

    3️⃣ Callback Queue:
        - Stores async callbacks (setTimeout, event listeners, fetch callbacks).
        - Callbacks/Tasks **wait** here before moving to the **Call Stack**.

    4️⃣ Event Loop:
        - The Event Loop **constantly checks**:
            ✅ If the **Call Stack is empty**.
            ✅ If the **Callback Queue has tasks**.
            ✅ Moves **one task at a time** from the Callback Queue to the Call Stack.
        - If the Call Stack is empty, it moves tasks from Callback Queue to the Call Stack.
    
    🔥 Important Notes:
        - **Call Stack takes priority** over the Event Loop.
        - **Async tasks are never executed immediately** (even if setTimeout(0) is used).
        - **Blocking operations (e.g., loops) delay async tasks!**
*/

// ************************************************************
// 🏆 UNDERSTANDING ASYNC BEHAVIOR THROUGH EXAMPLES
// ************************************************************

/*
    📌 EXAMPLE 1️⃣ - SIMPLE ASYNCHRONOUS EXECUTION
*/

console.log("Hi");

setTimeout(function fun(){
    console.log("timeout");
}, 5000);

console.log("Bye");

/*
    🔥 Execution Breakdown (Step-by-Step):
    -------------------------------------
    1️⃣ Call Stack:
        - `console.log("Hi")` → Executes immediately, prints `Hi`.
        - `setTimeout()` → Moved to Web APIs, **does not block** the stack.
        - `console.log("Bye")` → Executes immediately, prints `Bye`.
    
    2️⃣ Web APIs:
        - `setTimeout()` is **not part of JavaScript** but is provided by the runtime (browser/Node.js).
        - After `5000ms`, the callback `fun()` moves to the **Event Queue**.
    
    3️⃣ Event Loop:
        - If the **Call Stack is empty**, the **Event Loop** moves `fun()` from the Event Queue to the Call Stack.
        - Callback executes → prints `timeout`.

    ✅ Final Output:
    ---------------
    Hi  
    Bye  
    timeout (after 5 seconds)
*/


// ************************************************************
// ⚡ EXAMPLE 2️⃣ - COMPLEX ASYNC EXECUTION WITH CALL STACK, EVENT QUEUE, AND EVENT LOOP
// ************************************************************

function timeConsumingByLoop() {    
    console.log("Loop starts");
    for(let i = 0; i <= 10000000000; i++){ 
        // Simulating time-consuming operation
    }
    console.log("Loop ends");
}

function timeConsumingByRuntimeFeature() {
    console.log("Timer starts");
    setTimeout(function exec() {
        console.log("Completed the timer!!!");
    }, 5000);
}

console.log("HI");
timeConsumingByLoop();
timeConsumingByRuntimeFeature();
timeConsumingByLoop();
console.log("Bye");

/*
    🔥 Execution Breakdown:
    -----------------------
    1️⃣ Call Stack Execution:
        - `console.log("HI")` → Executes immediately, prints `HI`.
        - `timeConsumingByLoop()` → Executes, blocks the stack for a long time (due to the for loop).
        - `console.log("Loop starts")` → Prints `Loop starts`.
        - `console.log("Loop ends")` → Prints `Loop ends`.
        - `timeConsumingByRuntimeFeature()` → Calls `setTimeout()` and moves it to Web APIs.
        - `console.log("Timer starts")` → Prints `Timer starts`.
        - `timeConsumingByLoop()` → Runs another long loop, **blocking execution** again.
        - `console.log("Bye")` → Prints `Bye`.

    2️⃣ Web API & Event Queue:
        - `setTimeout()` (5000ms) waits in the Web API section.
        - Once completed, its callback `exec()` moves to the **Event Queue**.

    3️⃣ Event Loop:
        - Executes **only when Call Stack is empty!**
        - `exec()` moves from Event Queue to Call Stack and executes → Prints `Completed the timer!!!`

    ✅ Final Output:
    ---------------
    HI  
    Loop starts  
    Loop ends  
    Timer starts  
    Loop starts  
    Loop ends  
    Bye  
    Completed the timer!!! (after 5 seconds)

    ✅ Even though the timer was set for 5s, it executed LATE due to synchronous blocking operations!
*/

// ************************************************************
// ⚡ EXAMPLE 3️⃣ - MULTIPLE TIMERS & EXECUTION ORDER
// ************************************************************

function asyncTask1(){
    console.log("🔥 Timer 1 starts");
    setTimeout(function exec(){
        console.log("✅ Completed Timer 1!!!");
        for(let i = 0; i <= 100000000; i++){
            // Simulating some heavy computation (blocking)
        }
    }, 5000); // 5 seconds delay
}

function asyncTask2(){
    console.log("🚀 Timer 2 starts");
    setTimeout(function exec(){
        console.log("✅ Completed Timer 2!!!");
    }, 0); // 0ms delay (executed ASAP)
}

function asyncTask3(){
    console.log("⏳ Timer 3 starts");
    setTimeout(function exec(){
        console.log("✅ Completed Timer 3!!!");
    }, 200); // 200ms delay
}

// 🔹 Execution Starts
console.log("💡 HI");
asyncTask1();
asyncTask2();
asyncTask3();
console.log("💡 Bye");

/*
 🔥 Execution Breakdown (Step-by-Step) 📖:
 ----------------------------------------

 1️⃣ Call Stack Execution:
    ----------------------
    ✅ `console.log("HI")` → Executes immediately.
    ✅ `asyncTask1()` → Called → Logs "Timer 1 starts".
    ✅ `setTimeout(5000ms)` → Moves to **Web APIs** (doesn't block execution).
    ✅ `asyncTask2()` → Called → Logs "Timer 2 starts".
    ✅ `setTimeout(0ms)` → Moves to **Web APIs**.
    ✅ `asyncTask3()` → Called → Logs "Timer 3 starts".
    ✅ `setTimeout(200ms)` → Moves to **Web APIs**.
    ✅ `console.log("Bye")` → Executes immediately.

 2️⃣ Web API Execution:
    -------------------
    - The 3 `setTimeout` functions **are not part of JavaScript** but handled by the **browser runtime (Web API section)**.
    - Each timer starts counting **independently**.

 3️⃣ Event Loop & Execution Order:
    ------------------------------
    - `setTimeout(0ms)` → Moves to **Callback Queue** immediately.
    - `setTimeout(200ms)` → Moves to **Callback Queue** after 200ms.
    - `setTimeout(5000ms)` → Moves to **Callback Queue** after 5s.

 4️⃣ Callback Queue & Final Execution Order:
    ----------------------------------------
    - The **Event Loop** moves tasks from the Callback Queue to the Call Stack **only when it's empty**.

    ✅ Order of execution:
    1️⃣ **"HI"** (Synchronous)
    2️⃣ **"Timer 1 starts"** (Synchronous)
    3️⃣ **"Timer 2 starts"** (Synchronous)
    4️⃣ **"Timer 3 starts"** (Synchronous)
    5️⃣ **"Bye"** (Synchronous)
    6️⃣ **"Completed Timer 2!!!"** (0ms setTimeout)
    7️⃣ **"Completed Timer 3!!!"** (200ms setTimeout)
    8️⃣ **"Completed Timer 1!!!"** (5s setTimeout - executes last)

 ✅ Final Output:
    ------------
    💡 HI
    🔥 Timer 1 starts
    🚀 Timer 2 starts
    ⏳ Timer 3 starts
    💡 Bye
    ✅ Completed Timer 2!!!
    ✅ Completed Timer 3!!!
    ✅ Completed Timer 1!!! (after 5s)
  
 🔥 Even though Timer 2 had `0ms`, it didn't execute immediately! Why?
    - Because **even 0ms setTimeout() moves to the Web API** first.
    - The Event Loop **executes callbacks only when the Call Stack is empty**.

 🔥 What happens if we add a **blocking loop** inside Timer 1?
    - The entire execution **pauses** until the loop finishes, delaying all pending async tasks!
*/

// ************************************************************
// 🎯 FINAL SUMMARY - UNDERSTANDING ASYNC IN JS
// ************************************************************

/*
✅ JavaScript is **single-threaded** but handles async tasks using **Web APIs**.
✅ The **Call Stack** executes code in order, but async tasks **move to the Callback Queue**.
✅ The **Event Loop** ensures that async callbacks run **only when the Call Stack is empty**.
✅ Timers in `setTimeout()` execute in order based on the **Event Loop**, **not the delay**.
✅ **Blocking operations delay async tasks**, so avoid heavy computation in the main thread.

🔥 **JavaScript's async behavior allows smooth execution without blocking the main thread!** 🚀
*/
