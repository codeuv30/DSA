/* LEET CODE 26. Remove Duplicates from Sorted Array */

let nums = [1, 2];

var removeDuplicates = function (nums) {
    let j = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[j++] = nums[i + 1];
        }
    }

    return {nums, j};
};

console.log(removeDuplicates(nums));