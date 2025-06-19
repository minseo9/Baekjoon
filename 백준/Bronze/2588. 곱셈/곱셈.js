const fs = require("fs");
const [num1, num2] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const first = num2 % 10;
const second = Math.floor((num2 % 100) / 10);
const third = Math.floor(num2 / 100);

console.log(num1 * first);
console.log(num1 * second);
console.log(num1 * third);
console.log(num1 * num2);
