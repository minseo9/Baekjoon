const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
    input = line.split(" ").map((el) => parseInt(el));
    rl.close();
}).on("close", function () {
    let data1 = input[0];
    let data2 = input[1];

    console.log(data1 + data2);
    process.exit();
});
