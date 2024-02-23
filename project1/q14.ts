class DinnerGuestList {
    private guests: string[];

    constructor() {
        this.guests = [];
    }

    addGuest(name: string) {
        this.guests.push(name);
    }

    removeGuest(name: string) {
        const index = this.guests.indexOf(name);
        if (index !== -1) {
            this.guests.splice(index, 1);
            console.log(`${name} can't make it to the dinner.`);
        } else {
            console.log(`${name} is not in the guest list.`);
        }
    }

    replaceGuest(oldName: string, newName: string) {
        const index = this.guests.indexOf(oldName);
        if (index !== -1) {
            this.guests[index] = newName;
            console.log(`${oldName} is replaced by ${newName}.`);
        } else {
            console.log(`${oldName} is not in the guest list.`);
        }
    }

    printInvitations() {
        console.log("Invitations:");
        this.guests.forEach(guest => {
            console.log(`Dear ${guest}, You are invited to dinner.`);
        });
    }
}

// Example usage:
const guestList = new DinnerGuestList();
guestList.addGuest("Mustufa");
guestList.addGuest("Hammad");
guestList.addGuest("Burhan");

guestList.printInvitations();

guestList.removeGuest("Irfan");
guestList.replaceGuest("Irfan", "Hamza");

guestList.printInvitations();
