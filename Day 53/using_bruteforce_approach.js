/* LEETCODE: 11. Container With Most Water */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxArea = function(arr) {
    let maxArea = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            let width = j - i;
            let height = Math.min(arr[i], arr[j]);

            let area = width * height;
            maxArea = Math.max(area, maxArea);
        }
    }

    return maxArea;
};

const ans = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(ans);