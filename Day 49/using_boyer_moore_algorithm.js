/* LEETCODE: 169. Majority Element */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let length = nums.length;
    let freq = 0;
    let ans = 0;

    for(let i = 0; i < length; i++) {
        if(freq === 0) {
            freq++;
            ans = nums[i];
            continue;
        }

        if(nums[i] === ans) freq++;
        else freq--;
    }

    return ans;
};

const ans = majorityElement([3, 2, 3]);
console.log(ans);