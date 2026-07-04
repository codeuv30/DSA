/* QUESTION */
/* YOU ARE GIVEN AN ARRAY YOU HAVE TO REVERSE IT */

let arr = [1, 2, 3, 4, 5];

let copyArr = [...arr];

let i = 0;

for (let j = arr.length - 1; j >= 0; j--) {
  copyArr[i] = arr[j];
  i++;
}

console.log(copyArr);