/* QUESTION */
/* TAKE A NUMBER FROM USER */
/* LET'S SAY YOU GET NUMBER 4 THEN YOU HAVE TO PRINT */
/* 
1) 1
2) 1 2
3) 1 2 3
4) 1 2 3 4
*/
/* MEANS YOU HAVE TO PRINT THIS PATTERN WITH THE NUMBER OF ROWS YOU GET FROM USER */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

for(let i = 1; i<=n; i++) {
    for(let j = 1; j<=i; j++) {
        process.stdout.write(`${j} `);
    }

    console.log();
}