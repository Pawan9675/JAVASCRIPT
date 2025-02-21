// **********************************
// 🔹 TRICKY COERCION CASES
// **********************************

console.log(1 < 2 < 3);
/*
 * 📌 EXECUTION OF `console.log(1 < 2 < 3);`
 * ----------------------------------------
 * Step 1: `1 < 2` → ✅ `true`
 * Step 2: `true < 3` → `true` is converted to **1**
 * Step 3: `1 < 3` → ✅ `true`
 * 🔥 Output: `true`
 */

console.log(3 > 2 > 1);
/*
 * 📌 EXECUTION OF `console.log(3 > 2 > 1);`
 * ----------------------------------------
 * Step 1: `3 > 2` → ✅ `true`
 * Step 2: `true > 1` → `true` is converted to **1**
 * Step 3: `1 > 1` → ❌ `false`
 * 🔥 Output: `false`
 */

console.log(`✅ Done! Hope this helps!`);