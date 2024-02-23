class Motorcycle {
    constructor(public brand: string, public model: string) {}
}

// Create an array of Motorcycle objects
let motorcycles: Motorcycle[] = [
    new Motorcycle("Honda", "CBR600RR"),
    new Motorcycle("Yamaha", "YZF-R1"),
    new Motorcycle("Kawasaki", "Ninja ZX-10R"),
    new Motorcycle("Suzuki", "GSX-R1000"),
];

// Print statements about each motorcycle
motorcycles.forEach(motorcycle => {
    console.log(`I would like to own a ${motorcycle.brand} ${motorcycle.model} motorcycle.`);
});
