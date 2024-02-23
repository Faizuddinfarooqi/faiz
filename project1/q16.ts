class DinnerGuestList {
    private guests: string[];

    constructor(initialGuests: string[]) {
        this.guests = initialGuests;
    }

    printMessage(message: string) {
        console.log(message);
    }

    inviteGuests() {
        this.printMessage("I can only invite two people for dinner.");
        while (this.guests.length > 2) {
            const removedGuest = this.guests.pop();
            if (removedGuest) {
                this.printMessage(`Sorry ${removedGuest}, you're no longer invited to dinner.`);
            }
        }

        this.guests.forEach(guest => {
            this.printMessage(`Dear ${guest}, you're still invited to dinner.`);
        });

        this.guests = []; // Removing the last two names
        this.printMessage("Final guest list: " + this.guests);
    }
}

// Example usage
const guestList = new DinnerGuestList(["Alice", "Bob", "Charlie", "David", "Eve"]);
guestList.inviteGuests();
