function makeGreat(magicians: string[]): string[] {
    // Create a copy of the original array
    const greatMagicians: string[] = magicians.slice();

    // Add 'the Great' to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += ' the Great';
    }

    return greatMagicians;
}

function showMagicians(magicians: string[], title: string): void {
    console.log(`Magicians ${title}:`);
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original array of magicians' names
const magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Call makeGreat() with a copy of the original array
const greatMagicians: string[] = makeGreat(magicians);

// Show both arrays to demonstrate the changes
showMagicians(magicians, 'Original');
showMagicians(greatMagicians, 'Great');
