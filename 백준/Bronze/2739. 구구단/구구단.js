const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const num = parseInt(input);

for (let i = 1; i <= 9; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}
