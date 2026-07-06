/**
 * Problem: Check if Number Has Equal Digit Count and Digit Value
 * 
 * You are given a string `num` consisting of digits (0-9), 0-indexed.
 * 
 * For every index `i` in `num`:
 *   - Treat `i` itself as a digit (e.g., index 0 -> digit '0', index 3 -> digit '3')
 *   - `num[i]` tells you the EXPECTED number of times that digit should
 *     appear in the string `num`
 * 
 * Task: Check whether digit `i` occurs EXACTLY `num[i]` times in `num`,
 * for EVERY index `i`.
 *   - If this holds true for all indices, return true.
 *   - If it fails for even one index, return false.
 * 
 * Approach:
 * 1. Count the frequency of each digit (0-9) in the string `num`.
 * 2. Loop through every index `i` of `num`.
 * 3. For each index `i`, compare:
 *      actualCountOf(digit i) === Number(num[i])
 * 4. If any index fails this comparison, return false immediately.
 * 5. If all indices pass, return true.
 * 
 * Example 1:
 * num = "1210"
 *   -> digit '0' should appear 1 time  -> actual: 1 time  -> match
 *   -> digit '1' should appear 2 times -> actual: 2 times -> match
 *   -> digit '2' should appear 1 time  -> actual: 1 time  -> match
 *   -> digit '3' should appear 0 times -> actual: 0 times -> match
 *   -> Answer = true
 * 
 * Example 2:
 * num = "030"
 *   -> digit '0' should appear 0 times -> actual: 2 times -> MISMATCH
 *   -> Answer = false
 */




/* ANSWER */

class Solution {
    /**
     * @param {string} num
     * @return {boolean}
     */
    digitCount(num) {
        for(let i = 0; i < num.length; i++) {
            let index = i;
            let count = 0;

            for(let j = 0; j < num.length; j++) {
                let char = num.charAt(j);
                if(char == index) {
                    count++;
                }
            }

            if(num.charAt(index) != count) {
                return false;
                break;
            }
        }

        return true;
    }
}

let solution = new Solution();
let ans = solution.digitCount("030");

console.log(ans);