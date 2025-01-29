/**
 * STRINGS IN JAVASCRIPT
 * =====================
 * Strings in JavaScript are sequences of characters used to store and manipulate text.
 * They are immutable and can be represented using single (`'`), double (`"`), or backticks (`` ` ``).
 * 
 * FEATURES OF STRINGS:
 * --------------------
 * 1. **Immutable**: Strings cannot be changed after creation.
 * 2. **Zero-Based Indexing**: Characters can be accessed using indices.
 * 3. **String Methods**: JavaScript provides built-in methods for string manipulation.
 * 4. **Unicode Support**: Strings can contain Unicode characters.
 * 5. **Template Literals**: Supports multi-line strings and interpolation.
 */

/**
 * 1. CREATING STRINGS
 * -------------------
 * Strings can be created in multiple ways.
 */

// Method 1: Using string literals (Recommended)
let str1 = "Hello, World!";  // Double quotes
let str2 = 'JavaScript';     // Single quotes
let str3 = `Template Literal`; // Backticks (ES6 feature)

console.log(str1);
console.log(str2);
console.log(str3);

// Method 2: Using String constructor (Not recommended)
let str4 = new String("Object String"); 
console.log(str4); // Output: [String: 'Object String']

console.log(typeof str1); // Output: string
console.log(typeof str4); // Output: object (String object)

/**
 * 2. STRING INDEXING
 * ------------------
 * Strings are **zero-indexed**, meaning the first character is at index `0`.
 */

let sample = "Hello";

// Accessing characters
console.log(sample[0]); // Output: H
console.log(sample[4]); // Output: o
console.log(sample[sample.length - 1]); // Output: o (Last character)
console.log(sample[5]); // Output: undefined (Index out of range)

// Attempting to modify a string (Immutable)
sample[0] = 'Y';
console.log(sample); // Output: Hello (unchanged)

/**
 * 3. STRING TRAVERSAL
 * -------------------
 * Iterating over each character in a string.
 */

// Using `for` loop
for (let i = 0; i < sample.length; i++) {
    console.log(sample[i]);
}

// Using `for...of` loop
for (let char of sample) {
    console.log(char);
}

/**
 * 4. STRING CONCATENATION
 * -----------------------
 * Joining multiple strings together.
 */

let firstName = "Pawan";
let lastName = "Singh";

// Using `+` operator
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Pawan Singh

// Using `concat()` method
let fullName2 = firstName.concat(" ", lastName);
console.log(fullName2); // Output: Pawan Singh

// Using Template Literals (Recommended)
let fullName3 = `${firstName} ${lastName}`;
console.log(fullName3); // Output: Pawan Singh

/**
 * 5. STRING METHODS
 * -----------------
 * JavaScript provides various built-in methods to manipulate strings.
 */

let text = " JavaScript is awesome! ";

// `length` property
console.log(text.length); // Output: 24

// `trim()` - Removes whitespace from start and end
console.log(text.trim()); // Output: "JavaScript is awesome!"

// `toUpperCase()` - Converts to uppercase
console.log(text.toUpperCase()); // Output: " JAVASCRIPT IS AWESOME! "

// `toLowerCase()` - Converts to lowercase
console.log(text.toLowerCase()); // Output: " javascript is awesome! "

// `charAt(index)` - Returns character at a specific index
console.log(text.charAt(5)); // Output: S

// `indexOf(substring)` - Finds index of first occurrence
console.log(text.indexOf("is")); // Output: 11

// `lastIndexOf(substring)` - Finds index of last occurrence
console.log(text.lastIndexOf("a")); // Output: 19

// `includes(substring)` - Checks if a string contains a substring
console.log(text.includes("JavaScript")); // Output: true

// `startsWith(substring)` - Checks if string starts with given text
console.log(text.startsWith(" Java")); // Output: true

// `endsWith(substring)` - Checks if string ends with given text
console.log(text.endsWith("! ")); // Output: true

// `replace(old, new)` - Replaces a substring
console.log(text.replace("awesome", "amazing")); // Output: " JavaScript is amazing! "

// `repeat(n)` - Repeats the string n times
console.log("Hi! ".repeat(3)); // Output: Hi! Hi! Hi! 

/**
 * 6. STRING EXTRACTION
 * --------------------
 * Methods to extract part of a string.
 */

let sentence = "JavaScript is fun";

// `slice(start, end)` - Extracts part of a string
console.log(sentence.slice(0, 10)); // Output: JavaScript

// `substring(start, end)` - Similar to slice but does not accept negative indices
console.log(sentence.substring(3, 10)); // Output: aScript

// `substr(start, length)` - Extracts specific number of characters
console.log(sentence.substr(11, 3)); // Output: fun

/**
 * 7. STRING SPLITTING & JOINING
 * -----------------------------
 * Strings can be split into arrays and joined back.
 */

let csv = "apple,banana,grape";
let fruits = csv.split(",");
console.log(fruits); // Output: [ 'apple', 'banana', 'grape' ]

let joinedStr = fruits.join(" - ");
console.log(joinedStr); // Output: apple - banana - grape


/**
 * 8. STRING SEARCHING
 * -------------------
 * Methods to search within strings.
 */

let paragraph = "Learning JavaScript is fun!";

// `search(substring)` - Finds position of a substring (returns -1 if not found)
console.log(paragraph.search("JavaScript")); // Output: 9

// `match(regex)` - Returns matching values using regex
console.log(paragraph.match(/JavaScript/)); // Output: ["JavaScript", index: 9, input: "Learning JavaScript is fun!"]

/**
 * 9. ESCAPE SEQUENCES
 * -------------------
 * Some special characters in strings.
 *
 * \n - New Line
 * \t - Tab
 * \' - Single Quote
 * \" - Double Quote
 * \\ - Backslash
 */

console.log("Hello\nWorld"); // New Line
console.log("Hello\tWorld"); // Tab Space
console.log("I\'m learning JavaScript"); // Single Quote
console.log("He said \"JavaScript is fun\""); // Double Quote

/**
 * 10. STRING INTERPOLATION
 * ------------------------
 * Using template literals (`) to insert variables.
 */

let lang = "JavaScript";
let message = `I love ${lang}!`;
console.log(message); // Output: I love JavaScript!

/**
 * 11. STRING TRIMMING
 * -------------------
 * `trim()`, `trimStart()`, and `trimEnd()` remove extra whitespace.
 */

let spacedStr = "    Trim this!    ";
console.log(spacedStr.trim()); // Output: "Trim this!"
console.log(spacedStr.trimStart()); // Output: "Trim this!    "
console.log(spacedStr.trimEnd()); // Output: "    Trim this!"

/**
 * 12. STRING REPLACEMENT
 * ----------------------
 * Strings can be modified using `replace()` and `replaceAll()`.
 */

let phrase = "JavaScript is great!";
console.log(phrase.replace("great", "awesome")); // Output: JavaScript is awesome!
console.log(phrase.replaceAll("a", "A")); // Output: JAvAScript is greAt!

/**
 * 13. STRING SEARCHING
 * --------------------
 * `indexOf()`, `lastIndexOf()`, and `search()` help find substrings.
 */

let searchStr = "I love JavaScript and JavaScript loves me!";
console.log(searchStr.indexOf("JavaScript")); // Output: 7
console.log(searchStr.lastIndexOf("JavaScript")); // Output: 22
console.log(searchStr.search("love")); // Output: 2

/**
 * 14. STRING STARTS & ENDS CHECK
 * ------------------------------
 * `startsWith()` and `endsWith()` check string prefixes and suffixes.
 */

console.log(searchStr.startsWith("I love"));  // Output: true
console.log(searchStr.endsWith("me!"));       // Output: true


/**
 * SUMMARY OF STRINGS IN JAVASCRIPT
 * --------------------------------
 * - Strings are **immutable**, meaning they cannot be modified directly.
 * - Use **`.length`** to get string length.
 * - Common methods include **`.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.slice()`, `.replace()`**.
 * - Use **template literals (`) instead of string concatenation for cleaner syntax**.
 * - Strings support **indexing, iteration, and search methods**.
 */

