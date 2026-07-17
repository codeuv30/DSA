/* SUM OF DIGITS OF N */

function sumOfDigits(n) {
    if(n===0) return n;

    return (Math.floor(n % 10)) + (sumOfDigits(Math.floor(n / 10)))
}

console.log(sumOfDigits(936));