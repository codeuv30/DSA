/* 283. Move Zeroes */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length;
    let i = 0;
    let j = i + 1;

    while(j < length) {
        if(nums[i] !== 0) {
            i++;
        };

        if(nums[j] === 0) {
            j++
            continue;
        };

        if(i == j) {
            j++;
            continue;
        }

        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

        i++;j++;
    }

    return nums;
};

const ans = moveZeroes([4,2,4,0,0,3,0,5,1,0]); // O/P => [4,2,4,3,5,1,0,0,0,0]
console.log(ans)