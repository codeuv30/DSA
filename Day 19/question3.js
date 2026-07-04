/* QUESTION */
/* Given an array of even size, it's called "balanced" if 
   sum(left half) == sum(right half).
   Find the minimum value that must be added to exactly ONE element 
   (from either half) to make the array balanced.
   Only one addition operation is allowed. 
   Return the minimum value required. */

let arr = [1, 2, 1, 2, 1, 3];

let firstArr = [], secondArr = [];
let sumOfFirstArray = 0, sumOfSecondArray = 0;
let result = 0;

for(let i = 1; i < (arr.length / 2) + 1; i++) {
    firstArr.push(arr[i - 1]);
    secondArr.push(arr[arr.length - i]);
}
for(let i = 0; i < firstArr.length; i++) {
    sumOfFirstArray += firstArr[i];
}

for(let i = 0; i < secondArr.length; i++) {
    sumOfSecondArray += secondArr[i];
}

if(sumOfFirstArray === sumOfSecondArray) {
    result = 0;
} else {
    let difference = sumOfFirstArray - sumOfSecondArray;
    let absolute = Math.abs(Number(difference));

    result = absolute;
}