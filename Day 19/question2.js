/* QUESTION */
/* Given an array of integers, update every element with the 
   multiplication of its previous and next elements.
   Exception: First element = first * second element.
   Exception: Last element = last * second-last element.
   Note: Use original array values for calculation (not updated ones).
   
   Input: T (number of test cases)
   For each test case: N (size), then N integers (array elements) */

let arr = [2, 3];
let arrCopy = [...arr];

arr[0] = arr[0] * arr[1];
arr[arr.length - 1] = arrCopy[arr.length - 1] * arrCopy[arr.length - 2];

console.log(arr);

for(let i = 1; i < arr.length - 1; i++) {
    arr[i] = arrCopy[i - 1] * arrCopy[i+1]
}

console.log(arr)