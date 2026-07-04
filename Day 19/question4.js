/* QUESTION */
/* Given an array of integers, sort the first half in ascending order
   and the second half in descending order.
   Array size can be even or odd.
   If size is odd, the middle element belongs to the second half.
   Return the final combined array after sorting both halves. */

let arr = [2, 6, 3, 1, 9, 8, 5];

let isEven = arr.length % 2 === 0 ? true : false;
let firstArr = [], secondArr = [];

if (isEven) {
  for (let i = 1; i < arr.length / 2 + 1; i++) {
    firstArr.push(arr[i - 1]);
    secondArr.push(arr[arr.length - i]);
  }
} else {
    let halfOfArrayFloor = Math.floor(arr.length / 2);

    for(let i = arr.length; i > halfOfArrayFloor + 1; i--) {
        let index = arr.length - i;
        firstArr.push(arr[index]);
    }

    let halfOfArrayCeil = Math.ceil(arr.length / 2);

    for(let i = halfOfArrayCeil; i > 0; i--) {
        let index = (arr.length) - i;
        secondArr.push(arr[index]);
    }
}

firstArr = firstArr.sort((a, b) => {
    return a - b;
});

secondArr = secondArr.sort((a, b) => {
    return b - a;
});

let finalArray = [...firstArr, ...secondArr]

console.log(finalArray)