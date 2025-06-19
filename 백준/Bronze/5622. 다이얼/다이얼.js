const input = require("fs").readFileSync(0).toString().trim().split("");
let time = 0;

for (const ch of input) {
    time += 2;
    if ("ABC".includes(ch)) time += 1;
    else if ("DEF".includes(ch)) time += 2;
    else if ("GHI".includes(ch)) time += 3;
    else if ("JKL".includes(ch)) time += 4;
    else if ("MNO".includes(ch)) time += 5;
    else if ("PQRS".includes(ch)) time += 6;
    else if ("TUV".includes(ch)) time += 7;
    else if ("WXYZ".includes(ch)) time += 8;
    else time += 9;
}
console.log(time);
