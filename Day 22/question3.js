/* QUESTION 3 */
/* CHECK IF A NUMBER IS PALINDROME */

let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let result = "No";
let n = str.length;
let j = n - 1;

for(let i = 0; i < n / 2; i++) {
    if(str.charAt(i) === str.charAt(j)) {
        result = "Yes";
        j--;
    } else {
        result = "No";
        break;
    }
}

console.log(result)