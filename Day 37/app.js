/* main();

function main() {
    console.log("Mai main hoon");
    fun();
}

function fun() {
    console.log("funning ho rhi hai");
    temp();
}

function temp() {
    console.log("logging...");
} */



/* let prompt = require('prompt-sync')();
let n = Number(prompt("Give a number: "));

function hello(n) {
    if(n === 0) return;
    console.log(n + ". Hello World!");
    hello(n--);
}

hello(n) */

/**
 * n = 10;
 * n--;
 * n-1;
*/


/* QUESTION 1 */
/* PRINT ALL THE NUMBERS FROM N TO 1 */

/* let prompt = require('prompt-sync')();
let n = Number(prompt("Give a number: "));

function hello(n) {
    if(n === 1) return n;
    return n + hello(n-1);
}

console.log(hello(n)); */


/* QUESTION 2 */
/* PRINT "Hello" exactly n times */

/* function printHello(n) {
    if(n === 0) return n;
    console.log("Hello")
    printHello(n - 1);
}

printHello(5); */

/* QUESTION 3 */
/* PRINT integers from 1 to n */

/* function naturalNumbers(n) {
    if(n === 0) return;

    naturalNumbers(n-1);

    process.stdout.write(n + " ");
}

naturalNumbers(5); */

/* QUESTION 4 */
/* PRINT integers from n to 1 */


/* function printNumbers(n) {
   if(n === 0) return;
   process.stdout.write(n + " ");
   printNumbers(n-1);
}

printNumbers(5); */

/* QUESTION 5 */
/* PRINT sum up to N numbers */

/* function sumUpToN(n) {
    if(n == 1) return n;

    return n + sumUpToN(n - 1);
}

console.log(sumUpToN(5)); */