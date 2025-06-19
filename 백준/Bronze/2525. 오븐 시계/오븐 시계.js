const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let hour = parseInt(input[0].split(" ")[0]);
let minute = parseInt(input[0].split(" ")[1]);
let time = parseInt(input[1]);

minute += time;

if (minute > 59) {
    const plus = Math.floor(minute / 60);
    minute -= plus * 60;

    hour += plus;
    if (hour >= 24) {
        hour -= 24;
    }
}

console.log(hour, minute);
