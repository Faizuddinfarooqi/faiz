"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Prompt user to enter favorite fruits
rl.question("Enter your three favorite fruits (separated by commas): ", function (input) {
    // Split user input into an array of favorite fruits
    var favorite_fruits = input.split(",").map(function (fruit) { return fruit.trim(); });
    // Check if each fruit is in the favorite_fruits array
    if (favorite_fruits.includes("banana")) {
        console.log("You really like bananas!");
    }
    if (favorite_fruits.includes("apple")) {
        console.log("You really like apples!");
    }
    if (favorite_fruits.includes("strawberry")) {
        console.log("You really like strawberries!");
    }
    if (favorite_fruits.includes("orange")) {
        console.log("You really like oranges!");
    }
    else {
        console.log("You don't seem to like oranges much.");
    }
    if (favorite_fruits.includes("grape")) {
        console.log("You really like grapes!");
    }
    else {
        console.log("You don't seem to like grapes much.");
    }
    // Close the readline interface
    rl.close();
});
