/* QUESTION 3 */
/* Take a number from the user */
/* Print all the factors of that number you took from the user */

/* ANSWER */

const prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");

let result = "";

for(let i = 1; i <= number; i++) {
    if(number % i === 0) {
        result = result + i.toString() + " ";
    }
}

console.log(result);