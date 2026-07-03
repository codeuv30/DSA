/* QUESTION */
/* TAKE A NUMBER FROM THE USER */
/* FIND ITS PRIME FACTORS */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let currentNumber = n;

let primeFactors = [];

let condition = false;

for (let i = 2; i <= n; condition ? i = 2 : i++) {
  if (n % i === 0) {
    currentNumber = currentNumber / i;


    n = currentNumber;

    primeFactors.push(i);

    condition = true;
  } else {
    condition = false;
  }
}

if(primeFactors.length !== 0) {
    console.log(primeFactors.join(" "));
} else {
    console.log("No prime factors")
}