/* LEETCODE: 42. Trapping Rain Water */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trap = function(arr) {
    let total = 0;

    for(let i = 0; i < arr.length; i++) {
        let leftMax = 0;
        let rightMax = 0;

        /* Left Max */
        for(let j = i; j >= 0; j--) {
            if(leftMax < arr[j]) leftMax = arr[j];
        }

        /* Right Max */
        for(let j = i; j < arr.length; j++) {
            if(rightMax < arr[j]) rightMax = arr[j];
        }

        let min = Math.min(leftMax, rightMax);
        total += min - arr[i];
    }

    return total;
};

const ans = trap([0,1,0,2,1,0,1,3,2,1,2,1]);
console.log(ans); // Time complexity is O(N square)