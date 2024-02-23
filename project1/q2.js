function printNameCases(name) {
    console.log("Original Name: ", name);
    console.log("Lowercase: ", name.toLowerCase());
    console.log("Uppercase: ", name.toUpperCase());
    console.log("Titlecase: ", toTitleCase(name));
}
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
// Test the function
var personName = "john doe";
printNameCases(personName);
