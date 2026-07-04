/* LEARNING CORE (INDEXES) */

/* let arr = [10, 20, 30, 40, 50]; */

/* console.log("FOURTH INDEX VALUE: ", arr[4]);
console.log("ARRAY LENGTH", arr.length); */

/* IF WE WANT TO PRINT ALL THE NUMBER OF AN ARRAY */
/* for(let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
} */

/* IF WE WANT TO INITIALIZE AN ARRAY */

/* const arr = new Array(3); // Some people say 3 is the length of the array which is correct as shown in the line below
console.log(arr.length); // length = 3
 */

/* let array = [10, true, "a", { length: 4 }]; // We can have any type in one array which in not good */

/* const arr = new Array(3);
arr.push(100);
console.log(arr); */

/* QUESTION 1 */
/* SUM OF ELEMENTS OF AN ARRAY */

/* let arr = [2, 3, 4, 5];

let sum = 0;

for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum) */

/* QUESTION 2 */
/* MAX ELEMENT FROM AN ARRAY */

/* let arr = [-5, -12, -3, -47];

let highest = arr[0];

for(let i = 0; i < arr.length; i++) {
    if(highest < arr[i]) {
        highest = arr[i];
    }
}

console.log(highest); */

/* QUESTION 3 */
/* MAX SECOND ELEMENT FROM AN ARRAY */

/* let arr = [20, 45, 78, 95, 34];

let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i] !== max) {
    sMax = arr[i];
  }
}

console.log(sMax);
 */

/* QUESTION 4 */
/* REVERSE AN ARRAY (Extra Space Method) */

/* let arr = [20, 45, 78, 95, 34];
let temp = new Array(arr.length);

let i = arr.length - 1;

for(let j = 0; j <= temp.length - 1; j++) {
  temp[j] = arr[i];
  i--;
}

console.log(arr);
console.log(temp);
 */

/* QUESTION 5 */
/* REVERSE AN ARRAY (Without Extra Space Method) */
/* 
let arr = [10, 20, 30, 40, 50];
let i = 0; j = arr.length - 1;

while(i<j) {
  let temp = arr[ i ]; // temp = 10
  arr[ i ] = arr[ j ] // 10 = 50
  arr[ j ] = temp; // 50 = 10

  j--;
  i++;
}

console.log(arr) */

/* QUESTION 6 */
/* SWAP ALL 0s to RIGHT and 1s to LEFT */

/* let arr = [ 0, 1, 0, 1, 0, 0, 1, 1 ];

let i = 0; j = 0;

while(i < arr.length) {
  if(!arr[i]) {
    let temp = arr[j]; 
    arr[j] = arr[i];
    arr[i] = temp;

    j++;
  }

  i++;
}

console.log(arr); */

/* QUESTION 7 */
/* SWAP ALL negatives to RIGHT and positives to LEFT */

/* let arr = [ -1, -135, 1,-3, -4, 6, 0, -32, 7 ];

let i = 0; j = 0;

while(i < arr.length) {
  if(arr[i] < 0) {
    let temp = arr[j]; 
    arr[j] = arr[i];
    arr[i] = temp;

    j++;
  }

  i++;
}

console.log(arr); */

