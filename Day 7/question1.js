/* QUESTION 1 */
/* You have to take two numbers from the user */
/* Number 1: Take a number and print its table*/
/* Number 2: Take a number at which program will print its table */
/* For Example: */
/*
    Enter a number of which table to print: 5
    At Which number to print table of 5: 20
    5 x 1: 5
    5 x 2: 10
    5 x 3: 15
    5 x 4: 20
    5 x 5: 25
    5 x 6: 30
    5 x 7: 35
    5 x 8: 40
    5 x 9: 45
    5 x 10: 50
    5 x 11: 55
    5 x 12: 60
    5 x 13: 65
    5 x 14: 70
    5 x 15: 75
    5 x 16: 80
    5 x 17: 85
    5 x 18: 90
    5 x 19: 95
    5 x 20: 100
*/

/* ANSWER */
const prompt = require("prompt-sync")();

const table = Number(prompt("Enter a number of which table to print: "));
const point = Number(prompt(`At Which number to print table of ${table}: `));

for (let i = 1; i <= point; i++) {
  console.log(`${table} x ${i}: ${table * i}`);
}
