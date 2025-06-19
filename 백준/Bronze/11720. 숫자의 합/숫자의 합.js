const input = require("fs").readFileSync(0).toString().trim().split("\n");

const number = input[1].split("").map(Number);
const sum = number.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
