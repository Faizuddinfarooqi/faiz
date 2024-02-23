// Define an array
var numbers = [1, 2, 3, 4, 5];
// Try to access an index beyond the array's length to intentionally cause an error
var index = 10;
try {
    console.log("Accessing element at index", index, ":", numbers[index]);
}
catch (error) {
    console.error("Error occurred:", error.message);
    console.log("Attempting to correct the error...");
    // Correcting the error by accessing a valid index
    var validIndex = 2;
    console.log("Accessing element at corrected index", validIndex, ":", numbers[validIndex]);
}
finally {
    console.log("Program completed.");
}
