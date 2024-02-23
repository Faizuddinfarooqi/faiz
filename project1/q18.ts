// Define the array of dinner guests
const dinnerGuests: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Function to print the number of dinner guests
function printNumberOfGuests(guests: string[]): void {
    const numGuests: number = guests.length;
    console.log(`I am inviting ${numGuests} people to dinner.`);
}

// Call the function with the dinner guests array
printNumberOfGuests(dinnerGuests);
