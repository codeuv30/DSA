/* LEETCODE: 42. Trapping Rain Water */

/**
 * @param {number[]} arr
 * @return {number}
 */
var trap = function(arr) {

    let total = 0, leftMax = 0, rightMax = 0, left = 0, right = arr.length - 1;

    while (left < right) {
        if(leftMax < arr[left]) {
            leftMax = arr[left];
        } 
        if(rightMax < arr[right]) {
            rightMax = arr[right];
        }

        if(leftMax < rightMax) {
            total += leftMax - arr[left];
            left++;
        } else {
            total += rightMax - arr[right]
            right--;
        }
    }

    return total;

};

const ans = trap([4, 2, 0, 3, 2, 5]);
console.log(ans); // Time complexity is O(N)