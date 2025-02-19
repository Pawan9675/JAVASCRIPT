/**
 * OBJECTS IN JAVASCRIPT
 * ======================
 * Objects in JavaScript are used to store **key-value pairs**.
 * They allow us to group related data and functions into a single entity.
 * 
 * FEATURES OF OBJECTS:
 * --------------------
 * 1. **Key-Value Storage**: Objects store data in `{ key: value }` format.
 * 2. **Unordered**: The order of keys is not guaranteed.
 * 3. **Dynamic**: Keys and values can be modified, added, or deleted.
 * 4. **Supports Nesting**: Objects can have other objects inside them.
 */

/**
 * 1. CREATING OBJECTS
 * -------------------
 * Objects can be created in different ways.
 */

// Method 1: Object Literal (Most Common)
let person = {
    name: "Pawan",
    age: 24,
    isStudent: false
};

// Method 2: Using the `new Object()` constructor
let car = new Object();
car.brand = "Tesla";
car.model = "Model X";
car.year = 2022;

// Method 3: Using Object.create() (For Prototype Inheritance)
let user = Object.create(person);
user.role = "Developer";

// Method 4: Using Class Constructor (OOP Style)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}
let pet = new Animal("Bruno", "Dog");

console.log(person); // Output: { name: 'Pawan', age: 24, isStudent: false }
console.log(car);    // Output: { brand: 'Tesla', model: 'Model X', year: 2022 }
console.log(user);   // Output: { role: 'Developer' }
console.log(pet);    // Output: Animal { name: 'Bruno', species: 'Dog' }

console.log("---------");

/**
 * 2. ACCESSING OBJECT PROPERTIES
 * ------------------------------
 * Object properties can be accessed in two ways:
 */

// Using Dot Notation
console.log(person.name);   // Output: Pawan
console.log(car.brand);     // Output: Tesla

// Using Bracket Notation
console.log(person["age"]);   // Output: 24
console.log(car["model"]);    // Output: Model X

console.log("---------");

/**
 * 3. UPDATING OBJECT PROPERTIES
 * -----------------------------
 * Properties of an object can be modified easily.
 */

person.age = 25;
car.year = 2023;

console.log(person.age); // Output: 25
console.log(car.year);   // Output: 2023

console.log("---------");

/**
 * 4. ADDING NEW PROPERTIES TO OBJECTS
 * -----------------------------------
 * New key-value pairs can be added dynamically.
 */

person.gender = "Male";
car.color = "Black";

console.log(person); // Output: { name: 'Pawan', age: 25, isStudent: false, gender: 'Male' }
console.log(car);    // Output: { brand: 'Tesla', model: 'Model X', year: 2023, color: 'Black' }

console.log("---------");

/**
 * 5. DELETING A PROPERTY
 * ----------------------
 * Properties can be removed using the `delete` keyword.
 */

delete person.isStudent;
delete car.year;

console.log(person); // Output: { name: 'Pawan', age: 25, gender: 'Male' }
console.log(car);    // Output: { brand: 'Tesla', model: 'Model X', color: 'Black' }

console.log("---------");

/**
 * 6. CHECKING IF A PROPERTY EXISTS
 * --------------------------------
 * The `in` operator and `hasOwnProperty()` method can be used.
 */

console.log("name" in person);          // Output: true
console.log(person.hasOwnProperty("age")); // Output: true
console.log(car.hasOwnProperty("year"));   // Output: false (because we deleted it)

console.log("---------");

/**
 * 7. ITERATING OVER OBJECT PROPERTIES
 * -----------------------------------
 * Objects can be looped using `for...in` and `Object.keys()`.
 */

// Using `for...in` loop
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: Pawan
// age: 25
// gender: Male

console.log("---------");

// Using `Object.keys()` (returns an array of keys)
console.log(Object.keys(person)); // Output: [ 'name', 'age', 'gender' ]

// Using `Object.values()` (returns an array of values)
console.log(Object.values(person)); // Output: [ 'Pawan', 25, 'Male' ]

// Using `Object.entries()` (returns an array of key-value pairs)
console.log(Object.entries(person));
// Output: [ [ 'name', 'Pawan' ], [ 'age', 25 ], [ 'gender', 'Male' ] ]

console.log("---------");

/**
 * 8. NESTED OBJECTS
 * -----------------
 * Objects can contain other objects.
 */

let student = {
    name: "Pawan",
    marks: {
        math: 95,
        science: 98
    }
};

// Accessing nested object properties
console.log(student.marks.math); // Output: 95
console.log(student["marks"]["science"]); // Output: 98

console.log("---------");

/**
 * 9. OBJECT DESTRUCTURING
 * ------------------------
 * Destructuring allows extracting object properties into variables.
 */

let { name, age } = person;
console.log(name, age); // Output: Pawan 25

console.log("---------");

/**
 * 10. OBJECT SPREAD OPERATOR
 * ---------------------------
 * Used to copy objects and merge multiple objects.
 */

// Copying an object
let personCopy = { ...person };
console.log(personCopy); // Output: { name: 'Pawan', age: 25, gender: 'Male' }

// Merging objects
let employee = { ...person, job: "Software Engineer" };
console.log(employee); // Output: { name: 'Pawan', age: 25, gender: 'Male', job: 'Software Engineer' }

console.log("---------");

/**
 * 11. OBJECT FREEZING & SEALING
 * -----------------------------
 * `Object.freeze()` prevents modifications.
 * `Object.seal()` allows updates but prevents adding/deleting properties.
 */

let obj = { x: 10, y: 20 };

// Freezing the object (No modifications allowed)
Object.freeze(obj);
obj.x = 100; // No effect
console.log(obj.x); // Output: 10

// Sealing the object (Updates allowed, but no additions/removals)
let obj2 = { a: 1, b: 2 };
Object.seal(obj2);
obj2.a = 100; // Allowed
delete obj2.b; // Not allowed
console.log(obj2); // Output: { a: 100, b: 2 }

/**
 * SUMMARY OF OBJECT OPERATIONS:
 * ------------------------------
 * - Objects store key-value pairs.
 * - Properties can be accessed, modified, added, and deleted.
 * - Objects can be iterated using `for...in`, `Object.keys()`, and `Object.values()`.
 * - Objects support nesting and destructuring.
 * - The spread operator (`...`) is used for copying and merging objects.
 * - `freeze()` prevents modifications, while `seal()` allows modifications but not additions/removals.
 */
