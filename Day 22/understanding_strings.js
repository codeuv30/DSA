/* QUESTION 1 */
/* ACCEPT A STRING FROM THE USER AND PRINT its EACH CHARACTER ON A NEW LINE */

/* let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

for(let i = 0; i < str.length; i++) {
    console.log(str[i]);
}; */

/* QUESTION 2 */
/* ACCEPT A STRING FROM THE USER AND PRINT its REVERSE */

/* prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let rev = "";

for(let i = str.length - 1; i > 0; i--) {
    rev += str[i];
};

console.log(rev); */

/* QUESTION 3 */
/* CHECK IF A NUMBER IS PALINDROME */

/* let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let result = false;
let n = str.length;
let j = n - 1;
let count = 0;

for(let i = 0; i <= n / 2; i++) {
    count++;
    if(str[i] === str[j]) {
        result = true;
    } else {
        result = false;
        break;
    }

    j--;
}

console.log(result, count); */