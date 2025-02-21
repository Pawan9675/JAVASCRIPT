// **********************************
// 🔹 CORNER CASES: ToString & ToNumber
// **********************************

/**
 * 📌 TO STRING CONVERSION (`ToString()`)
 * --------------------------------------
 * - The `ToString(argument)` operation **converts a value into a string**.
 * - A shorthand way to trigger `ToString()` is by using `"" + value`.
 */

console.log("===== ToString Conversion =====");

console.log("" + (+0));  // ✅ "0"   → (+0) is converted to string "0".
console.log("" + (-0));  // ✅ "0"   → (-0) is also converted to string "0".

console.log("" + []);    // ✅ ""    → Empty array converts to an empty string.
console.log("" + {});    // ✅ "[object Object]" → Object converts to string using `toString()`.

console.log("" + [1, 2, 3]); // ✅ "1,2,3"
// Explanation: Arrays convert to strings by **removing brackets** and **joining elements with commas**.

console.log("" + [null, undefined]); // ✅ ","  
// Explanation: `null` and `undefined` in an array are removed, resulting in an empty spot → ",".

console.log("" + [1, 2, 3, null, 4]); // ✅ "1,2,3,,4"
// Explanation: `null` converts to an empty string → "1,2,3,,4".

console.log("" + [1, 2, 3, undefined, 4]); // ✅ "1,2,3,,4"
// Explanation: `undefined` is removed similarly → "1,2,3,,4".

console.log("--------------------------------------------------");

// **********************************
// 🔹 TO NUMBER CONVERSION (`ToNumber()`)
// **********************************

/**
 * 📌 TO NUMBER CONVERSION (`ToNumber()`)
 * --------------------------------------
 * - The `ToNumber(argument)` operation **converts a value into a number**.
 * - A shorthand way to trigger `ToNumber()` is by using arithmetic operations (`-`, `+`, `*`, `/`).
 */

console.log("===== ToNumber Conversion =====");

// ✅ `ToNumber()` on Strings:
console.log(0 - "010");  // ✅  -10  
// Explanation: `"010"` is converted to `10` (leading zero is ignored in modern JS).

console.log(0 - "o10");  // ✅ NaN  
console.log(0 - "O10");  // ✅ NaN  
// Explanation: `"o10"` and `"O10"` are **not valid numbers**, so they return `NaN`.

console.log(0 - "0xb");  // ✅ -11  
// Explanation: `"0xb"` is a hexadecimal number (`0xb` = `11` in decimal).

console.log(0 - 0xb);  // ✅ -11  
// Explanation: `0xb` is already a hexadecimal value (`11` in decimal).

/**
 * 🔹 Special Case: Octal Numbers
 */
// console.log(0 - 010);  
// ❌ This would have worked in **older JavaScript versions**, where leading `0` meant octal (`010` = `8`).
// ✅ In **modern JavaScript**, this throws an error in strict mode.


// ✅ `ToNumber()` on Arrays:
console.log([] - 1);  // ✅ -1  
// Explanation: `[]` is converted to `0` → `0 - 1 = -1`.

console.log([""] - 1);  // ✅ -1  
// Explanation: `[""]` (array with empty string) is converted to `0` → `0 - 1 = -1`.

console.log(["0"] - 1);  // ✅ -1  
// Explanation: `["0"]` (array with string `"0"`) converts `"0"` to `0` → `0 - 1 = -1`.

console.log("--------------------------------------------------");

console.log("✅ Done! All clear!");
