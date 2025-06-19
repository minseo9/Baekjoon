const fs = require("fs").readFileSync(0).toString().trim().split("\n");

const x = Number(fs[0].split(" ")[1]);
const minList = fs[1].split(" ").filter((e) => e < x);
console.log(minList.join(" "));
