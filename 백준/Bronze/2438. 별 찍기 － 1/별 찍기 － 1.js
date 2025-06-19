const fs = require("fs");
const input = fs.readFileSync(0).toString();

let str = "";
for (let i = 1; i <= +input; i++) {
    for (let j = 1; j <= i; j++) {
        str += "*";
    }
    str += "\n";
}

console.log(str);
