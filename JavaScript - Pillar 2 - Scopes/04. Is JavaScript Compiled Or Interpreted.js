// *************************************************
// 🔥 IS JAVASCRIPT COMPILED OR INTERPRETED?
// *************************************************

/**
 * 📌 **JavaScript Execution Model:**
 * -------------------------------------
 * - JavaScript is both a **compiled** and **interpreted** language. 
 * - It is **compiled** in the sense that the code is parsed, analyzed, and turned into an intermediate representation.
 * - It is **interpreted** in the sense that the compiled code is executed line-by-line by the JavaScript engine.
 * - JavaScript executes code in two phases: **Parsing (Compilation Phase)** and **Execution (Interpretation Phase)**.
 */

/*
JavaScript is a combination of compiled and interpreted language. Here's how it works:

1. Compiled Phase (Parsing Phase):
    - The JavaScript engine scans the entire code, performing tasks like allocating memory for variables, hoisting function declarations, and checking for syntax errors.
    - JavaScript is not fully compiled before execution but goes through a compilation phase that prepares the code for execution. If there are any syntax issues, they are caught here.

2. Interpreted Phase (Execution Phase):
    - After parsing, the code is executed line by line.
    - Variables are assigned values, and functions are executed.
    - The engine runs the program and produces the output based on the code.
*/

/**
 * 📝 **Example 1:**
 * -------------------
 * Interpreted Nature of JavaScript
 */

// Example Code:

console.log("hi");  // ✅ Will execute successfully
console.lo("hello");  // ❌ Will throw an error due to a typo
console.log("bye");  // ✅ Will execute successfully

/*
**Output:**
---------------------------------
hi
Error: console.lo is not a function

**Explanation:**
---------------------------------
1. Parsing Phase:
     - The JavaScript engine scans the code.
     - During this phase, the console.log() is correctly identified as a function.
     - However, when it encounters console.lo, it recognizes this as a syntax issue (undefined function).

2. Execution Phase:
     - The first console.log("hi") is executed successfully and printed.
     - When JavaScript reaches console.lo("hello"), it doesn't throw an error during parsing because it is just scanning for syntax errors. 
       However, during execution, the engine encounters the error because the function console.lo does not exist. 
       This is where JavaScript's interpreted nature comes into play—it executes the code line by line, throwing errors when it reaches invalid syntax or undefined functions.

Conclusion for Example 1:
---------------------------------
JavaScript in this case is behaving as an interpreted language, throwing an error during runtime when it encounters something it can't execute (console.lo).
*/

/**
 * 📝 **Example 2:**
 * -------------------
 * Compiled Nature of JavaScript (Syntax Error)
 */

// Example Code:

console.log("hi");  // ✅ Will execute successfully
// console..log("hello");  // ❌ Will throw a syntax error due to a typo
console.log("bye");  // ✅ Will execute successfully

/*
**Output:**
---------------------------------
Error: Unexpected token. (on the second line)

**Explanation:**
---------------------------------
1. Parsing Phase:
     - The JavaScript engine scans through the code.
     - In this case, the error occurs in the parsing phase itself. When the engine encounters console..log("hello");, it sees an invalid syntax (..), which is not allowed. 
       This error is detected during parsing.

2. Execution Phase:
     - Since the error is detected before execution, the engine does not proceed to the execution phase and immediately throws the error at the point of detection.
     - Therefore, the console.log("hi"); will not be executed, and the program will halt.

Conclusion for Example 2:
---------------------------------
JavaScript in this case behaves as a compiled language, detecting the syntax error before execution and preventing further execution of the code.
*/

/**
 * 📌 **Conclusion:**
 * ------------------------
 * JavaScript behaves both as a compiled and interpreted language:
 * Interpreted Phase: Errors that happen during the execution (like calling an undefined function) are caught while the code is being executed line by line.
 * Compiled Phase: Syntax errors (like a typo in function calls) are detected during the parsing phase before execution, halting the process early.
 * JavaScript engines like V8 (Chrome) mix these two approaches for better performance and optimization.
 */
