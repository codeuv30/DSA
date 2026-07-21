/* LEET CODE: 1089. Duplicate Zeros */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let length = arr.length;
  let count = 0;
  for (let i = 0; i < length; i++) if (arr[i] === 0) count++;

  let i = length - 1;
  let j = length - 1 + count;

  while(i >= 0) {
    if(j < length) {
      arr[j] = arr[i];
    }

    if(arr[i] == 0) {
      j--;
      if(j < length) {
        arr[j] = arr[i];
      }
    }

    j--;i--;
  }

  return arr;
};

const ans = duplicateZeros([8,4,5,0,0,0,0,7]);
console.log(ans);
