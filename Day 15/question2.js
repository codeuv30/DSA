/* QUESTION */
/* TAKE A NUMBER FROM THE USER */
/* FIND IF ITS A ABUNDANT NUMBER OR NOT */

/* ANSWER */
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let sum = 0;

let i = 0;

while(i < n) {
    if(n % i === 0) {
        sum += i;
    }

    i++;
}

let result = '';

if(sum > n) {
    result = "Yes"
} else {
    result = "No"
}

console.log(result);