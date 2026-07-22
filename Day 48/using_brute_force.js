/* 53. Maximum Subarray */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];

    for(let st = 0; st < nums.length; st++) {
        
        let sum = 0;

        for(let en = st; en < nums.length; en++) {
            sum += nums[en];
            if(sum > max) max = sum;
        }
    }

    return max;
};

const ans = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]); // O/P => 6
console.log(ans);