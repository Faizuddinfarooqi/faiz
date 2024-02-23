var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    var ordinalSuffix = void 0;
    if (num === 1) {
        ordinalSuffix = "st";
    }
    else if (num === 2) {
        ordinalSuffix = "nd";
    }
    else if (num === 3) {
        ordinalSuffix = "rd";
    }
    else {
        ordinalSuffix = "th";
    }
    console.log("".concat(num).concat(ordinalSuffix));
}
