/* QUESTION */
/* TAKE NUMBER FROM THE USER */
/* CHECK IF THE NUMBER IS *ARMSTRONG* NUMBER OR NOT */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let pow = 0;

let nCopyLength = n;
let nCopyMain = n;
let sum = 0;
let result = "Yes";

while(nCopyLength > 0) {
    pow++
    nCopyLength = Math.floor(nCopyLength / 10);
};

while(nCopyMain > 0) {
    let currentDigit = nCopyMain % 10;

    sum += Math.pow(currentDigit, pow);

    nCopyMain = Math.floor(nCopyMain / 10);
}

if(sum === n) {
    result = "Armstrong"
} else {
    result = "Not Armstrong"
}

console.log(result)