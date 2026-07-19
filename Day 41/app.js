let prompt = require("prompt-sync")();
let n = Number(prompt("Give a number: "));

/* SQRT USING BRUTE FORCE */

/* function findSqrt(n) {
    let i = 1;

    for(; i * i <= n; i++) {
        if(i*i === n) return i;
    }

    return i - 1;
}

console.log(findSqrt(n)) */


/* SQRT USING BINARY SEARCH */

let first = 0;
let second = n;
let ans = 0;

function mySqrt(x) {
    while(first <= second) {
        let mid = Math.floor(((first + second) / 2));

        if(mid * mid <= n) {
            ans = mid;
            first = mid + 1;
        } else {
            second = mid - 1;
        }
    }

    return ans;
}

console.log(mySqrt(n));