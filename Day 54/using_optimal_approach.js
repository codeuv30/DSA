/* Leetcode: 15. 3Sum */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var threeSum = function (arr) {
  let ans = [];
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i != 0 && arr[i - 1] == arr[i]) continue;

    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];

      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        ans.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) j++;
        while (j < k && arr[k] == arr[k + 1]) k--;
      }
    }
  }

  return ans;
};

const ans = threeSum([1, 2, 0, 1, 0, 0, 0, 0]);
console.log(ans);