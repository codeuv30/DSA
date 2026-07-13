/* UNDERSTANDING BINARY */

/* NUMBER TO BINARY */
/* let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: ")); // 25 -> 12 -> 6 -> 3 -> 1 -> 00
let ans = ""; // "11001"

while(n > 0) {
    let bit = n % 2; // 25 % 2 -> 1 $$ 12 % 2 -> 0 $$  6 % 2 -> 0 $$ 3 % 2 -> 1 $$ 1 % 2 -> 1
    ans = bit + ans ; // 1 + "" + 1 + "" + 0 + "" + 0 + "" + 1 + ""
    n = Math.floor(n / 2);
}

console.log(ans); */

/* BINARY TO NUMBER */

/* let prompt = require("prompt-sync")();
let n = Number(prompt("Give a binary number: ")); // 1101
let ans = 0;
let bitPos = 0;

while(n > 0) {
    let bit = n % 10;
    ans = ans + (bit * Math.pow(2, bitPos))
    n = Math.floor(n / 10);
    bitPos++;
}

console.log(ans); */

/* UNDERSTANDING BIT OPERATORS */

/* console.log(15 & 5); */ // 1
/* console.log(9 | 5); */ // 13
/* console.log(9 ^ 5); */ // 12
/* console.log(15 >> 2); */ // 3
/* console.log(25 >> 2); */ // 6
/* console.log(25 << 2); */ // 100