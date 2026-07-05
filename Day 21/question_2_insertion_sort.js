/* QUESTION */
/* SORT AN ARRAY USING INSERTION SORT */

let arr = [5, 3, 8, 1, 6];
let n = arr.length;

for (let i = 0; i < n; i++) {
  let key = arr[i];

  let j = i - 1;

  while(j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];

    j--;
  }

  arr[j + 1] = key;
}

console.log(arr);