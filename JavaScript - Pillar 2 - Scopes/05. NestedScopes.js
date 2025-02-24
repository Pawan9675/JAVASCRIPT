// *************************************************
// 🔥 NESTED SCOPES
// *************************************************

/**
 * 📌 **Nested Scopes Explanation:**
 * -----------------------------------
 * - JavaScript has a hierarchical scope model.
 * - **Nested scopes** refer to a function defined inside another function.
 * - Variables declared in an inner function can access variables from outer functions but not the other way around.
 * - The scope chain is created at runtime and follows this rule:
 *     - A variable is first searched in the current scope.
 *     - If not found, it is searched in the outer scope, and so on, until the global scope is reached.
 */

/**
 * 📝 **Example:**
 * -------------------
 * The example demonstrates nested functions and how scopes work.
 */

// Example Code:

function fun(){  // fun -> Global Scope
    var x = 10;  // x -> fun scope
    function gun(){  // gun -> fun scope
        var y = 20;  // y -> gun scope
        console.log(x);  // 10 (x is accessible from the outer fun() scope)
        console.log(y);  // 20 (y is accessible within gun() scope)
    }

    gun();  // Calls gun() function
    console.log(x);  // 10 (x is accessible within fun() scope)
    // console.log(y);  // ❌ Error: y is not defined (y is not accessible in the fun() scope)
}
fun();  // Call the fun() function

/*
**Output:**
-------------------------------
10
20
10
Error: y is not defined (if uncommented)


**Explanation:**
---------------------------------
### 1. Parsing Phase (Compilation Phase):
   - The JavaScript engine scans the entire code to create a structure and identify scope relationships.
   - The function `fun()` is declared and added to the global scope.
   - Inside `fun()`, a variable `x` is declared in the `fun` scope and initialized with the value `10`.
   - Then, a nested function `gun()` is declared within the `fun` function's scope. Inside `gun()`, a variable `y` is declared and initialized with the value `20`.
   
### 2. Execution Phase:
   - After parsing, the JavaScript engine starts executing the code line-by-line.
   
   - **Line 1:** `fun()` is called, starting the execution of the `fun` function.
     - Inside the `fun` function, the engine encounters `var x = 10;` and assigns `10` to `x` in the `fun` scope.
   
   - **Line 2:** The `gun()` function is called.
     - Inside `gun()`, the engine encounters `var y = 20;` and assigns `20` to `y` in the `gun` scope.
     - It then prints the value of `x` with `console.log(x);`:
       - JavaScript uses **lexical scoping** to look for `x` in the current scope. Since `x` is in the parent `fun` scope, it logs `10`.
     - It then prints the value of `y` with `console.log(y);`:
       - Since `y` is declared inside the `gun` function's scope, it logs `20`.
   
   - **Line 3:** The `gun()` function finishes execution and returns to the `fun` function.
   
   - **Line 4:** `console.log(x);` prints `x` from the `fun` scope, which is still `10`.
   
   - **Line 5:** `console.log(y);` would throw an error because `y` is declared inside the `gun` function's scope, and is not accessible from the `fun` scope.
     - **Error:** `Uncaught ReferenceError: y is not defined` (since `y` is not in the `fun` scope).
     
### Conclusion:
---------------------------------
- **Lexical Scoping:** The variable `x` is accessible inside both `fun` and `gun` because it was declared in the outer `fun` scope. 
- **Function Scopes:** The variable `y` is only accessible inside the `gun` function because it is declared within `gun`'s scope.
- **Execution:** When calling `gun()`, JavaScript first checks the current scope and its outer scope(s) for the variables and executes accordingly.
*/
