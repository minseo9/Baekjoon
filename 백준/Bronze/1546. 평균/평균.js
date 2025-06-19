const input = require("fs").readFileSync(0).toString().trim().split("\n");

const num = parseFloat(input[0]);
const list = input[1].split(" ").map(Number);
const m = Math.max(...list);
const result = list.map((e) => (e / m) * 100);
const sum = result.reduce((acc, cur) => acc + cur, 0);
console.log(sum / num);
