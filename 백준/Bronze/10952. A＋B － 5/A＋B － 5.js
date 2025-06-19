const fs = require("fs");
const input = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

input.forEach(([num1, num2]) => {
    if (num1 !== 0 && num2 !== 0) {
        console.log(num1 + num2);
    }
});
