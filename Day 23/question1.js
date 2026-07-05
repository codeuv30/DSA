/* QUESTION */
/* TOOGLE ALPHABET CASE IN A WORD */
/* IF LOWERCASE TURN TO UPPERCASE AND VICE VERSA */

/* ANSWER */
let prompt = require("prompt-sync")();
let str = prompt("Give a string: ");
let newStr = "";

for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  let ascii = str.charCodeAt(i);

  if (ascii >= 65 && ascii <= 90) {
    newStr += ch.toLowerCase();
  } else {
    newStr += ch.toUpperCase();
  }
}

console.log(newStr);
