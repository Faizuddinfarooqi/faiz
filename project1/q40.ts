// Define a function called show_magicians that takes an array of magician's names and prints each name
function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
const magicianNames: string[] = ["Merlin", "Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the function to display the magician's names
show_magicians(magicianNames);
