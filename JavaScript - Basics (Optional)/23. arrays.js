/**
 * ARRAYS IN JAVASCRIPT
 * =====================
 * Arrays in JavaScript are a data structure used to store a collection of elements.
 * They provide a way to manage ordered data efficiently.
 * 
 * FEATURES OF ARRAYS:
 * -------------------
 * 1. **Dynamic Size**: JavaScript arrays can grow or shrink dynamically.
 * 2. **Heterogeneous Elements**: Arrays can hold multiple types of values.
 * 3. **Zero-Based Indexing**: The first element is at index `0`.
 * 4. **Mutable**: Elements can be added, removed, or modified.
 * 5. **Objects Under the Hood**: JavaScript arrays are specialized objects.
 */

/**
 * 1. UNDERSTANDING DATA STRUCTURES
 * --------------------------------
 * - A data structure organizes and stores data in a way that allows efficient access and modification.
 * - Different data structures serve different use cases.
 * - Example: 
 *   - Arrays store data **linearly** in contiguous memory locations.
 *   - Trees store data **hierarchically**.
 */

/**
 * 2. APPLICATIONS OF ARRAYS
 * -------------------------
 * Arrays are widely used in programming for:
 * - Storing a collection of similar data (e.g., student names, numbers, etc.).
 * - Implementing other data structures (stacks, queues, hash tables).
 * - Matrix operations, sorting, searching, and dynamic programming.
 */

/**
 * 3. CREATING ARRAYS
 * ------------------
 * Arrays in JavaScript can be created using different methods.
 */

// Method 1: Using array literals (Recommended)
let emptyArray = []; // Empty array
let num = [10, 20, 30, 40, 50];
let mixedArray = [1, "hello", true, null, undefined, { key: "value" }, [1, 2, 3]]; // Heterogeneous values

// Method 2: Using the Array constructor
let arr1 = new Array();  // Empty array
let arr2 = new Array(5); // Creates an array of length 5 (empty slots)
let arr3 = new Array(1, 2, 3, 4, 5); // Creates an array with elements

console.log(emptyArray); // Output: []
console.log(num);    // Output: [10, 20, 30, 40, 50]
console.log(mixedArray); // Output: [ 1, 'hello', true, null, undefined, { key: 'value' }, [ 1, 2, 3 ] ]
console.log(arr1);       // Output: []
console.log(arr2);       // Output: [ <5 empty slots> ]
console.log(arr3);       // Output: [1, 2, 3, 4, 5]

/**
 * 4. ARRAY INDEXING
 * -----------------
 * - Elements in an array are accessed using an index.
 * - Indexing in JavaScript starts from `0` (zero-based index).
 * - The last element is at index `length - 1`.
 */

// Example: Accessing elements by index
let numbers = [10, 20, 30, 40, 50];

console.log(numbers[0]);  // Output: 10  (First element)
console.log(numbers[2]);  // Output: 30  (Third element)
console.log(numbers[4]);  // Output: 50  (Last element)
console.log(numbers[5]);  // Output: undefined (Index out of range)

/**
 * 5. TRAVERSING AN ARRAY
 * ----------------------
 * - Traversing means accessing each element of an array one by one.
 * - There are multiple ways to traverse an array.
 */

// Example 1: Using a `for` loop
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Output: 10, 20, 30, 40, 50

// Example 2: Using `forEach` loop (Recommended for readability)
numbers.forEach(function(value, index) {
    console.log(`Index ${index}: ${value}`);
});
// Output: 
// Index 0: 10
// Index 1: 20
// Index 2: 30
// Index 3: 40
// Index 4: 50

// Example 3: Using `for...of` loop (Simplified way to loop through arrays)
for (let num of numbers) {
    console.log(num);
}
// Output: 10, 20, 30, 40, 50

/**
 * 6. ARRAY METHODS
 * ----------------
 * JavaScript provides various built-in methods to manipulate arrays.
 */

// Finding length
console.log(numbers.length); // Output: 5

// Adding elements
numbers.push(60);  // Adds element at the end
numbers.unshift(5); // Adds element at the beginning
console.log(numbers); // Output: [5, 10, 20, 30, 40, 50, 60]

// Removing elements
numbers.pop();  // Removes last element
numbers.shift(); // Removes first element
console.log(numbers); // Output: [10, 20, 30, 40, 50]

// Modifying elements
numbers[1] = 99; // Changes the second element
console.log(numbers); // Output: [10, 99, 30, 40, 50]

/**
 * 7. FINDING ELEMENTS IN AN ARRAY
 * --------------------------------
 * - `.indexOf(value)`: Finds the index of a value in the array.
 * - `.includes(value)`: Checks if a value exists in the array.
 */

// Example: Checking element existence
console.log(numbers.indexOf(30));  // Output: 2
console.log(numbers.indexOf(100)); // Output: -1 (Not found)

console.log(numbers.includes(40));  // Output: true
console.log(numbers.includes(100)); // Output: false

/**
 * 8. SLICING & SPLITTING ARRAYS
 * ------------------------------
 * - `.slice(start, end)`: Extracts a portion of the array (does not modify the original array).
 * - `.splice(start, count)`: Removes or replaces elements (modifies the original array).
 */

// Using slice (Does not modify original array)
let slicedArray = numbers.slice(1, 3);
console.log(slicedArray); // Output: [99, 30]


// Using splice (Modifies original array)
numbers.splice(1, 2, 500, 600);
console.log(numbers); // Output: [10, 500, 600, 40, 50]

numbers.splice(2, 1); // Removes 1 element at index 2
console.log(numbers); // Output: [ 10, 500, 40, 50 ]

/**
 * 9. JOINING & CONVERTING ARRAYS
 * ------------------------------
 * - `.join(separator)`: Converts an array into a string with a specified separator.
 * - `.toString()`: Converts an array into a comma-separated string.
 */

// Example: Joining elements
console.log(numbers.join(" - "));  // Output: "10 - 500 - 40 - 50"
console.log(numbers.toString());   // Output: "10,500,40,50"


/**
 * 10. SORTING & REVERSING ARRAYS
 * -----------------------------
 * - `sort()`: Sorts alphabetically (or numerically using a comparator).
 * - `reverse()`: Reverses the order.
 */

let unsortedNumbers = [40, 100, 1, 5, 25, 10];

// Sorting (Alphabetical by default)
console.log(unsortedNumbers.sort()); // Output: [1, 10, 100, 25, 40, 5] (Incorrect for numbers)

// Sorting numerically
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // Output: [1, 5, 10, 25, 40, 100]

// Reversing an array
unsortedNumbers.reverse();
console.log(unsortedNumbers); // Output: [100, 40, 25, 10, 5, 1]

/**
 * 11. ARRAY DESTRUCTURING
 * -----------------------
 * Destructuring allows unpacking values from an array into variables.
 */

let [a, b, c] = [100, 200, 300];
console.log(a, b, c); // Output: 100 200 300

/**
 * 12. SPREAD OPERATOR WITH ARRAYS
 * -------------------------------
 * The spread operator `...` is used to expand an array.
 */

let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

let combined = [...arrA, ...arrB];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]


/**
 * SUMMARY OF ARRAY OPERATIONS:
 * -----------------------------
 * - Arrays can store multiple values of different types.
 * - JavaScript arrays are dynamic and can hold heterogeneous elements.
 * - Arrays can be traversed using loops (`for`, `forEach`, `for...of`).
 * - Various methods like `push()`, `pop()`, `slice()`, `splice()`, and `sort()` modify or retrieve elements.
 * - Always use `===` for strict equality comparison to avoid unexpected behavior.
 * - They support **indexing, iteration, modification, and dynamic sizing**.
 * - Common operations include **searching, sorting, slicing, splicing, and joining**.
 * - Use **destructuring and spread operator** for efficient array handling.
 * - Arrays can be **nested (multi-dimensional)** and support **mutation**.
 */

