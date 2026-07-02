/* QUESTION */
/* Take a number from the user */
/* Reverse the number */

/* ANSWER */
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let num = 0;

while(n > 0) {
    let remainder = n % 10;

    num = (num * 10) + remainder

    n = Math.floor(n / 10);
}

console.log(num);