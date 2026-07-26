/* 724. Find Pivot Index */

/**
 * @param {number[]} arr
 * @return {number}
 */
var pivotIndex = function(arr) {
    let total = 0;
    let left = 0;

    for(let i = 0; i < arr.length; i++) total += arr[i];

    for(let i = 0; i < arr.length; i++) {
        if(left == (total - left - arr[i])) return i;
        left += arr[i];
    }

    return -1;
};

const ans = pivotIndex([1,7,3,6,5,6]);
console.log(ans);