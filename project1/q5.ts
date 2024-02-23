class NameStripper {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    printWithWhitespace(): void {
        console.log(`Name with whitespace: \n\t${this.name}\n`);
    }

    printStrippedName(): void {
        const strippedName = this.name.trim();
        console.log(`Stripped name: ${strippedName}`);
    }
}

// Example usage
const personName = "   John Doe \t";
const stripper = new NameStripper(personName);

stripper.printWithWhitespace();
stripper.printStrippedName();
