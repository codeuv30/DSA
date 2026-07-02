const prompt = require("prompt-sync")();
let start = Number(prompt("Enter the start: "));
let end = Number(prompt("Enter the end: "));

let result = "";

if(start > end) {
    let copy = end;
    end = start;
    start = copy;
}

let evens = 0;
let odds = 0;

for(let i = start; i <= end; i++) {
    if (i % 2 === 0) {
        evens += i;
    } else {
        odds += i;
    }
}

console.log(evens);
console.log(odds);