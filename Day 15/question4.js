/* QUESTION */
/* TAKE A NUMBER FROM THE USER */
/* CHECK IF THAT NUMBER IS A NEON NUMBER */
/* A NEON NUMBER IS A NUMBER WHICH SUM OF THE DIGITS IS EQUAL TO THE SQAURE OF THE NUMBER */

/* ANSWER */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let square = Math.pow(n, 2);

let sumOfDigitsOfSquare = 0;

while(square > 0) {
    sumOfDigitsOfSquare += square % 10;
    square = Math.floor(square / 10);
}

let result = "Yes";

console.log(sumOfDigitsOfSquare, n)

if(n === sumOfDigitsOfSquare) {
    result = "Yes"
} else {
    result = "No"
}

console.log(result)