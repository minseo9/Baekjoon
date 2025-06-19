const input = require("fs").readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
let basket = Array.from(Array(n), () => 0);

for (let i = 1; i <= m; i++) {
    for (let j = input[i][0]; j <= input[i][1]; j++) {
        basket[j - 1] = input[i][2];
    }
}

console.log(basket.join(" "));
