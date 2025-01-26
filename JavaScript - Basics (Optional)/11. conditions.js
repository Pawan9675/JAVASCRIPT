/**
 * CONDITIONAL STATEMENTS IN JAVASCRIPT
 * =====================================
 * Conditional statements are used to execute code blocks based on specific conditions.
 * A condition evaluates to either `true` or `false`.
 * Depending on the result, the corresponding code block is executed.
 */

/**
 * TYPES OF CONDITIONAL STATEMENTS:
 * ---------------------------------
 * 1. `if` Statement
 * 2. `if-else` Statement
 * 3. `if-else-if` Ladder
 * 4. Nested `if-else` Statements
 * 5. `switch` Statement
 */

/**
 * 1. `if` STATEMENT
 * -------------------
 * The `if` statement checks a condition, and if it evaluates to `true`, 
 * the code block inside the `if` is executed.
 * 
 * Syntax:
 *   if (condition) {
 *       // Code to execute if the condition is true
 *   }
 * 
 * Note: 
 * - The condition is enclosed in parentheses `()`.
 * - The code block is enclosed in curly braces `{}`.
 * - Curly braces `{}` define a block, and it’s a good practice to always use them.
 * - If the condition evaluates to `false`, the code inside the `if` block is skipped.
 */

// Example:
let number = 10;
if (number > 5) {
    console.log("The number is greater than 5"); // Output: The number is greater than 5
}

if (true) {
    console.log("This condition is always true!"); // Output: This condition is always true!
}

if (false) {
    console.log("This will never print because the condition is false.");
}

/**
 * 2. `if-else` STATEMENT
 * ------------------------
 * The `if-else` statement is used when there are two possible outcomes:
 * - If the condition is `true`, the code in the `if` block executes.
 * - If the condition is `false`, the code in the `else` block executes.
 * 
 * Syntax:
 *   if (condition) {
 *       // Code to execute if the condition is true
 *   } else {
 *       // Code to execute if the condition is false
 *   }
 */

// Example:
let isSubscribed = false;

if (isSubscribed) {
    console.log("Welcome! Enjoy the premium content."); 
} else {
    console.log("Please subscribe to access premium content."); 
    // Output: Please subscribe to access premium content.
}

/**
 * Notes:
 * -------
 * 1. If the condition in the `if` statement evaluates to `true`, only the `if` block runs, and the `else` block is skipped.
 * 2. If the condition is `false`, the `if` block is skipped, and only the `else` block runs.
 * 3. An `if` block can exist without an `else`, but an `else` block cannot exist without an `if`.
 */

/**
 * 3. `if-else-if` LADDER
 * ------------------------
 * The `if-else-if` ladder is used to check multiple conditions in sequence.
 * As soon as one condition evaluates to `true`, the corresponding block is executed, and the rest are skipped.
 * 
 * Syntax:
 *   if (condition1) {
 *       // Code to execute if condition1 is true
 *   } else if (condition2) {
 *       // Code to execute if condition2 is true
 *   } else {
 *       // Code to execute if none of the conditions are true
 *   }
 * 
 * Notes:
 * -------
 * 1. The code block of the first `true` condition is executed, and the rest are skipped.
 * 2. An `if-else-if` structure must start with an `if` block. The `else` block is optional.
 * 3. Multiple `else if` blocks can be used in a single ladder.
 */

// Example:
let userRole = "VIP";

if (userRole === "Admin") {
    console.log("Welcome Admin! You have full access."); 
} else if (userRole === "VIP") {
    console.log("Welcome VIP! Enjoy exclusive content."); 
} else if (userRole === "Subscriber") {
    console.log("Welcome Subscriber! Enjoy basic content."); 
} else {
    console.log("Please register to access the platform."); 
    // Output: Welcome VIP! Enjoy exclusive content.
}

/**
 * 4. NESTED `if-else` STATEMENTS
 * -------------------------------
 * A nested `if-else` statement is an `if` or `if-else` statement inside another `if` or `else` block.
 * This is useful for evaluating conditions that depend on previous conditions.
 * This allows for more complex decision-making by checking conditions within other conditions.
 * 
 * Syntax:
 *   if (condition1) {
 *       if (condition2) {
 *           // Code to execute if condition1 and condition2 are true
 *       } else {
 *           // Code to execute if condition1 is true and condition2 is false
 *       }
 *   } else {
 *       // Code to execute if condition1 is false
 *   }
 * 
 * NOTES:
 * -------
 * - Indentation is critical to make nested conditions readable.
 * - Avoid deeply nested conditions as they can make the code harder to understand.
 */

// Example:
let hasPrimeSubscription = true;
let hasDiscoveryPlusSubscription = false;

if (hasPrimeSubscription) {
    if (hasDiscoveryPlusSubscription) {
        console.log("Enjoy both Prime and Discovery Plus content!"); 
    } else {
        console.log("Enjoy Prime content only."); 
        // Output: Enjoy Prime content only.
    }
} else {
    console.log("Please subscribe to enjoy the content."); 
}

/** 
 * 5. `switch` STATEMENT
 * ----------------------
 * The `switch` statement is used to evaluate a single expression against multiple cases.
 * It is an alternative to an `if-else-if` ladder when comparing the same variable or value.
 * 
 * Syntax:
 *   switch (expression) {
 *       case value1:
 *           // Code to execute if expression === value1
 *           break;
 *       case value2:
 *           // Code to execute if expression === value2
 *           break;
 *       default:
 *           // Code to execute if no case matches
 *   }
 * 
 * Notes:
 * - The `break` statement is used to stop further case evaluations.
 * - The `default` block is optional and acts as a fallback.
 */

// Example:
let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start your week strong!");
        break;
    case "Tuesday":
        console.log("Keep the momentum going!"); // Output: Keep the momentum going!
        break;
    case "Friday":
        console.log("It's almost the weekend!");
        break;
    default:
        console.log("Enjoy your day!");
}

/**
 * IMPORTANT NOTES
 * ----------------
 * 1. The `if` statement can exist alone without an `else` or `else if`.
 * 2. An `else` block cannot exist without an `if`.
 * 3. An `else if` block cannot exist without an `if` but can exist without an `else`.
 * 4. In an `if-else-if` ladder, as soon as one condition is `true`, all subsequent conditions are ignored.
 * 5. Use proper indentation and curly braces `{}` to improve readability and avoid errors.
 * 6. Avoid overly nested conditions to keep the code clean and easy to maintain.
 */

/** 
 * ADDITIONAL NOTES:
 * -----------------
 * 1. Logical Operators in Conditions:
 *    - Logical AND (`&&`): All conditions must be true.
 *    - Logical OR (`||`): At least one condition must be true.
 *    - Logical NOT (`!`): Negates the condition.
 * 
 * Example:
 */
let isStudents = true;
let hasLibraryCard = false;

if (isStudents && hasLibraryCard) {
    console.log("You can borrow books.");
} else if (isStudents || hasLibraryCard) {
    console.log("You can access limited library services."); // Output: You can access limited library services.
} else {
    console.log("Please register to use library services.");
}

/**
 * ADVANCED EXAMPLE (Combining Nested and Ladder)
 * ----------------------------------------------
 */
let subscriptionType = "VIP";
let isStudent = true;

if (subscriptionType === "Premium") {
    console.log("Enjoy Premium content!");
} else if (subscriptionType === "VIP") {
    if (isStudent) {
        console.log("Enjoy VIP content with a student discount!"); 
        // Output: Enjoy VIP content with a student discount!
    } else {
        console.log("Enjoy VIP content!");
    }
} else {
    console.log("Please subscribe to unlock more content.");
}

/** 
 * SUMMARY OF CONDITIONAL STATEMENTS:
 * -----------------------------------
 * 1. `if` Statement:
 *    - Executes a block of code if a condition is true.
 * 
 * 2. `if-else` Statement:
 *    - Executes one block of code if a condition is true, and another block if it is false.
 * 
 * 3. `if-else-if` Ladder:
 *    - Evaluates multiple conditions in sequence.
 * 
 * 4. Nested `if-else`:
 *    - Allows for conditional blocks within other conditional blocks.
 * 
 * 5. `switch` Statement:
 *    - Evaluates a single expression against multiple cases for cleaner syntax.
 * 
 * 6. Logical Operators:
 *    - Combine multiple conditions for more complex decision-making.
 */