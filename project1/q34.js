var Animal = /** @class */ (function () {
    function Animal(name, characteristic) {
        this.name = name;
        this.characteristic = characteristic;
    }
    return Animal;
}());
// Define three animals with a common characteristic
var animals = [
    new Animal("Dog", "loyal companion"),
    new Animal("Cat", "independent nature"),
    new Animal("Rabbit", "adorable demeanor")
];
// Print out the name of each animal using a for loop
console.log("Animals:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal.name);
}
// Print a statement about each animal
console.log("\nStatements about each animal:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.name.toLowerCase(), " would make a great pet."));
}
// Print what these animals have in common
var commonCharacteristic = animals[0].characteristic;
console.log("\nAll of these animals share the characteristic of being ".concat(commonCharacteristic, "."));
console.log("Any of these animals would make a great pet!");
