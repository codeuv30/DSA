const prompt = require("prompt-sync")();
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
