// Define Magician class
class Magician {
    constructor(public name: string) {}
}

// Function to make magicians great
function makeGreat(magicians: Magician[]): void {
    for (let magician of magicians) {
        magician.name = `the Great ${magician.name}`;
    }
}

// Function to show magicians
function showMagicians(magicians: Magician[]): void {
    console.log("List of Magicians:");
    for (let magician of magicians) {
        console.log(magician.name);
    }
}

// Main program
function main() {
    // Create some magicians
    const magicians: Magician[] = [
        new Magician("Merlin"),
        new Magician("Gandalf"),
        new Magician("Dumbledore")
    ];

    // Show initial list of magicians
    console.log("Initial List of Magicians:");
    showMagicians(magicians);

    // Make magicians great
    makeGreat(magicians);

    // Show modified list of magicians
    console.log("\nList of Magicians after making them Great:");
    showMagicians(magicians);
}

// Run the main program
main();
