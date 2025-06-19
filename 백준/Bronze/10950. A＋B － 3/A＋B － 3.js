const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const number = input.filter((n, i) => {
    return i !== 0;
});

const turn = Number(input[0]);

for (let i = 0; i < turn; i++) {
    let num1 = Number(number[i].split(" ")[0]);
    let num2 = Number(number[i].split(" ")[1]);

    console.log(num1 + num2);
}
