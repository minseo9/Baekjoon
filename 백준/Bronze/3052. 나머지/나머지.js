const input = require("fs").readFileSync(0).toString().trim().split("\n").map(Number);

const result = input.map((e) => e % 42);
const count = [...new Set(result)];
console.log(count.length);
