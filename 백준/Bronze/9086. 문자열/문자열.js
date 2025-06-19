const [test, ...list] = require("fs").readFileSync(0).toString().trim().split("\n");

for (const str of list) {
    console.log(`${str[0]}${str[str.length - 1]}`);
}
