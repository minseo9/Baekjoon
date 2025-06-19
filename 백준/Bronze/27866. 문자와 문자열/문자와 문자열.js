const input = require("fs").readFileSync(0).toString().trim().split("\n");

const num = parseInt(input[1]);
console.log(input[0].slice(num - 1, num));
