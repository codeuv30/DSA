/* BASIC RECURSION PART - 2 */

/* FABBONACCI SERIES USING LOOP */

/* let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: "));

let first = 0;
let second = 1;

process.stdout.write(first + " " + second);

for(let i = 1; i <= n-2; i++) {
    let third = first + second;
    first = second;
    second = third;
    process.stdout.write(" " + third);
} */


/* SAME USING RECURSION */

/* let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: "));

let first = 0;
let second = 1;

process.stdout.write(first + " " + second);

function fibo(n, first, second) {
    if(n===0) return;

    let third = first + second;

    process.stdout.write(" " + third);

    fibo(n-1, second, third);
}

fibo(n-2, first, second); */


/* SUM OF FIBONACCI */

/* let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: "));

function fibo(n) {
    if(n===0 || n===1) return n;

    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(n)); */

/* SUM OF ALL DIGITS */

let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: "));

function sum(n) {
    if(n === 0) return 0;

    return (n % 10) + sum(Math.floor(n / 10));
}

console.log(sum(n));