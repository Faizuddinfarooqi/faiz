var DinnerInvitation = /** @class */ (function () {
    function DinnerInvitation() {
        this.guestList = [];
    }
    DinnerInvitation.prototype.addGuest = function (guest) {
        this.guestList.push(guest);
    };
    DinnerInvitation.prototype.inviteGuests = function () {
        console.log("Inviting guests to dinner:\n");
        this.guestList.forEach(function (guest) {
            console.log("Dear ".concat(guest, ", I am cordially invited to dinner."));
        });
    };
    return DinnerInvitation;
}());
// Create a new dinner invitation instance
var dinner = new DinnerInvitation();
// Add guests to the guest list
dinner.addGuest("Bob");
dinner.addGuest("Eve");
dinner.addGuest("Charlie");
// Invite guests to dinner
dinner.inviteGuests();
