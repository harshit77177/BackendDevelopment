"use strict";

// Experiment 05 - Task 2: String, array, and object manipulation methods

// String methods
const str = "Backend Development";
console.log("--- String Methods ---");
console.log("Original:", str);
console.log("Upper Case:", str.toUpperCase());
console.log("Lower Case:", str.toLowerCase());

const words = str.split(" ");
console.log("Split by space:", words);

// Array methods: add, read, and update
console.log("\n--- Array Methods ---");
const items = ["Node", "Express"];
items.push("MongoDB");
console.log("After Adding:", items);
console.log("First Item (Read):", items[0]);
items[0] = "Node.js";
console.log("After Updating:", items);

// Object methods: add, read, and update
console.log("\n--- Object Methods ---");
const user = { name: "John", role: "Dev" };
user.age = 25;
console.log("After Adding Key:", user);
console.log("User Name (Read):", user.name);
user.role = "Senior Dev";
console.log("After Updating Role:", user);
