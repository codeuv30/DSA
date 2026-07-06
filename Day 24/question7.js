/**
 * Problem: Largest 3-Same-Digit Number in String
 * 
 * You are given a string `num` representing a large integer (so it can be
 * very long, longer than a normal number type could hold, hence it's a string).
 * 
 * A "good integer" is defined as:
 *   - A substring of `num`
 *   - Exactly length 3
 *   - Consists of the SAME digit repeated 3 times (e.g., "777", "000", "222")
 * 
 * Task: Find and return the LARGEST such good integer (as a string).
 * If no such substring exists in `num`, return an empty string "".
 * 
 * Approach:
 * 1. Traverse the string checking every group of 3 consecutive characters
 *    (a "sliding window" of size 3).
 * 2. For each window, check if all 3 characters are the same digit
 *    (num[i] === num[i+1] === num[i+2]).
 * 3. If they are the same, that's a valid "good integer" candidate.
 * 4. Among all valid candidates found, keep track of the LARGEST one
 *    (comparing based on digit value, e.g., '9' > '8' > ... > '0').
 * 5. Return the largest one found, or "" if none exist.
 * 
 * Example:
 * num = "6777133339"
 *   -> "777" is a good integer (digit 7 repeated thrice)
 *   -> "333" is a good integer (digit 3 repeated thrice)
 *   -> Largest among them = "777" (since 7 > 3)
 *   -> Answer = "777"
 * 
 * Example (no good integer):
 * num = "12345"
 *   -> No 3 consecutive same digits found anywhere
 *   -> Answer = "" (empty string)
 */


/* ANSWER */

class Solution {
    /**
     * @param {string} num
     * @returns {string}
    */
  largestGoodInteger(num) {
    num = num.toString();

    let i = 0;
    let j = i + 1;
    let h = j + 1;

    let arr = [];

    while(h < num.length) {
        let iChar = num.charAt(i);
        let jChar = num.charAt(j);
        let hChar = num.charAt(h);

        if(iChar === jChar && iChar === hChar) {
            let str = `${iChar}${jChar}${hChar}`;

            arr.push(str);
        }
        
        i++;
        j++;
        h++;
    }

    /* IF NOTHING */
    if(!arr.length) return "";
    
    /* SORT LEXIOGRAPHICALLY */
    let n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    let greatest = arr[arr.length - 1];

    return greatest;
  }
}

let solution = new Solution();
let ans = solution.largestGoodInteger(6777133339);
console.log(ans);