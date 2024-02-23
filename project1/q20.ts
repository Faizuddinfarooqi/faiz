// Define types for the items
type Item = {
    name: string;
    category: string;
    quantity: number;
};

// Function to create an object containing items
function createObject(items: Item[]): Record<string, Item[]> {
    const obj: Record<string, Item[]> = {};

    items.forEach(item => {
        if (!obj[item.category]) {
            obj[item.category] = [];
        }
        obj[item.category].push(item);
    });

    return obj;
}

// Sample items
const items: Item[] = [
    { name: "Apple", category: "Fruits", quantity: 5 },
    { name: "Banana", category: "Fruits", quantity: 3 },
    { name: "Carrot", category: "Vegetables", quantity: 10 },
    { name: "Potato", category: "Vegetables", quantity: 7 },
    { name: "Notebook", category: "Stationery", quantity: 2 },
    { name: "Pen", category: "Stationery", quantity: 5 },
];

// Create objects containing items
const objects = createObject(items);

// Print the objects
for (const category in objects) {
    console.log(`Category: ${category}`);
    objects[category].forEach(item => {
        console.log(`  - ${item.name}: ${item.quantity}`);
    });
}
