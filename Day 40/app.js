/* SEIVE OF ERATOSTHENES */

let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: "));

let prime = new Array(n+1).fill(true);
let count = 0;

for(let i = 2; i < Math.sqrt(n); i++) {
    if(prime[i]) {
        for(let j = i * i; j < n; j=j+i) {
            count++;
            prime[j] = false;
        }
    }
}

console.log(count);