// Tests for equality and inequality with strings
var string1 = "hello";
var string2 = "world";
console.log("Equality test with strings:", string1 === string2); // False
console.log("Inequality test with strings:", string1 !== string2); // True
// Tests using the lower case function
var string3 = "HELLO";
var string4 = "hello";
console.log("Lowercase equality test:", string3.toLowerCase() === string4.toLowerCase()); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 10;
var num2 = 5;
console.log("Equality test with numbers:", num1 === num2); // False
console.log("Inequality test with numbers:", num1 !== num2); // True
console.log("Greater than test:", num1 > num2); // True
console.log("Less than test:", num1 < num2); // False
console.log("Greater than or equal to test:", num1 >= num2); // True
console.log("Less than or equal to test:", num1 <= num2); // False
// Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log("And operator test:", condition1 && condition2); // False
console.log("Or operator test:", condition1 || condition2); // True
// Test whether an item is in an array
var array1 = [1, 2, 3, 4, 5];
var itemToFind = 3;
console.log("Array includes test:", array1.includes(itemToFind)); // True
// Test whether an item is not in an array
var itemToFind2 = 6;
console.log("Array not includes test:", !array1.includes(itemToFind2)); // True
