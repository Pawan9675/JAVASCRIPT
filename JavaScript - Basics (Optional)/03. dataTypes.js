/**
 * TYPES OF VALUES WE CAN STORE IN JAVASCRIPT
 * ============================================
 * JavaScript supports various types of values. Below are the common types:
 */

/** 
 * 1. Numbers
 * ------------
 * - Represents numerical values (both integers and floating-point numbers).
 * - Examples: 10, -3, 2.6, 3.141, 100, etc.
 * 
 * Example:
 */
var x = 10;
var pi = 3.141;

/** 
 * 2. Strings
 * ------------
 * - Represents text or a sequence of characters.
 * - Strings can be declared in three ways:
 *   (i) Double quotes: `"Pawan"`
 *   (ii) Single quotes: `'Pawan'`
 *   (iii) Backticks (Template literals): `` `Pawan` ``
 * 
 * Example:
 */
var name1 = "Pawan";  // Double quotes
var name2 = 'Pawan';  // Single quotes
var name3 = `Pawan`;  // Backticks (Template Literal)

/** 
 * 3. Boolean
 * ------------
 * - Represents logical values: `true` or `false`.
 * - These are keywords in JavaScript.
 * 
 * Example:
 */
var isLoggedIn = true;
var hasAccess = false;

/** 
 * 4. Undefined
 * --------------
 * - Represents a variable that has been declared but not yet assigned a value.
 * - `undefined` is a keyword in JavaScript.
 * 
 * Example:
 */
var status;          // Declared but not initialized (implicitly undefined)
var state = undefined; // Explicitly assigned undefined

/** 
 * 5. Objects
 * ------------
 * - Used to store key-value pairs.
 * - Keys must be unique, and values can be of any type.
 * - Syntax: { key1: value1, key2: value2, ... }.
 * 
 * Example:
 */
var product = {
    name: "iPhone",
    cost: 130000,
    color: "Deep Purple",
    discount: 5,
    description: "The new Apple iPhone"
};
// Accessing values:
console.log(product.name); // Output: iPhone

/** 
 * 6. Null
 * ---------
 * - Represents an intentional absence of any value.
 * - `null` is a keyword in JavaScript.
 * 
 * Example:
 */
var company = null; // The variable is explicitly set to have no value


/** 
 * PRACTICAL EXAMPLES
 * --------------------
 */

var marks = 100;
var name = "Sanket";
var age;
var company = null;
var salary = undefined;
var isStudent = false;

console.log("Marks: ", marks);
console.log("Name: ", name);
console.log("Age: ", age);
console.log("Company: ", company);
console.log("Salary: ", salary);
console.log("Is A Student?: ", isStudent);

var user = {
    name: "Sanket",
    company: "Google",
    age: 24
};

console.log("Details of the user: ", user);

/**
 * DATA TYPES IN JAVASCRIPT
 * ==========================
 * JavaScript has two main categories of data types:
 */

/** 
 * 1. Primitive Data Types
 * -------------------------
 * - These are atomic (indivisible) types.
 * - Examples: `number`, `string`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.
 * 
 * Example:
 */
var age = 24;           // Number
var message = "Hello";  // String
var isActive = true;    // Boolean

/** 
 * 2. Non-Primitive Data Types
 * ----------------------------
 * - These are composed of other data types or collections of data.
 * - Examples: `object`, `array`, `function`.
 * 
 * Example:
 */
var user = { id: 1, name: "Pawan" };  // Object
var numbers = [1, 2, 3, 4];          // Array
function greet() {                   // Function
    console.log("Hello!");
}

/**
 * SUMMARY
 * ---------
 * - JavaScript supports storing numbers, strings, booleans, undefined, and objects.
 * - Primitive Data Types: number, string, boolean, undefined, null, symbol, bigint.
 * - Non-Primitive Data Types: object, array, function.
 * - Primitive types are atomic and immutable.
 * - Non-Primitive types are collections or compositions of other types.
 */
