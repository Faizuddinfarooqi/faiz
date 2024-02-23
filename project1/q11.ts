const names: string[] = ["Mustufa", "Hammad", "Irfan", "Burhan"];

function greetPeople(names: string[]): void {
    const greetingMessage: string = "Hello, ";

    names.forEach((name: string) => {
        console.log(`${greetingMessage}${name}!`);
    });
}

greetPeople(names);
