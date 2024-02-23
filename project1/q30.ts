// Define a type for User
type User = {
    username: string;
    age: number;
    email: string;
};

// Define an array of users
const users: User[] = [];

// Add some users to the array (for testing purposes)
// users.push(
//     { username: "user1", age: 25, email: "user1@example.com" },
//     { username: "user2", age: 30, email: "user2@example.com" }
// );

// Function to check if the list of users is empty
function checkEmptyUsers(users: User[]): boolean {
    return users.length === 0;
}

// Function to remove all usernames from the array
function removeAllUsernames(users: User[]): void {
    for (const user of users) {
        delete user.username;
    }
}

// Main function
function main(): void {
    if (checkEmptyUsers(users)) {
        console.log("We need to find some users!");
    } else {
        console.log("Users list is not empty. Removing all usernames...");
        removeAllUsernames(users);
        console.log("Usernames removed successfully!");
    }
}

// Call the main function
main();
