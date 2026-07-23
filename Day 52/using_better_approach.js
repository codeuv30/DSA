/* LEETCODE: 42. Trapping Rain Water */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trap = function(arr) {

    let total = 0;
    let leftMax = new Array(arr.length).fill(0);
    let rightMax = new Array(arr.length).fill(0);

    leftMax[0] = arr[0];
    rightMax[rightMax.length  - 1] = arr[arr.length - 1];

    /* Calculate Left Max Array */
    for(let i = 1; i < arr.length; i++) if(leftMax[i - 1] > arr[i]) leftMax[i] = leftMax[i-1]; else leftMax[i] = arr[i]
    /* Calculate Right Max Array */
    for(let i = arr.length - 2; i >= 0; i--) if(rightMax[i + 1] > arr[i]) rightMax[i] = rightMax[i+1]; else rightMax[i] = arr[i]

    /* Calculate the answer */
    for(let i = 0; i < arr.length; i++) {
        total += (Math.min(leftMax[i], rightMax[i])) - arr[i];
    }

    return total;
};

const ans = trap([4, 2, 0, 3, 2, 5]);
console.log(ans); // Time complexity is O(N)