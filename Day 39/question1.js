/* FIND GCD OF MINIMUM AND MAXIMUM ELEMENT OF ARRAY */

let arr = [12, 15, 21, 30];

function gcdEval(a, b) {
    if(b===0) return a;

    return gcdEval(b, a % b);
}

function gcd(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    return gcdEval(min, max);
}

console.log(gcd(arr));