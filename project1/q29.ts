// Define an array of usernames
const usernames: string[] = ['admin', 'Alice', 'Bob', 'Charlie', 'David'];

// Function to print greetings
function printGreetings(usernames: string[]): void {
    for (let username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Call the function to print greetings
printGreetings(usernames);
