/* 1299. Replace Elements with Greatest Element on Right Side */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    
    let max = -1;

    for(let i = arr.length - 1; i >= 0; i--) {
        if(arr[i] > max) {
            let temp = max;
            max = arr[i];
            arr[i] = temp;
        } else {
            arr[i] = max;
        }
    }

    return arr;
};

const ans = replaceElements([17,18,5,4,6,1]);
console.log(ans);