/* QUESTION */
/* ACCEPT A STRING FROM THE USER AND PRINT its EACH CHARACTER ON A NEW LINE */

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
};