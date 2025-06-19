const [length, ...list] = require("fs").readFileSync(0).toString().trim().split("\n").map((line) => line.split(" ").map(Number));

let num = 1;
let basket = Array.from(Array(length[0]), () => num++);

for (const [num1, num2] of list) {
    [basket[num1 - 1], basket[num2 - 1]] = [basket[num2 - 1], basket[num1 - 1]];
}

console.log(basket.join(" "));
