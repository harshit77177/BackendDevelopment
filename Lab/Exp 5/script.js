"use strict";

// Experiment 05 - Task 1: Arrays, objects, and functions

// 1. Arrays
const fruits = ["Apple", "Banana", "Mango"];
console.log("--- Array Demonstration ---");
console.log("Fruits array:", fruits);
fruits.push("Orange");
console.log("After push:", fruits);

// 2. Objects
const student = {
    name: "John Doe",
    age: 20,
    course: "Backend Development"
};

console.log("\n--- Object Demonstration ---");
console.log("Student object:", student);
console.log("Student Name:", student.name);

// 3. Functions
function greet(name) {
    return `Hello, ${name}! Welcome to Backend Development Lab.`;
}

console.log("\n--- Function Demonstration ---");
console.log(greet("Student"));

// Display the same results in the browser, when this file is opened through index.html.
if (typeof document !== "undefined") {
    const output = document.getElementById("output");
    if (output) {
        output.textContent = [
            "--- Array Demonstration ---",
            `Fruits array: Apple, Banana, Mango`,
            `After push: ${fruits.join(", ")}`,
            "",
            "--- Object Demonstration ---",
            `Student: ${student.name}, ${student.age}, ${student.course}`,
            "",
            "--- Function Demonstration ---",
            greet("Student")
        ].join("\n");
    }
}
