const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
    const [num1, num2] = input[i].split(" ").map(Number);
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}
