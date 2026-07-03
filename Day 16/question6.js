/* QUESTION */
/* TAKE A NUMBER FROM USER */
/* LET'S SAY YOU GET NUMBER 5 THEN YOU HAVE TO PRINT A PATTERN*/
/*
*       *
 *     * 
  *   *  
   * *   
    *
 */
/* MEANS YOU HAVE TO PRINT THIS PATTERN WITH THE NUMBER OF ROWS YOU GET FROM USER */

/* ANSWER */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) process.stdout.write("*");
    else process.stdout.write(" ");
  }

  for (let j = 1; j <= n; j++) {
    if (i + j === n) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}