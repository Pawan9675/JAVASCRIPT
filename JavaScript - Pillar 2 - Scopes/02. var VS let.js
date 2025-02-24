// ******************************************
// 🔹 VAR VS LET IN JAVASCRIPT
// ******************************************

/**
 * 📌 What is `var`?
 * -------------------------------------
 * - `var` is used to declare **function-scoped** or **global-scoped** variables.
 * - If declared inside a function, `var` is only accessible within that function.
 * - If declared outside a function, `var` becomes **globally available**.
 * - Variables declared with `var` can be **redeclared** within the same scope.
 * - It is **hoisted** (moved to the top of its scope during execution).
 * - `var` **does not support block scope**, which can lead to unintended behavior.
 */

// 📝 Example: `var` is function-scoped (NO block scope)
var x = 1;   // Global scope

if (x === 1) {
  var x = 2;  // ❌ Re-declares `x` in the global scope (not block-scoped)
  console.log(x);  // ✅ Output: 2
}

console.log(x);  // ✅ Output: 2 (Oops! `x` was modified inside the block)

// ******************************************
/**
 * 📌 What is `let`?
 * -------------------------------------
 * - `let` is used to declare **block-scoped** variables (i.e., `{}`).
 * - Variables declared with `let` **cannot be redeclared** within the same scope.
 * - It is also **hoisted** but **not initialized** (accessing before declaration gives an error).
 * - `let` is the **preferred** way to declare variables.
 */

// 📝 Example: `let` is block-scoped
let y = 1;   // Global scope

if (y === 1) {
  let y = 2;  // ✅ This `y` is only accessible inside this block
  console.log(y);  // ✅ Output: 2
}

console.log(y);  // ✅ Output: 1 (Global `y` is unchanged)

// ******************************************
// 🔹 KEY DIFFERENCES BETWEEN VAR AND LET
// ******************************************

/**
 *  🔍 Scope Difference
 * -------------------------------------
 * - `var` is **function-scoped** (accessible anywhere inside the function).
 * - `let` is **block-scoped** (accessible only inside the block `{ ... }`).
 */

function testScope() {
  if (true) {
    var a = 10;  // Function-scoped
    let b = 20;  // Block-scoped
  }
  console.log(a);  // ✅ Output: 10 (Accessible because of function scope)
  // console.log(b);  // ❌ ReferenceError: `b` is not defined (block scope)
}

testScope();

// ******************************************

/**
 *  🔍 Hoisting Difference
 * -------------------------------------
 * - Both `var` and `let` are **hoisted**.
 * - But `var` is initialized with `undefined`, while `let` remains uninitialized.
 */

console.log(foo);  // ✅ Output: undefined (var is hoisted and initialized)
// console.log(bar);  // ❌ ReferenceError: Cannot access 'bar' before initialization

var foo = "Hello";
let bar = "World";

// ******************************************

/**
 *  🔍 Redeclaration Difference
 * -------------------------------------
 * - `var` allows redeclaration in the same scope.
 * - `let` does **not** allow redeclaration in the same scope.
 */

var m = 100;
var m = 200;  // ✅ No error

let n = 100;
// let n = 200;  // ❌ SyntaxError: Identifier 'n' has already been declared

// ******************************************

/**
 *  🔍 Variable Leakage Issue with `var`
 * -------------------------------------
 * - Variables declared with `var` **leak outside loops and conditions**.
 * - This can cause unexpected bugs.
 */

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// ✅ Output: 3, 3, 3 (Oops! `i` is function-scoped, so the final value is printed)

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 1000);
}
// ✅ Output: 0, 1, 2 (Correct! `j` is block-scoped, so each iteration gets a new `j`)

// ******************************************
console.log(`✅ Done! Hope this helps!`);
