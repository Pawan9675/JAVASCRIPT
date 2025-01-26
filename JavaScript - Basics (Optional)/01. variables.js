/**
 * VARIABLES IN JAVASCRIPT
 * ===========================
 * In JavaScript, we can create variables using three keywords: `var`, `let`, and `const`.
 */

/** 
 * 1. Using `var` Keyword
 * ------------------------
 * Syntax: var <variableName> = <value>;
 * 
 * Characteristics:
 * - Function-scoped.
 * - Can be re-declared and updated within the same scope.
 * - Allows hoisting (accessible before declaration but initialized as `undefined`).
 */
var score = 10;
var marks = 90;

/** 
 * 2. Using `let` Keyword
 * ------------------------
 * Syntax: let <variableName> = <value>;
 * 
 * Characteristics:
 * - Block-scoped (accessible only within the block where it is declared).
 * - Cannot be re-declared in the same block, but can be updated.
 * - Does not allow hoisting (must be declared before use).
 */
let age = 24;
let flag = 0;

/** 
 * 3. Using `const` Keyword
 * --------------------------
 * Syntax: const <variableName> = <value>;
 * 
 * Characteristics:
 * - Block-scoped.
 * - Must be initialized at the time of declaration.
 * - Cannot be updated or re-declared (immutable).
 */
const x = 100;
const y = 30;

// Note: Prefer using `const` for variables that won't change, and `let` for variables that may change.

/**
 * SEMICOLONS IN JAVASCRIPT
 * --------------------------
 * - Each line of JavaScript code is considered a statement.
 * - Adding a semicolon (`;`) at the end of each statement is optional, 
 *   but it is a good practice for better readability and to avoid errors.
 */

// Example:
let name = "John"; // Statement ends with a semicolon.

/**
 * NAMING RULES FOR VARIABLES
 * ---------------------------
 * Follow these rules to create valid and meaningful variable names:
 * 1. Variable names can contain:
 *    - Alphabets (lowercase or uppercase), digits, underscores (_), and dollar signs ($).
 * 
 * 2. A variable name cannot start with a digit.
 *    Example: 
 *      let 1name = "Invalid"; // ❌ Incorrect
 *      let name1 = "Valid";   // ✅ Correct
 * 
 * 3. Variable names cannot contain spaces or special characters (e.g., @, #, !).
 * 
 * 4. Avoid using JavaScript keywords or reserved words as variable names.
 *    Example: 
 *      let let = 20; // ❌ Incorrect
 * 
 * 5. Use meaningful names for better readability and maintainability.
 *    Example:
 *      let a = 25;      // ❌ Not meaningful
 *      let age = 25;    // ✅ Meaningful
 */

// Good Example:
let studentName = "Alice"; // Descriptive and valid
const maxScore = 100;      // Follows naming conventions