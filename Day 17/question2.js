/* QUESTION */
/* YOU HAVE GIVEN A N ARRAY */
/* FROM THAT ARRAY YOU HAVE TO FIND THE MAX ELEMENT AND ITS INDEX */
/* FOR EXAMPLE */
/* ARR = [2, 96, 69, 77, 145, 20] */
/* OUTPUT: */
/* Max element = 145 found at index 4 */

/* ANSWER */

let arr = [2, 96, 69, 77, 145, 20];

let highest = arr[0];
let index = 0;

for(let i = 0; i < arr.length; i++) {
    if(highest < arr[i]) {
        highest = arr[i];
        index = i;
    }
}

console.log(highest, index)