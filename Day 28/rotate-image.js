let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let row = matrix.length;
let col = matrix[0].length;
let arr = new Array(col);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(matrix[i].length);
}

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    arr[j][i] = matrix[i][j];
  }
}

// Flip the array

for (let i = 0; i < arr.length; i++) {
  let j = arr.length - 1;
  let k = 0;

  while (k < j) {
    let temp = arr[i][k];
    arr[i][k] = arr[i][j];
    arr[i][j] = temp;

    k++;
    j--;
  }
}

/* SINCE WE HAVE TO CHANGE MATRIX */

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = arr[i][j];
  }
}

console.log(matrix);
console.log(arr);