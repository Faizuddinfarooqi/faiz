class Shirt {
    size: string;
    message: string;

    constructor(size: string = "large", message: string = "I love TypeScript") {
        this.size = size;
        this.message = message;
    }

    make_shirt(): void {
        console.log(`Creating a ${this.size} shirt with message: ${this.message}`);
    }
}

// Creating a large shirt with the default message
const largeShirt = new Shirt();
largeShirt.make_shirt();

// Creating a medium shirt with the default message
const mediumShirt = new Shirt("medium");
mediumShirt.make_shirt();

// Creating a shirt of any size with a different message
const customShirt = new Shirt("small", "Hello, World!");
customShirt.make_shirt();