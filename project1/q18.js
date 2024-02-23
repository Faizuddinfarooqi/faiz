// Define the array of dinner guests
var dinnerGuests = ["Alice", "Bob", "Charlie", "David", "Eve"];
// Function to print the number of dinner guests
function printNumberOfGuests(guests) {
    var numGuests = guests.length;
    console.log("I am inviting ".concat(numGuests, " people to dinner."));
}
// Call the function with the dinner guests array
printNumberOfGuests(dinnerGuests);
