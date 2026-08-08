/**
 * @param {Array} arr
 * @param {number} i
 * @param {number} j
*/

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * @param {Array} arr
 * @param {number} f
 * @param {number} l
*/

function findPartition(arr, f, l) {
    let i = f - 1;
    let j = f;
    let pivot = arr[l];

    while(j < l) {
        if(arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
        j++;
    }

    i++;
    swap(arr, i, l);

    return i;
}

/**
 * @param {Array} arr
 * @param {number} f
 * @param {number} l
*/

function quickSort(arr, f, l) {
    if(f >= l) return;

    let pIndex = findPartition(arr, f, l);

    quickSort(arr, f, pIndex - 1);
    quickSort(arr, pIndex + 1, l);
}

let arr = [10, 5, 1, 9, 14, 6, 19, 12];
quickSort(arr, 0, arr.length - 1);
console.log(arr);