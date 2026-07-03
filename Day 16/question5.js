/* QUESTION */
/* TAKE A NUMBER FROM USER */
/* LET'S SAY YOU GET NUMBER 5 THEN YOU HAVE TO PRINT RIGHT ANGLE TRIANGLE BUT ITS INVERTED AND TWISTED */
/* 
1)         *
2)       * *
3)     * * *
4)   * * * *
5) * * * * *
*/
/* MEANS YOU HAVE TO PRINT THIS PATTERN WITH THE NUMBER OF ROWS YOU GET FROM USER */

/* ANSWER */

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

for(let i = 1; i<=n; i++) {
    for(let j = 1; j<=n - i; j++) {
        process.stdout.write('  ');
    }

    for(let j = i; j>=1; j--) {
        process.stdout.write('* ');
    }

    console.log();
}