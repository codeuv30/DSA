/* QUESTION 1 */
/* TAKE A NUMBER FROM THE USER */
/* CHECK IF THAT NUMBER IS A STRONG NUMBER OR NOT */

/* const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let copy = n;

let sum = 0;

while(n > 0) {
    let dig = n % 10;
    let factorial = 1;

    for(let i = 1; i <= dig; i++) {
        factorial = factorial * i;
    }

    sum += factorial;

    n = Math.floor(n / 10);
}

if(copy === sum) {
    console.log("STRONG NUMBER")
} else {
    console.log("NOT STRONG NUMBER")
} */