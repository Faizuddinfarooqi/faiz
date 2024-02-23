// Define an array of usernames
var usernames = ['admin', 'Alice', 'Bob', 'Charlie', 'David'];
// Function to print greetings
function printGreetings(usernames) {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Call the function to print greetings
printGreetings(usernames);
