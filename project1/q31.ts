// Define current users and new users
const current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
const new_users: string[] = ["user3", "user6", "user7", "user8", "user9"];

// Function to check if a username is already in use
function isUsernameTaken(username: string): boolean {
    return current_users.includes(username);
}

// Loop through new users to check availability
for (let i = 0; i < new_users.length; i++) {
    if (isUsernameTaken(new_users[i])) {
        console.log(`Username "${new_users[i]}" is already taken. Please choose a different username.`);
    } else {
        console.log(`Username "${new_users[i]}" is available.`);
    }
}
