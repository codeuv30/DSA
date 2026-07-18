/* GCD USING BRUTE FORCE WITH LOOP */

/* let prompt = require("prompt-sync")();
let a = Number(prompt("Give a number: "));
let b = Number(prompt("Give a number: "));

let ans = 1;

for(let i = Math.min(a, b); i >= 1; i--) {
    if(a % i == 0 && b % i == 0) {
        ans = i;
        break;
    }
}

console.log(ans); */


/* GCD USING BRUTE FORCE WITH RECURSION */

/* let prompt = require("prompt-sync")();
let a = Number(prompt("Give a number: "));
let b = Number(prompt("Give a number: "));

function gcd(n, a, b) {
    if(n==1) return 1;
    if(a % n === 0 && b % n === 0) return n;
    return gcd(n-1, a, b);
}

console.log(gcd(Math.min(a, b), a, b)); */

/* GCD USING EUCLIDIAN'S METHOD USING LOOPS */

/* let prompt = require("prompt-sync")();
let a = Number(prompt("Give a number: "));
let b = Number(prompt("Give a number: "));

while(a != b) {
    if(a > b) a = a - b;
    else b = b - a;
}

console.log(a) */

/* GCD USING EUCLIDIAN'S METHOD USING RECURSION */

let prompt = require("prompt-sync")();
let a = Number(prompt("Give a number: "));
let b = Number(prompt("Give a number: "));

function gcd(a, b) {
    if(b==0) return a;
    return gcd(b, a % b);
}

console.log(gcd(a, b));