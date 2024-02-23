// Function to create an object containing items
function createObject(items) {
    var obj = {};
    items.forEach(function (item) {
        if (!obj[item.category]) {
            obj[item.category] = [];
        }
        obj[item.category].push(item);
    });
    return obj;
}
// Sample items
var items = [
    { name: "Apple", category: "Fruits", quantity: 5 },
    { name: "Banana", category: "Fruits", quantity: 3 },
    { name: "Carrot", category: "Vegetables", quantity: 10 },
    { name: "Potato", category: "Vegetables", quantity: 7 },
    { name: "Notebook", category: "Stationery", quantity: 2 },
    { name: "Pen", category: "Stationery", quantity: 5 },
];
// Create objects containing items
var objects = createObject(items);
// Print the objects
for (var category in objects) {
    console.log("Category: ".concat(category));
    objects[category].forEach(function (item) {
        console.log("  - ".concat(item.name, ": ").concat(item.quantity));
    });
}
