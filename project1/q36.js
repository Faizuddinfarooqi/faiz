var Shirt = /** @class */ (function () {
    function Shirt(size, message) {
        if (size === void 0) { size = "large"; }
        if (message === void 0) { message = "I love TypeScript"; }
        this.size = size;
        this.message = message;
    }
    Shirt.prototype.make_shirt = function () {
        console.log("Creating a ".concat(this.size, " shirt with message: ").concat(this.message));
    };
    return Shirt;
}());
// Creating a large shirt with the default message
var largeShirt = new Shirt();
largeShirt.make_shirt();
// Creating a medium shirt with the default message
var mediumShirt = new Shirt("medium");
mediumShirt.make_shirt();
// Creating a shirt of any size with a different message
var customShirt = new Shirt("small", "Hello, World!");
customShirt.make_shirt();
