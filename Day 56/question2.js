/* 283. Move Zeroes */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
    let i = 0;
    let j = i+1;

    while(j < arr.length) {
        if(arr[i] !== 0) {
            i++;
        }

        if(arr[j] == 0 || i === j) {
            j++;
            continue;
        }

        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;j++;
    }

    return arr;
};

const ans = moveZeroes([1,2,3,1]);
console.log(ans);