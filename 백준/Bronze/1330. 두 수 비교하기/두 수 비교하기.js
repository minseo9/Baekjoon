const fs = require("fs");
const [num1, num2] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

if (num1 === num2) {
    console.log("==");
} else if (num1 > num2) {
    console.log(">");
} else {
    console.log("<");
}
