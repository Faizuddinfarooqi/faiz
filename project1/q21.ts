// Define an array
const numbers: number[] = [1, 2, 3, 4, 5];

// Try to access an index beyond the array's length to intentionally cause an error
const index = 10;
try {
    console.log("Accessing element at index", index, ":", numbers[index]);
} catch (error) {
    console.error("Error occurred:", error.message);
    console.log("Attempting to correct the error...");
    
    // Correcting the error by accessing a valid index
    const validIndex = 2;
    console.log("Accessing element at corrected index", validIndex, ":", numbers[validIndex]);
} finally {
    console.log("Program completed.");
}
