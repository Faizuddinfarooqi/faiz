// Define the initial guest list
var guests = ["Alice", "Bob", "Charlie"];
// Print initial invitation messages
console.log("Initial invitation messages:");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", please join us for dinner!"));
}
// Inform people about the bigger dinner table
console.log("Great news! We found a bigger dinner table!");
// Add one new guest to the beginning of the array
guests.unshift("Dave");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Eve");
// Use push() to add one new guest to the end of the list
guests.push("Frank");
// Print new invitation messages
console.log("\nUpdated invitation messages:");
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guest = guests_2[_a];
    console.log("Dear ".concat(guest, ", please join us for dinner!"));
}
