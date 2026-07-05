/* QUESTION 1 */
/* TOGGLE EVERY CHARACTER OF A STRING IF IT IS LOWERCASE THEN TOGGLE TO UPPERCASE AND VICE VERSA */

/* let prompt = require("prompt-sync")();
let str = prompt("Enter a string: ");

let newStr = "";

for(let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    let ch = str.charAt(i);

    if(ascii >= 65 && ascii <= 95) {
        newStr += String.fromCharCode(ascii + 32);
    } else {
        newStr += String.fromCharCode(ascii - 32);
    }
}

console.log(newStr); */

/* QUESTION 2 */
/* TAKE AN ARRAY OF STRINGS OF WORDS */
/* ALSO TAKE A PREFIX */
/* OUTPUT WILL BE HOW MUCH WORDS IN THAT ARRAY START WITH THAT PREFIX */

/* let prompt = require("prompt-sync")();

let arr = [
  "apple",
  "banana",
  "mango",
  "litchi",
  "avacado",
  "pay",
  "attention",
  "practice",
  "attend",
];
let prefix = "at";

let count = 0;
let sortedArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith(prefix)) {
    count++;
    sortedArr.push(arr[i]);
  };
}

if (count) {
  console.log(`• Found ${count} results: `);

  for (let i = 0; i < sortedArr.length; i++) {
    console.log("  • " + sortedArr[i]);
  }
} else {
    console.log("No Elements found with prefix " + prefix);
}
 */

/* QUESTION 3 */
/* TAKE A SENTENCE FROM THE USER AND TRANSFORM THE FIRST AND LAST CHARACTER OF EVERY WORD OF THAT SENTENCE TO UPPERCASE */

/* let sentence = "hello bhai kya haal chaal";
let arr = sentence.split(" ");
let ans = "";

for(let i = 0; i < arr.length; i++) {
    let word = arr[i];

    let first = word.charAt(0).toUpperCase();
    let mid = word.substring(1, word.length - 1);
    let last = word.charAt(word.length - 1).toUpperCase();

    ans = ans + (first + mid + last)+ " ";
} 

console.log(ans); */


/* QUESTION 4 */
/* 
let prompt = require("prompt-sync")();
let s = "naman";
let arr = new Array(26).fill(0);

for (let i = 0; i < s.length; i++) {
  let ascii = s.charCodeAt(i);

  arr[ascii - 97] = arr[ascii - 97] + 1;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    let char = String.fromCharCode(i + 97);
    let frequency = arr[i];
    console.log(`${char} => ${frequency}`)
  }
}
 */

/* QUESTION 5 */
/* CHECK FOR ANAGRAM WORDS */
/* let prompt = require("prompt-sync")(); */
/* let s1 = prompt("Enter first string: ");
let s2 = prompt("Enter second string: "); */
/* let s1 = "abcds";
let s2 = "dcbae";

if (s2.length !== s1.length) {
  console.log(false);
  return;
}

let arr = new Array(26).fill(0);

for (let i = 0; i < s1.length; i++) {
  let ascii = s1.charCodeAt(i);
  arr[ascii - 97] = arr[ascii - 97] + 1;
}

for (let i = 0; i < s2.length; i++) {
  if (s2.charAt(i) === "e") {
    console.log("e", i, arr[i], s1.charCodeAt(i));
  }
  let ascii = s1.charCodeAt(i);
  arr[ascii - 97] = arr[ascii - 97] - 1;
}

console.log(arr);

let result = null; */

/* for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        result = true;
    } else {
        result = false;
        break;
    }
} */

/* console.log(result); */


/* QUESTION 6 */
/* FIND MAXIMUM NUMBER OF WORDS IN A SENTENCE */

/* let prompt = require("prompt-sync")();
let sentence = prompt("Enter a sentence: ");

let arr = sentence.split(" ");

console.log(`Found ${arr.length} words in ${sentence}`); */

/* QUESTION 7 */
/* SORT THE WORDS OF THE SENTENCE */
/* let prompt = require("prompt-sync")();
let sentence = prompt("Enter a sentence: ");

let arr = sentence.split(" ");
let n = arr.length;

for(let i = 0; i < n - 1; i++) {
  for(let j = 0; j < n - 1 - i; j++) {
    if(arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

let str = arr.join(" ");

console.log(str); */