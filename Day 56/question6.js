/* 238. Product of Array Except Self */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var productExceptSelf = function(arr) {
    let suffix = 1;
    let ans = new Array(arr.length).fill(1);

    for(let i = 1; i < arr.length; i++) {
        ans[i] = ans[i - 1] * arr[i - 1]
    }

    for(let i = arr.length - 1; i >= 0; i--) {
        ans[i] *= suffix;

        suffix *= arr[i];
    }

    return ans;
};

const ans = productExceptSelf([7, 0, 5, 8, 9]);
console.log(ans);