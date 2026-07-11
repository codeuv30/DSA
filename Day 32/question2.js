/**
 * Find the two indices in the array such that their sum equals the target.
 * @param {number[]} nums - The array of numbers.
 * @param {number} target - The target sum.
 * @return {number[]} - An array containing the two indices.
 */
function twoSum(nums, target) {
  
    let map = new Map();

    let ans = [];

    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            ans.push(map.get(target - nums[i]));
            ans.push(i);
        } else {
            map.set(nums[i], i);
        }
    }

    return([ans[0], ans[1]])

}

console.log(twoSum([1,1,1,1], 2));