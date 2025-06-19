const fs = require("fs");
const input = fs.readFileSync(0).toString();

const number = Number(input);
let str = "";

for (let i = 1; i <= number; i++) {
    str += " ".repeat(number - i);
    str += "*".repeat(i);
    str += "\n";
}

console.log(str);
