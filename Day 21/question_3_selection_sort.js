/* QUESTION */
/* SORT AN ARRAY USING SELECTION SORT ALGORITHM */

let arr = [3, 2, 9, 10, 5, 6, 7, 3, 4];

let n = arr.length;

for(let i = 0; i < n - 1; i++) {
    let min = i;

    for(let j = i + 1; j < n; j++) {
        if(arr[j] < arr[min]) {
            let temp = arr[j];
            arr[j] = arr[min];
            arr[min] = temp;
        }
    }
}

console.log(arr);