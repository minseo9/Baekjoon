const input = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const max = Math.max(...input);
let index;
input.forEach((e, i) => {
    if (e === max) index = i + 1;
});

console.log(max);
console.log(index);
