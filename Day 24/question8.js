/**
 * Problem: Remove Digit From Number to Maximize Result
 * 
 * You are given a string `number` representing a positive integer,
 * and a character `digit`.
 * 
 * You must remove EXACTLY ONE occurrence of `digit` from `number`
 * (it's guaranteed that `digit` appears at least once in `number`).
 * 
 * Task: Return the resulting string after removal such that the
 * resulting number is AS LARGE AS POSSIBLE.
 * 
 * Approach:
 * 1. Find all indices in `number` where `digit` occurs.
 * 2. For each occurrence, try removing it and form the resulting string.
 * 3. Compare all resulting strings and pick the LARGEST one.
 *    (Since all resulting strings have the same length, comparison
 *    can be done lexicographically / digit by digit from left to right.)
 * 4. Return the largest resulting string.
 * 
 * Key Insight:
 * - Removing an occurrence of `digit` that has a LARGER digit right
 *   after it tends to produce a bigger result (because removing it
 *   shifts that larger digit one position to the left, increasing
 *   its "place value" importance).
 * 
 * Example 1:
 * number = "123", digit = "3"
 *   -> Only one '3' exists, remove it -> "12"
 *   -> Answer = "12"
 * 
 * Example 2:
 * number = "551", digit = "5"
 *   -> '5' occurs at index 0 and 1
 *   -> Removing index 0 -> "51"
 *   -> Removing index 1 -> "51"
 *   -> Both same here, Answer = "51"
 * 
 * Example 3 (tricky case where choice matters):
 * number = "649", digit = "9"
 *   -> Only one '9', remove it -> "64"
 *   -> Answer = "64"
 */


/* ANSWER */

class Solution {
  /**
   * @param {string} number
   * @param {string} digit
   * @returns {string}
  */
  removeDigit(number, digit) {
    let arr = [];
    let indexes = [];

    for(let i = 0; i < number.length; i++) {
        if(number.charAt(i) === digit) indexes.push(i);
    }
    
    for(let i = 0; i < indexes.length; i++) {
        let str = "";
        let digitToIgnore = number.charAt(indexes[i]);

        for(let j = 0; j < number.length; j++) {
            str = number.replace(digitToIgnore, "");
        }

        arr.push(str);
    }

    /* SORT ARRAY IN LEXIOGRAPHICAL ORDER */
    let n = arr.length;
    
    for(let i = 0; i < n-1; i++) {
        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    let numberToReturn = arr[arr.length - 1];

    return numberToReturn;
  }
}

let solution = new Solution();
let ans = solution.removeDigit("1231", "1");
console.log(ans);