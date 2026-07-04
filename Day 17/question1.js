/* QUESTION 1 */
/* TAKE A NUMBER FROM USER */
/* CREATE AN EMPTY ARRAY OF THE GIVEN LENGTH */
/* TAKE NUMBERS FROM USER TO FILL THE ARRAY */
/* CALCULATE MEAN AND SUM OF THE ARRAY */

let n = 5;
let arr = [1, 2, 3, 4, 5];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let mean = ((sum / arr.length).toFixed(1));