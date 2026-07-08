let prompt = require("prompt-sync")();

let arr = new Array(3);

for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array(3).fill(0);
}

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Number(prompt("Enter a number for " + i + " row and " + j + " col: "));
    }
}

console.log(arr);