/**
 * Problem: Rearrange Characters to Make Target String (Well-Spaced String)
 *
 * You are given a 0-indexed string `s` consisting of only lowercase English
 * letters, where each letter appears exactly twice.
 *
 * You are also given a 0-indexed integer array `distance` of length 26.
 * Each letter is mapped to an index: 'a' -> 0, 'b' -> 1, ..., 'z' -> 25.
 *
 * A string is called "well-spaced" if, for every letter in the alphabet,
 * the number of characters between its two occurrences in `s` is exactly
 * equal to distance[i] (where i is that letter's index).
 *
 * Task: Return true if `s` is well-spaced, otherwise return false.
 *
 * Approach:
 * 1. Traverse the string and store the first index of each letter.
 * 2. When the same letter is seen the second time, calculate the gap:
 *      gap = secondIndex - firstIndex - 1
 * 3. Compare this gap with distance[letterIndex] (letterIndex = charCode - 'a'.charCode)
 * 4. If any letter's gap does not match its expected distance, return false.
 * 5. If all letters match, return true.
 *
 * Example:
 * s = "baddab", distance = [0,0,2,0,...,0]
 *   'b' -> indices 0,5 -> gap = 5-0-1 = 4 -> distance[1] = 0 -> mismatch -> false
 */

class Solution {
  /**
   * @param {string} s
   * @param {Array} distance
   * @returns {boolean}
   */
  checkDistances(s, distance) {
    let myArray = new Array(26);
    let doneChars = [];
    let distanceArr = new Array(26).fill(0);

    let i = 0;

    let chars = [];

    for (let j = 0; j < s.length; j++) {
      if (!chars.includes(s.charAt(j))) chars.push(s.charAt(j));
    }

    while (i < chars.length) {
      let char = chars[i];
      let firstIndex = null;
      let secondIndex = null;

      let h = 0;

      while (h < s.length) {
        if (s.charAt(h) === char) {
          firstIndex = h;
          break;
        }
        h++;
      }

      let j = i + 1;

      while (j < s.length) {
        if (
          j !== firstIndex &&
          s.charAt(j) === char &&
          !doneChars.includes(char)
        ) {
          secondIndex = j;
          doneChars.push(char);
          break;
        }

        j++;
      }

      let distance = secondIndex - firstIndex - 1;

      let ascii = char.charCodeAt();
      let index = ascii - 97;

      distanceArr[index] = distance;

      i++;
    }

    for(let i = 0; i < distanceArr.length; i++) {
        if(distance[i] != distanceArr[i]) {
            return false
            break;
        }
    }

    return true;
  }
}

let solution = new Solution();

/* TEST CASES */
// Test Case 1: Expected -> false
// 'a' ka gap = 4 (index 0,5), but distance[0] = 1 (mismatch)
let checkDistance1 = solution.checkDistances("abccba", [
  "1", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance1); // Expected: false

// Test Case 2: Expected -> true
// 'a' gap = 4, 'b' gap = 2, 'c' gap = 0 -> sab distance[] se match
let checkDistance2 = solution.checkDistances("abccba", [
  "4", "2", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance2); // Expected: true


// Test Case 3: Expected -> true
// Simple case, 'a' adjacent (index 0,1) -> gap = 0
let checkDistance3 = solution.checkDistances("aa", [
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance3); // Expected: true


// Test Case 4: Expected -> true
// 'a' at index 0,2 -> gap = 1, matches distance[0] = 1
let checkDistance4 = solution.checkDistances("aba", [
  "1", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance4); // Expected: true


// Test Case 5: Expected -> false
// 'b' at index 1,4 -> gap = 2, but distance[1] = 0 (mismatch)
let checkDistance5 = solution.checkDistances("aba", [
  "1", "5", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance5); // Expected: false


// Test Case 6: Expected -> true
// Multiple letters check: "baddab"
// 'b' gap=4, 'a' gap=2, 'd' gap=0 -> match distance[1]=4, distance[0]=2, distance[3]=0
let checkDistance6 = solution.checkDistances("baddab", [
  "2", "4", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance6); // Expected: true

// Test Case 7: Expected -> true
// From problem sample -> all letters adjacent, all distances = 0
let checkDistance7 = solution.checkDistances("zzxxccvvbbnnmmllkkjjiihhggffddssaa", [
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0", "0", "0", "0", "0",
  "0", "0", "0", "0", "0", "0",
]);
console.log(checkDistance7); // Expected: true