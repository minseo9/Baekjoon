const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const number = Number(input) / 4;
let str = "";

for (let i = 0; i < number; i++) {
    str += "long ";
}

console.log(str + "int");
