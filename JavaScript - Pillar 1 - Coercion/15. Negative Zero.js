// ******************************************
// 🔹 NEGATIVE ZERO (-0) IN JAVASCRIPT
// ******************************************

/**
 * 📌 What is Negative Zero (-0)?
 * -------------------------------------
 * - JavaScript has **both +0 and -0**.
 * - **-0 behaves like 0** in most cases.
 * - However, `Object.is(-0, 0)` detects the difference.
 */

let x = -0;
console.log(x === 0);  // ✅ true (-0 is equal to 0 in comparisons)
console.log(x === -0); // ✅ true (-0 is equal to itself)

/**
 * 🔍 How to check if a number is -0?
 * -------------------------------------
 * - `Object.is(x, -0)` → ✅ true (Only true for -0)
 * - `Math.sign(x)` → Returns `-1` for negative, `1` for positive, `0` for 0, and `-0` for -0.
 */

console.log(Object.is(x, 0));  // ❌ false (-0 is NOT exactly 0)
console.log(Object.is(x, -0)); // ✅ true  (-0 is -0)

// ******************************************
// 🔹 MATH.SIGN() FUNCTION
// ******************************************

/**
 * 📌 Math.sign(x)
 * -------------------------------------
 * - Returns **1** for positive numbers.
 * - Returns **-1** for negative numbers.
 * - Returns **0** for positive zero (0).
 * - Returns **-0** for negative zero (-0).
 */

console.log(Math.sign(-3));  // ✅ -1 (Negative number)
console.log(Math.sign(3));   // ✅ 1  (Positive number)

console.log(Math.sign(-0));  // ✅ -0 (Specifically -0)
console.log(Math.sign(0));   // ✅ 0  (Specifically 0)

// ******************************************
// 🔹 NEGATIVE ZERO (-0) IN MULTIPLICATION
// ******************************************

console.log(0 * -1);   // ✅ -0 (0 multiplied by -1 gives -0)
console.log(-0 * -1);  // ✅ 0  (-0 multiplied by -1 gives 0)

// ******************************************
// 🔹 CUSTOM FUNCTION TO CHECK SIGN
// ******************************************

/**
 * 📌 Custom function to check if a number is positive or negative.
 * -------------------------------------
 * - If `x * -1 == -0`, then it's **positive**.
 * - If `x * -1 >= 0`, then it's **negative**.
 */

function signOfNumber(x){
    if (x * -1 == -0) return "positive";
    else if (x * -1 >= 0) return "negative";
    else return "positive";
}

console.log(signOfNumber(-0)); // ✅ "positive"
console.log(signOfNumber(0));  // ✅ "positive"

// ******************************************
console.log(`✅ Done! Hope this helps!`);
