const input = require("fs")
    .readFileSync(0)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

let num = 1;
const student = Array.from({ length: 30 }, () => num++);

let result = student.filter((s) => {
    if (!input.includes(s)) {
        return s;
    }
});
console.log(result.join("\n"));
