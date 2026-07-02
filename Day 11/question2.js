/* QUESTION */
/* Take a number from the user */
/* FIND IF THAT NUMBER IS AUTOMORPHIC NUMBER OR NOT */
/* AN Automorphic number is a number which square is ends with the number itself */
/* FOR EXAMPLE: 25 is a Automorphic number because its square is 625 and 625 ends with 25 */

/* ANSWER */

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

let square = n * n;

let devideWith = 10000;

if (n > 0 && n < 10) {
  devideWith = 10;
}
if (n > 9 && n < 100) {
  devideWith = 100;
}
if (n > 99 && n < 1000) {
  devideWith = 1000;
}

let squareLastDigit = square % devideWith;

if (squareLastDigit === n) {
  console.log("Yes");
} else {
  console.log("No");
}
