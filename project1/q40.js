// Define a function called show_magicians that takes an array of magician's names and prints each name
function show_magicians(magicians) {
    console.log("Magicians:");
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicianNames = ["Merlin", "Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call the function to display the magician's names
show_magicians(magicianNames);
