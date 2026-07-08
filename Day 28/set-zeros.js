let matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
];

let rows = [];
let cols = [];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (!matrix[i][j]) {
      rows.push(i);
      cols.push(j);
    }
  }
}

if (!rows.length) return matrix;
if (!cols.length) return matrix;

for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    matrix[rows[i]][j] = 0;
  }
}

for (let i = 0; i < cols.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    matrix[j][cols[i]] = 0;
  }
}

console.log(matrix);