const fs = require("fs");
let [hour, minute] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

if (minute < 45) {
    minute = minute - 45 + 60;

    if (hour === 0) {
        hour = 23;
    } else {
        hour -= 1;
    }
} else {
    minute -= 45;
}

console.log(hour, minute);
