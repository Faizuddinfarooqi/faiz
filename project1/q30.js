// Define an array of users
var users = [];
// Add some users to the array (for testing purposes)
// users.push(
//     { username: "user1", age: 25, email: "user1@example.com" },
//     { username: "user2", age: 30, email: "user2@example.com" }
// );
// Function to check if the list of users is empty
function checkEmptyUsers(users) {
    return users.length === 0;
}
// Function to remove all usernames from the array
function removeAllUsernames(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        delete user.username;
    }
}
// Main function
function main() {
    if (checkEmptyUsers(users)) {
        console.log("We need to find some users!");
    }
    else {
        console.log("Users list is not empty. Removing all usernames...");
        removeAllUsernames(users);
        console.log("Usernames removed successfully!");
    }
}
// Call the main function
main();
