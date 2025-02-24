// ***************************************************
// 🔥 Lexical Scoping vs Dynamic Scoping
// ***************************************************

/*
1. **Lexical Scoping:**
   - Lexical scoping means that the scope of a variable is determined at the time the code is written (statically). In other words, a function's scope is determined by where it is declared in the code.
   - Variables are resolved based on the **physical structure** of the code (static resolution).
*/

/*
2. **Dynamic Scoping (Hypothetical Case)**
   - Dynamic scoping means that the scope of a variable is determined at runtime based on the call stack.
   - Variables are resolved based on the most recent function in the call stack (dynamic resolution),  i.e., which function is executing at the moment and what values are in scope at that time.
*/

// Example Code:

var teacher = "sanket"; // teacher -> global scope

function ask(question) { // ask -> global scope; question -> ask scope
    console.log(teacher, question); // Logs 'teacher' based on lexical scoping rules
}

function teach() { // teach -> global scope
    var teacher = "Pulkit"; // teacher -> local scope of teach
    ask("Why"); // Calls ask function from inside teach
}

teach();



/*
**Detailed Explanation with Lexical Scoping and Dynamic Scoping:**
----------------------------------------------------------------------------------------

### Lexical Scoping:
----------------------

Output (Lexical Scoping): sanket Why

1. Parsing Phase (Compilation Phase):
    - The JavaScript engine first parses the code and builds a structure (abstract syntax tree) that defines the relationship between variables and functions.
    - The global variable teacher is assigned the value "sanket".
    - The `ask` function is declared in the global scope, taking `question` as a parameter.
    - The teach function is declared in the global scope, and inside teach, a local variable teacher is assigned the value "Pulkit".

2. Execution Phase:
    - The teach() function is called.
    - Inside teach(), the local teacher variable is set to "Pulkit".
    - The ask("Why") function is then called from inside teach().
        - Since JavaScript uses lexical scoping, when the ask function is called, it looks up the variable teacher in its scope chain.
        - The ask function doesn't find teacher in its local scope, so it looks in the outer scope, which is the global scope.
        - In the global scope, teacher has the value "sanket", so "sanket" is logged when ask() is executed, along with the string "Why".
    - Final Output: sanket Why
    - The teacher in the local teach function does not affect the ask function because of lexical scoping—the scope of teacher in ask is resolved based on where ask was declared, which is in the global scope.

### Dynamic Scoping (Hypothetical Case in Other Languages):
------------------------------------------------------------------

Output (Dynamic Scoping - Hypothetically): Pulkit Why

In a language that uses dynamic scoping (like some other programming languages, but not JavaScript), the function ask() would not follow lexical scoping. Instead, it would resolve the value of teacher dynamically based on the function call stack at runtime.

1. Parsing Phase (Compilation Phase):
    - The parsing phase is the same as in lexical scoping; the engine recognizes the functions and variables in the code.

2. Execution Phase (Dynamic Scoping):
    - When the teach() function is called, teacher is assigned "Pulkit", but in dynamic scoping, when the ask() function is invoked, the engine checks the call stack for the most recent variable assignment.
    - Since ask() is called from teach(), in dynamic scoping, it would resolve teacher as "Pulkit", because it looks up the most recent function's scope (the scope of the calling function).
    - Therefore, the output would have been "Pulkit Why" in a dynamically scoped language.
    - Dynamic scoping resolves the value of `teacher` based on the most recent function in the call stack at runtime.
*/ 

/*
Summary of Scoping in the Example:
--------------------------------------------

1. Lexical Scoping (JavaScript):
    - The variable teacher inside the ask function resolves to the global scope, and its value is "sanket", regardless of the local variable teacher inside teach.
    - Output: sanket Why
2. Dynamic Scoping (Hypothetically):
    - The variable teacher inside the ask function would resolve to the teacher variable inside teach, and its value would be "Pulkit", because of dynamic resolution based on the function call stack.
    - Output (in a dynamically scoped language): Pulkit Why
*/

/*
Conclusion:
----------------------

1. JavaScript uses lexical scoping, meaning that the value of variables is resolved based on the physical structure of the code (where functions and variables are declared).
2. In a dynamically scoped language, the value of a variable would be resolved based on the most recent function in the call stack, which is not how JavaScript works.
*/