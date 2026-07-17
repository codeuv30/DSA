/* REVERSE DIGITS */

/**
 * Print the reverse of the digits of the given number
 * @param {number} n
 */


let num = 0;

function internal (n) {
    if(n===0) return;
    
    let currentDigit = n % 10;
    num = (num * 10) + currentDigit;
    
    reverseDigits(Math.floor(n / 10));
}

function reverseDigits(n) {
    internal(Math.abs(n));

    if(n < 0) num = -num;

    return num;
}

console.log(reverseDigits(-1234));