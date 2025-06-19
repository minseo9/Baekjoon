const [[n, m], ...list] = require("fs").readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

let num = 1;
const array = Array.from({ length: n }, () => num++);

for (const [i, j] of list) {
    const reverseList = array.slice(i - 1, j).reverse();
    array.splice(i - 1, j - i + 1, ...reverseList);
}

console.log(array.join(" "));
