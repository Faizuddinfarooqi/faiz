var NameStripper = /** @class */ (function () {
    function NameStripper(name) {
        this.name = name;
    }
    NameStripper.prototype.printWithWhitespace = function () {
        console.log("Name with whitespace: \n\t".concat(this.name, "\n"));
    };
    NameStripper.prototype.printStrippedName = function () {
        var strippedName = this.name.trim();
        console.log("Stripped name: ".concat(strippedName));
    };
    return NameStripper;
}());
// Example usage
var personName = "   John Doe \t";
var stripper = new NameStripper(personName);
stripper.printWithWhitespace();
stripper.printStrippedName();
