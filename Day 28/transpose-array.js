let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

let row = matrix.length;
let col = matrix[0].length;
let arr = new Array(col);

for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array(row)
}

for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
        arr[j][i] = matrix[i][j];
    }
}

console.log(arr)