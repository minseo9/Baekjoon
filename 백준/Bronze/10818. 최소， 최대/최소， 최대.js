const [number, list] = require("fs").readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

const min = Math.min(...list);
const max = Math.max(...list);

console.log(min, max);
