/* CHECK IF NUMBER IS VALID ISBN NUMBER OR NOT */
/* WITHOUT EVAL ONLY USE WHILE LOOP NO FOR LOOP */

let isbn = "978-93-6033-379-9";

let number = isbn.split("-").join("");

let result = "Invalid"

if (number.length !== 13 && number.length !== 10) {
  result = "Invalid";
} else {
  let n = number.length;
  let index = 0;
  let count = 10;
  let sum = 0;

  while (n > 0) {
    let char = Number(number.charAt(index));

    let mul = count * char;
    sum += mul

    index++;
    count--;

    n = n - 1;
  }

  let isValid = !(sum % 11);

  if(isValid) {
    result = "Valid";
  } else {
    result = "Invalid";
  }
}

console.log(result)