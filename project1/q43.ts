function orderSandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss", "Pickles");
orderSandwich("Peanut Butter", "Jelly");
