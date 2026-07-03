/* QUESTION */
/* Take a number */
/* FIND THAT NUMBER IS HARSHAD NUBMER OR NOT */

/* ANSWER */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let sum = 0;
let nCopy = n;

while (nCopy > 0) {
  let digit = nCopy % 10;

  sum += digit;

  nCopy = Math.floor(nCopy / 10);
}

let isHarshadNumber = (n % sum) === 0;

let result = "";

if(isHarshadNumber) {
    result = "Harshad Number";
} else {
    result = "Not Harshad Number"
}