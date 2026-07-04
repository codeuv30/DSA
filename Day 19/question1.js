/* QUESTION */
/* Given an array of integers, find the sum of absolute differences 
   between every pair (i, j) such that i < j. 
   For each pair, take |arr[i] - arr[j]| and add it to the total sum. 
   Array can have duplicates, negatives, or zeros. 
   Do not rearrange the array — process as is. 
   Return the final total sum. 
*/

let arr = [-1, 3, -2, 5];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
      let difference = arr[i] - arr[j];
      let absolute = Math.abs(difference);
      sum += absolute;
  }
}

console.log(sum);
