const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let id;
rl.on("line", function (line) {
    id = line;
    rl.close();
}).on("close", function () {
    console.log(id + "??!");
    process.exit();
});
