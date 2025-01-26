/**
 * SPECIAL CHARACTERS IN JAVASCRIPT STRINGS
 * ==========================================
 * Escape sequences are used to insert special characters in strings.
 * Below are all the special characters with examples.
 */

// 1. Newline (`\n`)
// Inserts a new line in the string.
let newLine = "Hello,\nWorld!";
console.log(newLine);
// Output:
// Hello,
// World!

// 2. Horizontal Tab (`\t`)
// Inserts a tab space in the string.
let tab = "Name:\tPawan";
console.log(tab);
// Output: Name:    Pawan

// 3. Backslash (`\\`)
// Inserts a backslash character.
let backslash = "Path: C:\\Program Files\\App";
console.log(backslash);
// Output: Path: C:\Program Files\App

// 4. Single Quote (`\'`)
// Inserts a single quote character in the string.
let singleQuote = 'It\'s a wonderful day!';
console.log(singleQuote);
// Output: It's a wonderful day!

// 5. Double Quote (`\"`)
// Inserts a double quote character in the string.
let doubleQuote = "He said, \"Learn JavaScript!\"";
console.log(doubleQuote);
// Output: He said, "Learn JavaScript!"

// 6. Carriage Return (`\r`)
// Moves the cursor to the beginning of the line (used rarely).
let carriageReturn = "Hello, World!\rJavaScript";
console.log(carriageReturn);
// Output (depends on the environment, may overwrite "Hello, World!"):
// JavaScript

// 7. Backspace (`\b`)
// Deletes the character before it.
let backspace = "ABC\bD";
console.log(backspace);
// Output: ABD

// 8. Form Feed (`\f`)
// Used for page breaks in text (rarely used).
let formFeed = "Hello,\fWorld!";
console.log(formFeed);
// Output (depends on the environment, may not be visible):
// Hello,
// World!

// 9. Unicode (`\uXXXX`)
// Inserts a Unicode character using a 4-digit hexadecimal code.
let unicode = "Smiley: \u263A";
console.log(unicode);
// Output: Smiley: ☺

// 10. Hexadecimal (`\xXX`)
// Inserts a character using a 2-digit hexadecimal code.
let hex = "A in Hex: \x41";
console.log(hex);
// Output: A in Hex: A

// 11. Null Character (`\0`)
// Represents the null character but does not terminate the string.
let nullChar = "Null\0Character";
console.log(nullChar);
// Output: NullCharacter

// 12. Vertical Tab (`\v`)
// Adds vertical spacing (rarely used).
let verticalTab = "Hello,\vWorld!";
console.log(verticalTab);
// Output (depends on the environment, may not be visible):
// Hello,
// World!

/**
 * SUMMARY OF SPECIAL CHARACTERS
 * -------------------------------
 * - `\n` : Newline
 * - `\t` : Horizontal Tab
 * - `\\` : Backslash
 * - `\'` : Single Quote
 * - `\"` : Double Quote
 * - `\r` : Carriage Return
 * - `\b` : Backspace
 * - `\f` : Form Feed
 * - `\uXXXX` : Unicode Character
 * - `\xXX` : Hexadecimal Character
 * - `\0` : Null Character
 * - `\v` : Vertical Tab
 */

// Example combining multiple special characters:
let combined = "Name:\tPawan\nRole:\tDeveloper\nPath:\tC:\\Projects\\JavaScript";
console.log(combined);
// Output:
// Name:    Pawan
// Role:    Developer
// Path:    C:\Projects\JavaScript
