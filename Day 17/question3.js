/* QUESTION */
/* YOU WILL BE GIVEN AN ARRAY */
/* YOU HAVE TO FIND SECOND MAX ELEMENT */

let arr = [5, 9, 2, 8, 7, 1];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for(let i = 2; i < arr.length; i++) {
    if(max < arr[i]) {
        [max, sMax] = [arr[i], max];
    } else if(sMax < arr[i]) {
        sMax = arr[i];
    }
}

console.log(sMax)