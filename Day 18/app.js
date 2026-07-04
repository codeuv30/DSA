/* QUESTION 1 */
/* YOU HAVE TO LEFT ROTATE EVERY ELEMENT OF AN ARRAY */

/* let arr = [ 1, 2, 3, 4, 5 ];

let temp = arr[0];

for(let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
}

arr[arr.length - 1] = temp;

console.log(arr); */

/* QUESTION 2 */
/* YOU HAVE TO RIGHT ROTATE EVERY ELEMENT OF AN ARRAY */

/* let arr = [ 1, 2, 3, 4, 5 ];

let temp = arr[arr.length - 1];

for(let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
}

arr[0] = temp;

console.log(arr); */

/* QUESTION 3 */
/* ARRAY LEFT ROTATION BY K ELEMENTS */

/* let arr = [ 1, 2, 3, 4, 5 ];

let k = 12;

k = k % arr.length;

for(let j = 1; j<=k; j++) {
    let temp = arr[0];
    for(let i = 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }

    arr[arr.length-1] = temp;
};

console.log(arr); */

/* QUESTION 4 */
/* ARRAY RIGHT ROTATION BY K ELEMENTS */

/* let arr = [1, 2, 3, 4, 5];

let k = 12;

k = k % arr.length;

for (let j = 1; j <= k; j++) {
  let temp = arr[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    arr[i + 1] = arr[i];
  }

  arr[0] = temp;
}

console.log(arr);
*/

/* QUESTION 5 */
/* PRINT THE COUNT OG SUBARRAYS WHO's SUM IS EQUAL TO THE TARGET */

let arr = [1, 2, 3, 7, 5];

let count = 0;
let target = 12;

let subArrays = [];

for (let i = 0; i < arr.length; i++) {
  let sum = 0;

  let subArray = [];

  for (let j = i; j < arr.length; j++) {
    sum += arr[j];

    subArray.push(arr[j]);
    
    if (sum === target) {
      count++;
      subArrays.push(subArray);
      subArray = [];
    }
  }
}

console.log(count);
console.log(subArrays);