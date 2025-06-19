const fs = require("fs");
const input = fs.readFileSync(0).toString();

const year = parseInt(input);

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) console.log(1);
else console.log(0);
