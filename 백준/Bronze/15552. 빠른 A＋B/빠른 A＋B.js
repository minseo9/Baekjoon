const fs = require("fs");
const [test, ...number] = fs
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));

let result = "";
number.forEach(([num1, num2]) => {
    result += num1 + num2 + "\n";
});

console.log(result);
