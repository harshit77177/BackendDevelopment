"use strict";

// Experiment 05 - PBL Activity: simple in-memory library data manager
const library = [];

function addBook(title, author) {
    const book = { title, author };
    library.push(book);
    return book;
}

function findBook(title) {
    return library.find((book) =>
        book.title.toLowerCase() === title.toLowerCase()
    );
}

console.log("--- Library PBL Activity ---");
console.log("Added:", addBook("Clean Code", "Robert C. Martin"));
console.log("Added:", addBook("Eloquent JavaScript", "Marijn Haverbeke"));
console.log("Library:", library);
console.log("Found:", findBook("clean code"));
console.log("Not found:", findBook("Unknown Book"));

module.exports = { library, addBook, findBook };
