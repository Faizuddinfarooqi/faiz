class Animal {
    constructor(public name: string, public characteristic: string) {}
}

// Define three animals with a common characteristic
const animals: Animal[] = [
    new Animal("Dog", "loyal companion"),
    new Animal("Cat", "independent nature"),
    new Animal("Rabbit", "adorable demeanor")
];

// Print out the name of each animal using a for loop
console.log("Animals:");
for (const animal of animals) {
    console.log(animal.name);
}

// Print a statement about each animal
console.log("\nStatements about each animal:");
for (const animal of animals) {
    console.log(`A ${animal.name.toLowerCase()} would make a great pet.`);
}

// Print what these animals have in common
const commonCharacteristic = animals[0].characteristic;
console.log(`\nAll of these animals share the characteristic of being ${commonCharacteristic}.`);
console.log(`Any of these animals would make a great pet!`);
