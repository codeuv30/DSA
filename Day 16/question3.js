/* QUESTION */
/* TAKE A NUMBER FROM USER */
/* LET'S SAY YOU GET NUMBER 4 THEN YOU HAVE TO PRINT */
/* 
1) A
2) A B
3) A B C
4) A B C D
*/
/* MEANS YOU HAVE TO PRINT THIS PATTERN WITH THE NUMBER OF ROWS YOU GET FROM USER */


const prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

const alphabets = Array.from({ length: 26 }, (_, i) => (String.fromCharCode(97 + i)).toUpperCase());

for(let i = 1; i<=n; i++) {
    for(let j = 0; j<i; j++) {
        process.stdout.write(`${alphabets[j]} `);
    }

    console.log();
}