/* QUESTION 2 */
/* You have to take 1 value from the user */
/* Print sum of numbers to that number you took from the user */
/* Example: Let's say user entered 10 then you have to calculate 1 + 2 + 3 + ... 10 */

/* ANSWER */

const prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");

let result = 0;

for(let i = 1; i <= number; i++) {
    result += i;
}

console.log(result);