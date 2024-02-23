function printNameCases(name: string): void {
    console.log("Original Name: ", name);
    console.log("Lowercase: ", name.toLowerCase());
    console.log("Uppercase: ", name.toUpperCase());
    console.log("Titlecase: ", toTitleCase(name));
}

function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Test the function
const personName: string = "john doe";
printNameCases(personName);
