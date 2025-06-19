const input = require("fs").readFileSync(0).toString().trim().split("\n");

for (let i = 1; i <= +input[0]; i++) {
    const [count, str] = input[i].split(" ");
    let result = "";
    for (const ch of str) {
        result += ch.repeat(+count);
    }
    console.log(result);
}
