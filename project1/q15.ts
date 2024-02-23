// Define the initial guest list
let guests: string[] = ["Alice", "Bob", "Charlie"];

// Print initial invitation messages
console.log("Initial invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest}, please join us for dinner!`);
}

// Inform people about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");

// Add one new guest to the beginning of the array
guests.unshift("Dave");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Eve");

// Use push() to add one new guest to the end of the list
guests.push("Frank");

// Print new invitation messages
console.log("\nUpdated invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest}, please join us for dinner!`);
}
