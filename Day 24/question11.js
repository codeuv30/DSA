/* QUESTION 11 */
/**
 * Problem: Calculate Digit Sum of a String
 *
 * You are given a string `s` consisting of digits, and an integer `k`.
 *
 * A "round" can be performed as long as the length of `s` is GREATER
 * THAN `k`. In one round:
 *   1. Divide `s` into consecutive groups, each of size `k`
 *      (the last group may be smaller if it doesn't divide evenly).
 *   2. Replace each group with a string representing the SUM of its digits.
 *   3. Concatenate all the resulting strings together to form a new `s`.
 *
 * Repeat this process until the length of `s` is LESS THAN OR EQUAL TO `k`.
 *
 * Task: Return the final string after all rounds are done.
 *
 * Input Format:
 *   - First line: string `s` (consisting of digits)
 *   - Second line: integer `k`
 *
 * Output Format:
 *   - A single string representing the final result
 *
 * Constraints:
 *   - 1 <= s.length <= 100   (s is never empty, and never too long)
 *   - 2 <= k <= 100          (k is never 0 or 1, avoiding edge cases
 *                              like divide-by-zero or single-char groups)
 *   - s consists of digits only (no need to validate for letters/symbols)
 *
 * Note: Since constraints are small (max length 100), a simple/brute-force
 * approach (loop + string slicing + digit summing) is efficient enough;
 * no need for complex optimization.
 *
 * Example:
 * s = "11111222233", k = 3
 *
 * Round 1:
 *   groups -> "111", "112", "222", "33"
 *   digit sums -> 3, 4, 6, 6
 *   new s -> "3466" (length 4, still > k=3, so continue)
 *
 * Round 2:
 *   groups -> "346", "6"
 *   digit sums -> 13, 6
 *   new s -> "136" (length 3, NOT > k=3, so stop)
 *
 * Final Answer = "136"
 */

/* ANSWER */

class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {string}
   */
  digitSum(s, k) {
    while (s.length > k) {
      let i = 0;
      let concatenate = "";

      while (i < s.length) {
        let group = s.slice(i, i + k);

        let sum = 0;

        for (let j = 0; j < group.length; j++) {
          sum += Number(group.charAt(j));
        }

        concatenate += sum;
        i += k;
      }

      s = concatenate;
    }

    return s;
  }
}

let solution = new Solution();
let ans = solution.digitSum("11111222223", 3);
console.log(ans)