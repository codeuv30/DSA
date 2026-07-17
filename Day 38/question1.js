/* FACTORIAL OF N */

/* function factorial(n) {
    if(n===0) return 1;
    return n * factorial(n-1);
}

console.log(factorial(0)); */

/* USE THIS IF IT WANTS PRINT (IN MY CASE) */

function internal(n) {
    if (n === 0) return 1;
    return n * internal(n - 1);
}

function factorial(n) {
    console.log(internal(n))
}

factorial(5);