var DinnerGuestList = /** @class */ (function () {
    function DinnerGuestList(initialGuests) {
        this.guests = initialGuests;
    }
    DinnerGuestList.prototype.printMessage = function (message) {
        console.log(message);
    };
    DinnerGuestList.prototype.inviteGuests = function () {
        var _this = this;
        this.printMessage("I can only invite two people for dinner.");
        while (this.guests.length > 2) {
            var removedGuest = this.guests.pop();
            if (removedGuest) {
                this.printMessage("Sorry ".concat(removedGuest, ", you're no longer invited to dinner."));
            }
        }
        this.guests.forEach(function (guest) {
            _this.printMessage("Dear ".concat(guest, ", you're still invited to dinner."));
        });
        this.guests = []; // Removing the last two names
        this.printMessage("Final guest list: " + this.guests);
    };
    return DinnerGuestList;
}());
// Example usage
var guestList = new DinnerGuestList(["Alice", "Bob", "Charlie", "David", "Eve"]);
guestList.inviteGuests();
