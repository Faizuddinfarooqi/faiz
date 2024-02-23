// Version that passes the if test
let alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version that fails the if test (no output)
alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
