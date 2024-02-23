// Version that runs the if block (green alien)
var alienColorIf = 'green';
if (alienColorIf === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
// Version that runs the else block (non-green alien)
var alienColorElse = 'red'; // Change this to a color other than 'green' to trigger the else block
if (alienColorElse === 'green') {
    console.log("Player just earned 5 points for shooting the alien.");
}
else {
    console.log("Player just earned 10 points.");
}
