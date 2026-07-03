const prompt = require("prompt-sync")();
let row = Number(prompt("How many Rows ? "));

for (let i = 1; i <= row; i++) {
    for(let j = 1; j <= row; j++) {
        if(i==j) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ");
        }
    }

    for(let j = 1; j <= row; j++) {
        if((i+j) === row+1) {
            process.stdout.write("*")
        } else {
            process.stdout.write(" ");
        }
    }

    console.log()
}