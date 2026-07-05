/* QUESTION */
/* ACCEPT A STRING FROM THE USER AND PRINT its REVERSE */

prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let rev = "";

for(let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
};