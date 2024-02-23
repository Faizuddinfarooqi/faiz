// Define Magician class
var Magician = /** @class */ (function () {
    function Magician(name) {
        this.name = name;
    }
    return Magician;
}());
// Function to make magicians great
function makeGreat(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        magician.name = "the Great ".concat(magician.name);
    }
}
// Function to show magicians
function showMagicians(magicians) {
    console.log("List of Magicians:");
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician.name);
    }
}
// Main program
function main() {
    // Create some magicians
    var magicians = [
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
