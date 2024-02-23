// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log("Equality test with strings:", string1 === string2); // False
console.log("Inequality test with strings:", string1 !== string2); // True

// Tests using the lower case function
const string3: string = "HELLO";
const string4: string = "hello";

console.log("Lowercase equality test:", string3.toLowerCase() === string4.toLowerCase()); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log("Equality test with numbers:", num1 === num2); // False
console.log("Inequality test with numbers:", num1 !== num2); // True
console.log("Greater than test:", num1 > num2); // True
console.log("Less than test:", num1 < num2); // False
console.log("Greater than or equal to test:", num1 >= num2); // True
console.log("Less than or equal to test:", num1 <= num2); // False

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log("And operator test:", condition1 && condition2); // False
console.log("Or operator test:", condition1 || condition2); // True

// Test whether an item is in an array
const array1: number[] = [1, 2, 3, 4, 5];
const itemToFind: number = 3;

console.log("Array includes test:", array1.includes(itemToFind)); // True

// Test whether an item is not in an array
const itemToFind2: number = 6;

console.log("Array not includes test:", !array1.includes(itemToFind2)); // True
