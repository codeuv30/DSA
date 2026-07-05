/* QUESTION 2 */
/* CALCULATE PERCENTAGE OF A CHARACTER IN A STRING */

/* ANSWER */

class Solution {
  /**
   * @param {string} s
   * @param {string} letter
   * @returns {number}
   */
  percentageLetter(s, letter) {
    let count = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s.charAt(i) === letter) count++;
    }

    let length = s.length;
    let percentage = Math.floor(Number((count / length) * 100));

    return percentage;
  }
}

let solution = new Solution();
let percentage = solution.percentageLetter("hello", "l");

console.log(percentage);