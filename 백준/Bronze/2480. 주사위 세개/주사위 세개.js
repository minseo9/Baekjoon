const fs = require("fs");
const [num1, num2, num3] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

if (num1 === num2 && num1 === num3) {
    console.log(10000 + num1 * 1000);
} else if (num1 === num2 || num1 === num3) {
    console.log(1000 + num1 * 100);
} else if (num2 === num3) {
    console.log(1000 + num2 * 100);
} else {
    const max = Math.max(num1, num2, num3);
    console.log(max * 100);
}
