const fs = require("fs");
const [num1, num2, num3] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(num1 + num2 + num3);
