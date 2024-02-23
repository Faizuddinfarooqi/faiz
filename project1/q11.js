var names = ["Mustufa", "Hammad", "Irfan", "Burhan"];
function greetPeople(names) {
    var greetingMessage = "Hello, ";
    names.forEach(function (name) {
        console.log("".concat(greetingMessage).concat(name, "!"));
    });
}
greetPeople(names);
