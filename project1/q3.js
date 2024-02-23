var FamousQuote = /** @class */ (function () {
    function FamousQuote(author, quote) {
        this.author = author;
        this.quote = quote;
    }
    FamousQuote.prototype.printQuote = function () {
        console.log("".concat(this.author, " once said, \"").concat(this.quote, "\""));
    };
    return FamousQuote;
}());
// Example usage
var einsteinQuote = new FamousQuote("Albert Einstein", "A person who never made a mistake never tried anything new.");
einsteinQuote.printQuote();
