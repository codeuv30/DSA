/* Pow of a number */

let prompt = require('prompt-sync')();
let x = Number(prompt("Give a number: "));
let n = Number(prompt(`Give a number raised to the power of ${x}: `));

var solve = function (x, n) {
    if(n==0) return 1.0;

    let ans = solve(x, Math.floor(n / 2));

    if(n%2==0) return ans * ans;
    else return ans * ans * x;
}

var myPow = function (x, n) {
    if(n === 0) return 1;

    if(n < 0) {
        n = -n;
        return 1/solve(x, n);
    }

    solve(x, n);
}

console.log(myPow(x, n));