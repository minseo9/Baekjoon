const fs = require("fs");
const [test, ...number] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

for (let i = 1; i <= test; i++) {
    console.log(`Case #${i}: ${number[i - 1][0] + number[i - 1][1]}`);
}
