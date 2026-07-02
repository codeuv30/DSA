/* QUESTION */
/* Take 2 numbers from the user */
/* let first number = a; and second number = b */
/* Now you have to find the result of a ^ b means you have to find a raised to the power of b*/

const prompt = require("prompt-sync")();

let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter a number: "));

let result = 1;

for(let i = 1; i <= b; i++) {
    result = result * a;
}

console.log(result);