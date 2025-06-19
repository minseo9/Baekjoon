const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const total = Number(input[0]);

let sum = 0;
for (let i = 2; i < input.length; i++) {
    const [price, count] = input[i].split(" ").map(Number);
    sum += price * count;
}

console.log(sum === total ? "Yes" : "No");
