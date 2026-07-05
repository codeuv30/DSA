/* QUESTION 3 */
/* CAPATILIZE THE FIRST AND LAST CHARACTER OF EACH WORD IN A SENTENCE */

let str = "H";

if(str.length === 1 || str.length === 2) {
    console.log(str.toUpperCase())
    return;
}

let arr = str.split(" ");
let newStr = "";

for(let i = 0; i < arr.length; i++) {
    let first = arr[i].charAt(0).toUpperCase();
    let mid = arr[i].substring(1, arr[i].length - 1);
    let last = arr[i].charAt(arr[i].length - 1).toUpperCase();

    let finalString = `${first}${mid}${last} `;

    newStr += finalString;
}

console.log(newStr)