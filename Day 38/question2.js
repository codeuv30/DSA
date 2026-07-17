/* FABONACCI SERIES USING RECURSION */


function internal(n, first, second) {
  if (n === 0) return;

  let third = first + second;

  process.stdout.write(" " + third);

  internal(n - 1, second, third);
}

/**
 * Print Fibonacci series up to n terms using recursion
 * @param {number} n
 * @returns {void}
 */

function printFibonacci(n) {
  if (n <= 0) {
    console.log("Invalid input.");
    return;
  }

  if(n === 1) {
    console.log("0");
    return;
  }

  let first = 0;
  let second = 1;

  process.stdout.write(first + " " + second);

  internal(n - 2, first, second);
}

printFibonacci(-1);