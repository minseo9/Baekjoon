const input = require("fs").readFileSync(0).toString().trim();
const str = input.split(" ");

console.log(input === "" ? 0 : str.length);
