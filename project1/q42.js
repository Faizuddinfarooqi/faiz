function makeGreat(magicians) {
    // Create a copy of the original array
    var greatMagicians = magicians.slice();
    // Add 'the Great' to each magician's name
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += ' the Great';
    }
    return greatMagicians;
}
function showMagicians(magicians, title) {
    console.log("Magicians ".concat(title, ":"));
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Original array of magicians' names
var magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call makeGreat() with a copy of the original array
var greatMagicians = makeGreat(magicians);
// Show both arrays to demonstrate the changes
showMagicians(magicians, 'Original');
showMagicians(greatMagicians, 'Great');
