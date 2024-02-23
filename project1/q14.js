var DinnerGuestList = /** @class */ (function () {
    function DinnerGuestList() {
        this.guests = [];
    }
    DinnerGuestList.prototype.addGuest = function (name) {
        this.guests.push(name);
    };
    DinnerGuestList.prototype.removeGuest = function (name) {
        var index = this.guests.indexOf(name);
        if (index !== -1) {
            this.guests.splice(index, 1);
            console.log("".concat(name, " can't make it to the dinner."));
        }
        else {
            console.log("".concat(name, " is not in the guest list."));
        }
    };
    DinnerGuestList.prototype.replaceGuest = function (oldName, newName) {
        var index = this.guests.indexOf(oldName);
        if (index !== -1) {
            this.guests[index] = newName;
            console.log("".concat(oldName, " is replaced by ").concat(newName, "."));
        }
        else {
            console.log("".concat(oldName, " is not in the guest list."));
        }
    };
    DinnerGuestList.prototype.printInvitations = function () {
        console.log("Invitations:");
        this.guests.forEach(function (guest) {
            console.log("Dear ".concat(guest, ", You are invited to dinner."));
        });
    };
    return DinnerGuestList;
}());
// Example usage:
var guestList = new DinnerGuestList();
guestList.addGuest("Bob");
guestList.addGuest("Eve");
guestList.addGuest("Charlie");
guestList.printInvitations();
guestList.removeGuest("");
guestList.replaceGuest("Irfan", "Hamza");
guestList.printInvitations();
