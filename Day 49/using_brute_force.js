/* LEETCODE: 169. Majority Element */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        let count = 0;

        for(let j = i; j < n; j++) {
            if(nums[i] === nums[j]) count++;
        }

        if(count > Math.floor(n/2)) return nums[i]
    }
};

const ans = majorityElement([2,2,1,1,1,2,2]);
console.log(ans);