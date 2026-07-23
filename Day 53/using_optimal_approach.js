/* LEETCODE: 11. Container With Most Water */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxArea = function(arr) {
    let maxArea = 0;

    let n = arr.length;
    let lp = 0;
    let rp = n - 1;

    while(lp < rp) {
        w = rp - lp;
        h = Math.min(arr[rp], arr[lp]);

        let area = w * h;

        maxArea = Math.max(area, maxArea);

        arr[lp] < arr[rp] ? lp++ : rp--;
    }

    return maxArea;
};

const ans = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(ans);