/* SEARCH something in an array using linear search */

/**
 * At last after solving the problem
 * We, I and my intructor found that this is not the best or efficient way to find an element in an array
 * Let's say we have 10,000 elements now we have to loop over 10,000 elements
 * NOT GOOD AT ALLLL
*/

const prompt = require("prompt-sync")();

let t = Number(prompt("Enter number you want to search: "));

let arr = [12, 56, 32, 89, 15, 98, 34];

let index = -1;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === t) {
        index = i;
        break;
    }
}

console.log(index == -1 ? `no search results for ${t}` : `${t} found at ${index} index`);