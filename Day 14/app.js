/* QUESTION ! */

/* const prompt = require("prompt-sync")();
let match = "wassup bro";

let input;

if (typeof match !== "string") {
  console.log("The value you have entered is not a string value");
  return;
}

let _retry = false;

do {
  if (!_retry) {
    input = prompt(`Enter "${match}" in the chat brooomziee: `);
    _retry = true;
  } else {
    input = prompt(`Enter "${match}" again in the chat brooomziee: `);
  }
} while (input !== match);
 */

/* QUESTION 2 */

const prompt = require("prompt-sync")();

let random = Math.floor(Math.random() * 100);

let input;

do {
  input = Number(prompt(`Guess the number between 1 - 100: `));
  if(input === 0) break;
  if(input < random) console.log("Too small");
  if(input > random) console.log("Too Big");
} while (random !== input);

console.log('Correct the number was ' + random)