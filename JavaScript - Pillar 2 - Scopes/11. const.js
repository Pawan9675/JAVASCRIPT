// *********************************
// 🔥 UNDERSTANDING `const` IN JAVASCRIPT
// *********************************

/**
 * JavaScript provides three ways to declare variables: `var`, `let`, and `const`.
 *
 * ✅ `const` stands for **constant**, meaning the variable’s value cannot be reassigned.
 * ✅ `const` is **block-scoped** (like `let`).
 * ✅ It has **Temporal Dead Zone (TDZ)**, so it **cannot be accessed before declaration**.
 * ✅ It is best used for **values that should never change**.
 *
 * However, if `const` holds an **object or array**, the properties/elements can be modified!
 */

// ***************************************
// 📌 `const` - BLOCK SCOPED & IMMUTABLE
// ***************************************

/**
 * 🔥 Important Characteristics of `const`:
 * ---------------------------------------
 * ✅ `const` must be initialized at the time of declaration.
 * ✅ It is **block-scoped**, meaning it only exists inside the `{}` where it is declared.
 * ✅ It **cannot be reassigned** after declaration.
 * ✅ However, if `const` holds an **object or array**, we CAN modify its properties/elements.
 * ✅ `const` variables also have **Temporal Dead Zone (TDZ)**, just like `let`.
 */

/**
 * 📌 Example 1: `const` variables cannot be reassigned
 * ---------------------------------------------------
 */

const x = 9;
console.log(x); // ✅ Logs: 9

// x = 10; ❌ ERROR: Assignment to constant variable.

/**
 * 🔍 Why does this throw an error?
 * - `const` prevents reassignment, meaning `x` cannot be updated to a new value.
 * - Once declared, `const` holds the value **forever** (within its scope).
 */

/**
 * 📌 Example 2: `const` with Objects
 * ----------------------------------
 */

const obj = {
    value: 9
};

// ✅ We can modify properties of an object
obj.value = 10;
console.log(obj); // ✅ Logs: { value: 10 }

// obj = {}; ❌ ERROR: Assignment to constant variable.

/**
 * 🔍 What happened here?
 * - We **cannot** assign a new object to `obj` because `const` prevents reassignment.
 * - However, we **can modify** properties inside the object.
 */

/**
 * 📌 Example 3: `const` with Arrays
 * ---------------------------------
 */

const arr = [1, 2, 3];

// ✅ We can modify array elements
arr[0] = 99;
console.log(arr); // ✅ Logs: [99, 2, 3]

// ✅ We can push new elements
arr.push(4);
console.log(arr); // ✅ Logs: [99, 2, 3, 4]

// arr = [5, 6, 7]; ❌ ERROR: Assignment to constant variable.

/**
 * 🔍 Key Takeaways:
 * - `const` prevents **reassignment** but allows **modification** of objects and arrays.
 * - This is because `const` protects the **reference**, not the value inside the object/array.
 */

// ***************************************
// 📌 TEMPORAL DEAD ZONE (TDZ) & `const`
// ***************************************

/**
 * ❌ Accessing `const` before declaration leads to a **ReferenceError**.
 * This period is called the **Temporal Dead Zone (TDZ)**.
 */

function tdzExample() {
    console.log(myVar);  // ✅ Logs: undefined (because `var` is hoisted)
    var myVar = "Hello";

    console.log(myConst);  // ❌ ReferenceError: Cannot access 'myConst' before initialization
    const myConst = "Hi";
}
tdzExample();

/**
 * 🔥 What is TDZ (Temporal Dead Zone)?
 * - The time between the **beginning of a scope** and the actual **declaration** of a `const` variable.
 * - Accessing a `const` variable before declaration **throws an error**.
 *
 * ✅ `var` is hoisted (moved to the top) and initialized with `undefined`.
 * ✅ `const` is hoisted but NOT initialized (exists in TDZ until assigned a value).
 */

// *********************************
// 📌 USE CASES OF `const`
// *********************************

/**
 * 🚀 When should you use `const`?
 * --------------------------------
 * ✅ When you need to store values that should NEVER be reassigned.
 * ✅ When working with objects/arrays that should remain **constant in reference**.
 * ✅ When defining **configuration values** or **constants**.
 */

// Example 1: ✅ Best use case for `const`
const API_KEY = "12345-ABCDE";
const MAX_USERS = 100;
const APP_NAME = "MyApp";

console.log(`Welcome to ${APP_NAME}. Max users allowed: ${MAX_USERS}`);

// Example 2: Using `const` for Objects & preventing reassignment
const config = {
    appName: "ChatGPT",
    version: "1.0.0"
};

// ✅ We can modify properties
config.version = "2.0.0";

// ❌ We cannot reassign the whole object
// config = {}; // ERROR

// *********************************
// 📝 SUMMARY: `const` vs `let` vs `var`
// *********************************

/**
 * 🚀 Which one to use?
 * ---------------------------------
 * ✅ Use `const` for values that should NEVER change.
 * ✅ Use `let` for variables that will change.
 * ❌ Avoid `var` because it can lead to unexpected behavior.
 *
 * ⭐ **Final Rule**:
 * - **Default to `const`** unless you NEED a variable to change.
 * - Use `let` ONLY when reassignment is necessary.
 */