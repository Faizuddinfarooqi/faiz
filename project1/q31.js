// Define current users and new users
var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["user3", "user6", "user7", "user8", "user9"];
// Function to check if a username is already in use
function isUsernameTaken(username) {
    return current_users.includes(username);
}
// Loop through new users to check availability
for (var i = 0; i < new_users.length; i++) {
    if (isUsernameTaken(new_users[i])) {
        console.log("Username \"".concat(new_users[i], "\" is already taken. Please choose a different username."));
    }
    else {
        console.log("Username \"".concat(new_users[i], "\" is available."));
    }
}
