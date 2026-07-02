/* QUESTION */
/* Take a number from the user */
/* You have to find it is STRONG number or not */
/* 
    WHAT IS A STRONG NUMBER?
    If the sum of the factorial of each of the digits of that number is equal to the number given by the user then that number is a strong number 
*/

/* IF it is a strong number then print Yes else No */

/* ANSWER */

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let length = n.toString().length;

let sum = 0;

for(let i = 0; i < length; i++) {
    console.log(i)
}