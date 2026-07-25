/* 1480. Running Sum of 1d Array */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var runningSum = function(arr) {

    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        arr[i] = sum;
    }

    return arr;
    
};

const ans = runningSum([3,1,2,10,1]);
console.log(ans);