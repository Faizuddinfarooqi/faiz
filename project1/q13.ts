class DinnerInvitation {
    private guestList: string[];

    constructor() {
        this.guestList = [];
    }

    addGuest(guest: string) {
        this.guestList.push(guest);
    }

    inviteGuests() {
        console.log("Inviting guests to dinner:\n");
        this.guestList.forEach((guest) => {
            console.log(`Dear ${guest}, I am cordially invited to dinner.`);
        });
    }
}

// Create a new dinner invitation instance
const dinner = new DinnerInvitation();

// Add guests to the guest list
dinner.addGuest("Irfan");
dinner.addGuest("Hammad");
dinner.addGuest("Hamza");

// Invite guests to dinner
dinner.inviteGuests();
