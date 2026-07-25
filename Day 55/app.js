/* 56. Merge Intervals */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans = [];

    intervals.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < intervals.length; i++) {
        let cur = intervals[i];
        let prev = ans[ans.length - 1];

        if(ans.length == 0 || prev[1] < cur[0]) {
            ans.push(cur);
            continue;
        };

        if(cur[0] <= prev[1]) {
            ans[ans.length - 1][1] = Math.max(cur[1], prev[1]);
        }
    }

    return ans;
};
const ans = merge([[1,3],[2,6],[8,10],[15,18]]);
console.log(ans);