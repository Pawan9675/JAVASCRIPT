// ***************************************************
// 🔥 Function in Block
// ***************************************************

/*
1️⃣. **Function in Non-Strict Mode Block:**
   - **Non-strict mode** allows a function defined inside a block to be accessible outside the block.
   - Functions do not receive block-scoping in non-strict mode.
   - They are **global-scoped** or **function-scoped**, which means they can be accessed from anywhere in the code, even outside the block in which they are defined.
   - This behavior is common in older versions of JavaScript (pre-ES6) and can cause unintentional global variables.
*/

// Example: Function in Non-Strict Mode Block
{
    function fun(){
        return "123";
    }
}
console.log(fun); // ✅ Accessible globally, prints "123"

/*
**Explanation (Non-Strict Mode):**
------------------------------------
1. The function `fun()` is defined inside a block. However, since we're in **non-strict mode** (default mode), the function still gets **global-scoped**.
2. JavaScript allows `fun()` to be accessed outside the block, meaning that the function behaves like it was defined in the global scope.
3. Therefore, when `console.log(fun)` is called outside the block, it prints "123" because the function is globally accessible.

*/ 

/*
2️⃣. **Function in Strict Mode Block:**
   - In **strict mode**, functions inside a block get **block-scoping**.
   - This means the function is only accessible within the block and is **not available outside**.
   - **Strict mode** helps avoid global variable leaks and makes the code more predictable by limiting variable and function visibility.
   - It enforces a stricter standard for JavaScript code, preventing certain actions that could lead to unexpected behavior.
*/

// Example: Function in Strict Mode Block
"use strict";

{
    // Function is scoped within the block
    function fun(){
        return "123";
    }
    console.log(fun); // ✅ Accessible within the block, prints "123"
}

console.log(fun); // ❌ ReferenceError: fun is not defined outside the block

/*
**Explanation (Strict Mode):**
---------------------------------
1. In **strict mode**, the function `fun()` is scoped **within the block** in which it is defined.
2. As a result, `fun()` is **not accessible outside the block**, and trying to access it outside will throw a **ReferenceError**.
3. In the `console.log(fun)` inside the block, the function works as expected and prints "123".
4. However, when `console.log(fun)` is called outside the block, JavaScript throws an error because `fun` is no longer accessible due to strict mode enforcing **block-level scoping**.

*/

// 📝 **Summary of Function in Block Scoping:**
/*
1. **Non-Strict Mode (Default Mode):**
   - Functions inside a block are treated as **global-scoped** or **function-scoped**.
   - They can be accessed anywhere in the code, including outside the block.
   - This can lead to unintended global variable creation and makes it harder to manage variable scope in large applications.

2. **Strict Mode:**
   - Functions inside a block are **block-scoped**.
   - They are **not accessible** outside the block, preventing function leakage into the global scope.
   - Strict mode improves security and maintainability of code by enforcing stricter rules for scoping and variable declarations.
*/

// ✅ **Key Takeaways:**
/*
- **Non-strict mode** makes functions defined inside blocks globally accessible.
- **Strict mode** restricts functions to the block in which they are defined, preventing accidental leakage to the global scope.
- Always consider using **strict mode** for better scoping control and to avoid errors from unexpected global variables.
*/
