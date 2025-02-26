// ********************************************************
// 🔥 ARRAY FUNCTIONS IN JAVASCRIPT - COMPLETE GUIDE
// ********************************************************

/*
    📌 INTRODUCTION TO ARRAYS IN JAVASCRIPT
    ---------------------------------------
    - Arrays in JavaScript are **special objects** that store multiple values in a single variable.
    - The **index** in an array is the key, and the **element** is the value.
    - Example representation:
      ["abc", "def", "ghi", "jkl"] 
        -> Internally represented as: {0: "abc", 1: "def", 2: "ghi", 3: "jkl"}
    - Arrays are widely used for **storing and manipulating data**, and JavaScript provides **many built-in functions** to work efficiently with arrays.
*/

// ********************************************************
// 📌 MAP FUNCTION - A HIGHER-ORDER FUNCTION (HOF)
// ********************************************************

/*
    🔥 What is the `map` function?
    ------------------------------
    - `map()` is a **higher-order function** (HOF) available for arrays.
    - It **accepts a function as an argument** and applies that function to **each element of the array**.
    - It returns a **new array**, where every element is obtained by applying the provided function to each original element, i.e. It **creates a new array** where every element is transformed based on the provided function.
    - The original array remains **unchanged**.
    - Internally, it loops through each element, applies the function, and stores the result in a new array.

    🔹 How does `map()` work internally?
        - It **loops through each element** in the array.
        - It **passes the current element as an argument** to the provided function.
        - It **stores the returned value** in a new array.

    🛑 When to use `map()`?
    -----------------------
    ✅ When we need to **perform an operation on every element** and **store the result** in a new array.
    ✅ When we want to **avoid manually using loops** (`for`, `while`) for transformations.
    ✅ When we need a **functional programming approach** (cleaner and readable code).
*/

// Example 1: Squaring each element in an array
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);

function square(ele) {
    return ele * ele;
}

// ❌ Incorrect: Calling function inside map (don't use `()` after function name)
// const squareResult = arr.map(square());      // ❌ This will cause an error

/*
    🔥 Correct way: Pass function as reference (without `()`)
    - Here, `map()` loops through each element and applies `square()`
*/
const squareResult = arr.map(square);
console.log("Squared values:", squareResult);

// Example 2: Cubing each element in an array
function cube(x) {
    return x * x * x;
}
const cubeResult = arr.map(cube);
console.log("Cubed values:", cubeResult);

// Example 3: Checking if elements are even or odd
function isEvenOrOdd(x) {
    return x % 2 === 0 ? "Even" : "Odd";
}
const evenOdd = arr.map(isEvenOrOdd);
console.log("Even/Odd values:", evenOdd);

// ********************************************************
// 📌 SORT FUNCTION - CUSTOM SORTING WITH A COMPARATOR
// ********************************************************

/*
    🔥 How does the `sort()` function work in JavaScript?
    -----------------------------------------------------
    - In **other languages** (like Java, C++), `sort()` automatically arranges numbers in **increasing order**.
    - BUT in **JavaScript**, `sort()` sorts elements as **strings** (lexicographically / dictionary order).
    - To sort numbers properly, we need to **pass a comparator function**.

    🛑 Default `sort()` behavior:
    -----------------------------
    - It sorts elements as **strings**.
    - So numbers get sorted incorrectly!
*/

// Example 1: Default `sort()` (Incorrect for numbers)
let num = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
console.log("Unsorted array:", num);

// ❌ Incorrect: Sorting lexicographically (default behavior)
num.sort();
console.log("Lexicographically sorted:", num);

/*
    ✅ Correct way: Providing a **comparator function**
    -> Comparator function tells `sort()` how to compare elements:
        - If `a - b` is negative → `a` comes before `b`
        - If `a - b` is positive → `a` comes after `b`
*/

// Sorting numbers in **increasing order**
let num2 = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
num2.sort(function (a, b) {
    return a - b;  // Ascending order
});
console.log("Sorted in increasing order:", num2);

// Sorting numbers in **decreasing order**
num2.sort(function (a, b) {
    return b - a;  // Descending order
});
console.log("Sorted in decreasing order:", num2);

/*
    🔥 When to use `sort()`?
    -----------------------
    ✅ When we need to **rearrange elements** in an array.
    ✅ When we need **custom sorting logic** using a comparator function.
*/

// ********************************************************
// 📌 GETTING INDEX WITH MAP FUNCTION
// ********************************************************

const newArr = [1, 2, 3, 4, 5];

/*
    🔥 Getting both ELEMENT and INDEX using `map()`
    -----------------------------------------------
    - When a function inside `map()` accepts **two arguments**, 
      - The first argument is the **element**.
      - The second argument is the **index**.
*/

function print(element, idx) {
    return `Element at index ${idx} is ${element}`;
}

// ✅ `map()` automatically passes (element, index) to `print()`
const result2 = newArr.map(print);
console.log(result2);

// ********************************************************
// 📌 CREATING CUSTOM MAP FUNCTION (MY OWN MAP IMPLEMENTATION)
// ********************************************************

/*
    🔥 Custom `map()` function
    --------------------------
    - To understand `map()`, let's **build our own version**.
    - Our function **accepts an array and a function**.
    - It applies the function to each element and returns a **new array**.
*/

function customMapper(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i)); // Passing element and index
    }
    return result;
}

// ✅ Using our custom map function
const value = customMapper(newArr, print);
console.log("Custom Map Result:", value);

/*
    🔥 Why build a custom `map()`?
    ------------------------------
    - To understand how built-in functions like `map()` work internally.
    - To have **full control** over functionality.
*/

// ********************************************************
// 📌 FINAL SUMMARY
// ********************************************************

/*
    ✅ HIGHER-ORDER FUNCTIONS WITH ARRAYS:
        - **map()** → Transforms elements & returns a new array.
        - **sort()** → Sorts elements (lexicographically by default, custom sorting with a comparator).

    ✅ WHEN TO USE THESE FUNCTIONS?
        - Use `map()` when you need to **apply a function** to every element.
        - Use `sort()` when you want to **rearrange elements**.

    🔥 KEY TAKEAWAYS:
        - Arrays in JavaScript **behave like objects**.
        - Default sorting is **lexicographical** (not numerical).
        - **map() is a higher-order function** that accepts a function as an argument.
        - **Custom functions** help in better understanding built-in methods.

    🚀 JavaScript Arrays are powerful! Using these functions smartly makes your code clean and efficient! 🎯
*/

