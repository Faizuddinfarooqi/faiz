var Motorcycle = /** @class */ (function () {
    function Motorcycle(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    return Motorcycle;
}());
// Create an array of Motorcycle objects
var motorcycles = [
    new Motorcycle("Honda", "CBR600RR"),
    new Motorcycle("Yamaha", "YZF-R1"),
    new Motorcycle("Kawasaki", "Ninja ZX-10R"),
    new Motorcycle("Suzuki", "GSX-R1000"),
];
// Print statements about each motorcycle
motorcycles.forEach(function (motorcycle) {
    console.log("I would like to own a ".concat(motorcycle.brand, " ").concat(motorcycle.model, " motorcycle."));
});
