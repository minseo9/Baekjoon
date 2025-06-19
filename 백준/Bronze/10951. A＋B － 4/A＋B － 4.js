const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

input.forEach(([num1, num2]) => {
    console.log(num1 + num2);
});
