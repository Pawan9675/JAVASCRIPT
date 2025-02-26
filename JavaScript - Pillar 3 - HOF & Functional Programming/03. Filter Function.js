// ************************************************************
// 🔥 FILTER FUNCTION IN JAVASCRIPT - DETAILED GUIDE
// ************************************************************

/*
    📌 WHAT IS THE `filter()` FUNCTION?
    -----------------------------------
    - `filter()` is a **Higher Order Function** (HOF) available for arrays in JavaScript.
    - It is used to **filter elements** from an array based on a condition.
    - It **loops over every element** in the array and applies a given function to it.
    - If the function **returns `true`**, the element is **included** in the new array.
    - If the function **returns `false`**, the element is **excluded** from the new array.
    - The original array **remains unchanged**.

    🛑 KEY PROPERTY OF `filter()`:
    ------------------------------
    ✅ The function passed inside `filter()` should **always return a boolean (`true` or `false`)**.
    ✅ If it returns a **non-boolean value**, JavaScript **converts it into a boolean**.
    ✅ `filter()` always returns a **new array** containing only the elements that passed the test.

    🔥 When to use `filter()`?
    --------------------------
    ✅ When we need to **remove elements that don’t satisfy a condition**.
    ✅ When we want to **extract elements based on some criteria**.
    ✅ When we want to **filter out values without modifying the original array**.
*/

// ************************************************************
// 📌 EXAMPLE 1: FILTERING EVEN NUMBERS FROM AN ARRAY
// ************************************************************

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original Array:", num1);

/*
    🔥 Function to filter EVEN numbers
    ----------------------------------
    - It takes an element `x` and checks if `x % 2 == 0` (i.e., x is even).
    - If `true`, the number is included in the new array.
    - If `false`, it is excluded.
*/
function isEven(x) {
    return x % 2 === 0; // Returns `true` for even numbers, `false` for odd numbers.
}

// ✅ Applying `filter()`
let evenNumbers = num1.filter(isEven);
console.log("Even Numbers:", evenNumbers);

// ************************************************************
// 📌 EXAMPLE 2: FILTERING ODD NUMBERS FROM AN ARRAY
// ************************************************************

/*
    🔥 Function to filter ODD numbers
    ---------------------------------
    - Returns `true` if `x % 2 !== 0` (i.e., x is odd).
    - Otherwise, it returns `false`.
*/
function isOdd(x) {
    return x % 2 !== 0;
}

// ✅ Applying `filter()`
let oddNumbers = num1.filter(isOdd);
console.log("Odd Numbers:", oddNumbers);

/*
    🔥 KEY TAKEAWAYS:
    -----------------
    - `filter()` creates a **new array** (does not modify the original).
    - The function inside `filter()` **must return a boolean (`true` or `false`)**.
*/

// ************************************************************
// 📌 EXAMPLE 3: FILTERING NUMBERS GREATER THAN A CERTAIN VALUE
// ************************************************************

/*
    🔥 Function to filter numbers greater than 5
*/
function greaterThanFive(x) {
    return x > 5; // `true` if `x` is greater than 5, else `false`
}

// ✅ Applying `filter()`
let numbersGreaterThanFive = num1.filter(greaterThanFive);
console.log("Numbers greater than 5:", numbersGreaterThanFive);

/*
    🔥 Practical Use Cases:
    -----------------------
    ✅ Filtering data based on conditions (e.g., active users in a list).
    ✅ Removing unwanted elements from an array.
    ✅ Selecting specific elements based on criteria.
*/

// ************************************************************
// 📌 EXAMPLE 4: HOW NON-BOOLEAN RETURNS ARE CONVERTED TO BOOLEAN
// ************************************************************

/*
    🔥 What happens if we return a non-boolean value?
    -------------------------------------------------
    - If we return `"abc"`, `"abc"` is converted to `true` (since non-empty strings are truthy).
    - If we return `""`, it is converted to `false` (since empty strings are falsy).
*/

function weirdFilter(x) {
    return "abc"; // Always returns `"abc"` (which is truthy), so all elements are included.
}

// ✅ Applying `filter()`
let weirdResult = num1.filter(weirdFilter);
console.log("Weird Filter Result (All elements included):", weirdResult);

/*
    🔥 Explanation:
    --------------
    - Since `"abc"` is truthy, all elements are included.
    - This means that **`filter()` only works correctly if we return `true` or `false` explicitly**.
*/

// ************************************************************
// 📌 EXAMPLE 5: FILTERING OBJECTS BASED ON PROPERTY VALUE
// ************************************************************

/*
    🔥 Filtering an array of objects
*/
let students = [
    { name: "Pawan", marks: 85 },
    { name: "Rohan", marks: 45 },
    { name: "Ananya", marks: 78 },
    { name: "Karan", marks: 35 },
    { name: "Divya", marks: 91 },
];

/*
    🔥 Function to filter students who passed (marks >= 50)
*/
function passedStudents(student) {
    return student.marks >= 50;
}

// ✅ Applying `filter()`
let passed = students.filter(passedStudents);
console.log("Students who passed:", passed);

/*
    🔥 Key Points:
    -------------
    - `filter()` works great with **arrays of objects**.
    - We can filter based on any **property value** (e.g., marks, age, status).
*/

// ************************************************************
// 📌 CUSTOM IMPLEMENTATION OF FILTER FUNCTION (MY OWN FILTER)
// ************************************************************

/*
    🔥 Let's create our own version of `filter()`
    ---------------------------------------------
    - This function will mimic JavaScript’s built-in `filter()`.
    - It will loop through the array and apply a given function to each element.
    - If the function returns `true`, the element is added to a new array.
*/

function customFilter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {  // If function returns `true`, push element into result array
            result.push(arr[i]);
        }
    }
    return result;
}

// ✅ Using our custom filter function to get even numbers
let evenNumbersCustom = customFilter(num1, isEven);
console.log("Even Numbers (Custom Filter):", evenNumbersCustom);

/*
    🔥 Why build a custom `filter()`?
    ---------------------------------
    ✅ To understand how built-in functions actually work.
    ✅ To have full control over the functionality.
*/

// ************************************************************
// 📌 FINAL SUMMARY - RECAP OF EVERYTHING
// ************************************************************

/*
    ✅ `filter()` FUNCTION IN A NUTSHELL:
        - `filter()` is a **Higher Order Function (HOF)**.
        - It **filters elements based on a condition**.
        - The function inside `filter()` must **return `true` or `false`**.
        - If `true`, the element is **included**; if `false`, it is **excluded**.
        - `filter()` always returns a **new array** (does not modify the original).
        - If a **non-boolean value** is returned, JavaScript **converts it to boolean**.

    ✅ WHEN TO USE `filter()`?
        - When we need to **select elements based on some condition**.
        - When we want to **filter out unwanted elements**.
        - When we need a **functional programming approach** instead of using `for` loops.

    🔥 PRACTICAL USE CASES:
        - Filtering even/odd numbers from an array.
        - Filtering students based on marks (e.g., marks >= 50).
        - Filtering active/inactive users from a list.

    🚀 JavaScript's `filter()` function makes data selection **easier, faster, and cleaner!** 🎯
*/
