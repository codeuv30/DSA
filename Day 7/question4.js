/* QUESTION */
/* Take a Number */
/* If the entered number is prime then print "Prime" else print "Not Prime" */

/* ANSWER */

const prompt = require("prompt-sync")();
let n = prompt("Enter a number: ");

let factors = [];

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    factors.push(i);
  }
}

if(factors.length === 2) {
    console.log("Prime")
} else {
    console.log("Not Prime")
}