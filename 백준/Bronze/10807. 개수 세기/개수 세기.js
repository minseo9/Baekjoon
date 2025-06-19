const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const numberList = input[1].split(" ");
let count = 0;

numberList.forEach((n) => {
    if (n === input[2]) count++;
});

console.log(count);
