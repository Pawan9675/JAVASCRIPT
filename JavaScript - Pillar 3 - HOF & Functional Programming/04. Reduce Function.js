// ************************************************************
// 🔥 REDUCE FUNCTION IN JAVASCRIPT - DETAILED GUIDE
// ************************************************************

/*
    📌 WHAT IS THE `reduce()` FUNCTION?
    -----------------------------------
    - `reduce()` is a **Higher Order Function** (HOF) available for arrays in JavaScript.
    - It **processes each element** of an array and it is used to **accumulate** or **combine** elements of an array into a single value.
    - `reduce()` **iterates** through every element of the array and applies a function.
    - It takes a **callback function** and an optional **initial value**.
    - The callback function has **two key parameters**:
        1️⃣ `prevResult` (Accumulated result from previous iterations).
        2️⃣ `currValue` (Current element of the array being processed).
    - The result of each function call is **carried forward** and used for the next iteration.

    🛑 HOW DOES `reduce()` WORK?
    -----------------------------
    ✅ It starts with an **initial value** (optional, default is the first element of the array).
    ✅ It applies the callback function on each element, **accumulating results step by step**.
    ✅ Finally, it returns a **single value** (number, string, object, etc.).

    🔥 When to use `reduce()`?
    --------------------------
    ✅ When we need to **sum up elements** of an array.
    ✅ When we need to **combine array elements into one result**.
    ✅ When we need to **perform cumulative calculations**.
*/

// ************************************************************
// 📌 EXAMPLE 1: SUMMING NUMBERS USING `reduce()`
// ************************************************************

const arr = [1, 2, 3, 4, 5, 6];  // Input array

/*
    🔥 Function to add elements step by step
    ----------------------------------------
    - `prevResult`: Stores accumulated sum.
    - `currValue`: Current element in the array.
    - Adds `currValue` to `prevResult` and returns the sum.
*/
function sum(prevResult, currValue) {
    console.log(`Processing: ${prevResult} + ${currValue}`);   // Logs each step
    return currValue + prevResult;
}

// ✅ Applying `reduce()` (No initial value, starts from index 1)
const result = arr.reduce(sum);
console.log("Sum of array elements:", result);

/*
    🔥 Key Observation:
    -------------------
    - `reduce()` starts **from the first index (arr[1])**, NOT `arr[0]`.
    - The first element (arr[0]) is treated as the **initial value**.
*/

// ************************************************************
// 📌 EXAMPLE 2: USING AN INITIAL VALUE IN `reduce()`
// ************************************************************

/*
    🔥 We can provide an initial value (e.g., `0`) to start from.
*/
const sumWithInitial = arr.reduce(sum, 0);
console.log("Sum with initial value (0):", sumWithInitial);

/*
    🔥 Why use an initial value?
    ----------------------------
    ✅ Ensures calculations work even if the array is empty.
    ✅ Allows starting from a specific value (not just `arr[0]`).
*/

/*
    🔥 Explanation:
    --------------
    - `reduce(sum, 0)` means **starting from 0** instead of `arr[0]`.
*/

// ************************************************************
// 📌 EXAMPLE 3: FINDING THE MAXIMUM NUMBER IN AN ARRAY
// ************************************************************

/*
    🔥 Function to find the maximum value in an array
    -------------------------------------------------
    - Compares `prevResult` (previous max) with `currValue`.
    - Returns the greater value.
*/
function maxNumber(prevResult, currValue) {
    return prevResult > currValue ? prevResult : currValue;
}

// ✅ Applying `reduce()` to find the maximum number
const maxVal = arr.reduce(maxNumber);
console.log("Maximum number:", maxVal);

/*
    🔥 Explanation:
    --------------
    - `reduce()` keeps **comparing elements** and stores the max value.
*/

// ************************************************************
// 📌 EXAMPLE 4: CALCULATING TOTAL PRICE FROM A CART
// ************************************************************

/*
    🔥 Scenario:
    ------------
    - We have a shopping cart containing different products.
    - Each product is an object with `price` and `name` properties.
    - We need to calculate the **total cost** of all products.
*/

let cart = [
    { price: 100000, name: "iPhone" },
    { price: 500, name: "Backcover" },
    { price: 300, name: "Tempered Glass" }
];

/*
    🔥 Function to accumulate total price
    -------------------------------------
    - `prevResult.price` holds the **total price so far**.
    - `currValue.price` is the price of the **current product**.
    - The function **adds both** and returns an object with `price`.
*/
function addPrices(prevResult, currValue) {
    console.log(prevResult, currValue);  // Logs each step
    let newPrice = prevResult.price + currValue.price;
    return { price: newPrice };
}

// ✅ Applying `reduce()` with an initial value `{ price: 0 }`
const totalPrices = cart.reduce(addPrices, { price: 0 });
console.log("Total Cart Price:", totalPrices.price);

/*
OR
function addPrices(prevResult, currValue) {
    return prevResult + currValue.price;
}

// ✅ Applying `reduce()` with an initial value `0`
const totalCartPrice = cart.reduce(addPrices, 0);
console.log("Total Cart Price:", totalCartPrice);
*/

/*
    🔥 Key Learning:
    ----------------
    - `reduce()` is **powerful for working with objects**.
    - We can **accumulate and return objects** instead of just numbers.
*/

// ************************************************************
// 📌 EXAMPLE 5: CONCATENATING STRINGS USING `reduce()`
// ************************************************************

let words = ["JavaScript", "is", "awesome!"];

/*
    🔥 Function to join words into a single string
*/
function concatStrings(prevResult, currValue) {
    return prevResult + " " + currValue;
}

// ✅ Applying `reduce()`
const sentence = words.reduce(concatStrings);
console.log("Concatenated Sentence:", sentence);

/*
    🔥 Explanation:
    --------------
    - `reduce()` **joins words together** by accumulating the result.
*/

// ************************************************************
// 📌 EXAMPLE 6: COUNTING OCCURRENCES OF ELEMENTS
// ************************************************************

const names = ["apple", "banana", "apple", "orange", "banana", "apple"];

/*
    🔥 Function to count occurrences of each fruit
*/
function countOccurrences(prevResult, currValue) {
    prevResult[currValue] = (prevResult[currValue] || 0) + 1;
    return prevResult;
}

// ✅ Applying `reduce()` with an empty object `{}` as the initial value
const occurrences = names.reduce(countOccurrences, {});
console.log("Fruit Count:", occurrences);

// ************************************************************
// 📌 EXAMPLE 7: FLATTENING A NESTED ARRAY
// ************************************************************

const nestedArray = [[1, 2], [3, 4], [5, 6]];

/*
    🔥 Function to flatten the array
*/
function flatten(prevResult, currValue) {
    return prevResult.concat(currValue);
}

// ✅ Applying `reduce()` to flatten the array
const flattenedArray = nestedArray.reduce(flatten, []);
console.log("Flattened Array:", flattenedArray);

// ************************************************************
// 📌 CUSTOM IMPLEMENTATION OF REDUCE FUNCTION (MY OWN REDUCE)
// ************************************************************

/*
    🔥 Let's build our own `reduce()` function
    ------------------------------------------
    - This function mimics JavaScript’s built-in `reduce()`.
    - It loops through the array and applies a function to accumulate results.
*/

function customReduce(arr, func, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = func(accumulator, arr[i]);
    }
    return accumulator;
}

// ✅ Using our custom `reduce()` function
const customResult = customReduce(arr, sum, 0);
console.log("Sum using custom reduce:", customResult);

/*
    🔥 Why build a custom `reduce()`?
    ---------------------------------
    ✅ To deeply understand how `reduce()` actually works.
    ✅ To have full control over the behavior.
*/

// ************************************************************
// 📌 FINAL SUMMARY - RECAP OF EVERYTHING
// ************************************************************

/*
    ✅ `reduce()` FUNCTION IN A NUTSHELL:
        - `reduce()` is a **Higher Order Function (HOF)**.
        - It **accumulates** values into a **single result**.
        - It takes a function with two parameters:
            1️⃣ `prevResult` (accumulated result so far).
            2️⃣ `currValue` (current element being processed).
        - `reduce()` works by **applying the function step by step**.
        - It can **start from an initial value** (if provided).

    ✅ WHEN TO USE `reduce()`?
        - When we need to **sum up numbers**.
        - When we need to **find max/min values**.
        - When we need to **combine strings or objects**.
        - When we need to **calculate totals** (e.g., shopping cart).

    🔥 PRACTICAL USE CASES:
        - Summing numbers (`reduce(sum)`).
        - Finding maximum value (`reduce(max)`).
        - Concatenating strings (`reduce(concat)`).
        - Calculating total prices (`reduce(addPrices)`).

    🚀 JavaScript's `reduce()` function makes accumulation **efficient and concise!** 🎯
*/
