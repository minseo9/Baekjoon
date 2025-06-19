const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = [];

rl.on("line", function (line) {
    data = line.split(" ").map((el) => parseInt(el));
    rl.close();
}).on("close", function () {
    let num1 = data[0];
    let num2 = data[1];

    console.log(num1 / num2);
    process.exit();
});
