/* QUESTION */
/* Take a number from the user */
/* You have to get the factorial of the number you took from the user if that number is 0 then just print 1 */

/* ANSWER */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

let fac = 1;
let x = n;

for (let i = 1; i < n; i++) {
  fac = x * (n - i);
  x = fac;
}

console.log(fac);
