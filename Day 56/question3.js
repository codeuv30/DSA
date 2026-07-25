/* 905. Sort Array By Parity */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortArrayByParity = function(arr) {
    let j = 0;
    let i = j + 1;

    while(i < arr.length) {
        if((arr[j] % 2) == 0) j++;
        if((arr[i] % 2) !== 0 || i == j) {
            i++;
            continue;
        }

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j++;
    }

    return arr;
};

const ans = sortArrayByParity([3, 1, 2, 4]);
console.log(ans);