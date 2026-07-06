/**
 * Problem: Find Resultant Array After Removing Anagrams
 *
 * You are given a 0-indexed string array `words`, where each element
 * consists of lowercase English letters.
 *
 * In one operation, you can select an index `i` (where i > 0) such that
 * words[i - 1] and words[i] are anagrams of each other, and then delete
 * words[i] from the array.
 *
 * Repeat this operation as many times as possible until no more such
 * deletions can be made.
 *
 * Task: Return the final array after all possible deletions are done.
 *
 * Note: Two identical strings (e.g., "cd" and "cd") ARE considered
 * anagrams of each other too, since they have the same letters with
 * the same frequency — the definition doesn't require the strings
 * to be different, just that their letters/frequency match.
 *
 * Approach:
 * 1. Keep a result array (or use it like a stack) to store the words
 *    that are "kept" so far.
 * 2. Go through `words` one by one.
 * 3. For each word, compare it with the LAST kept word in the result
 *    (not the original previous index, but the last one that survived).
 * 4. If the current word is an anagram of the last kept word, skip it
 *    (don't add it to result).
 * 5. If it's NOT an anagram, add it to the result array.
 * 6. After processing all words, the result array is the final answer.
 *
 * How to check if two words are anagrams:
 *   - Sort both words' characters and compare, OR
 *   - Count character frequencies in both and compare
 *
 * Example (illustrative, not from the original problem statement):
 * words = ["ab", "ba", "cd", "dc", "ef"]
 *   -> "ba" is anagram of "ab" (previous kept) -> delete "ba"
 *   -> "dc" is anagram of "cd" (previous kept) -> delete "dc"
 *   -> "ef" is not anagram of "cd" (previous kept) -> keep it
 *   -> Final answer = ["ab", "cd", "ef"]
 */

/* ANSWER */

class Solution {
  /**
   * @param {string[]} words
   * @return {string[]}
   */
  removeAnagrams(words) {
    function isAnagram(word1, word2) {
      if (word1.length !== word2.length) return false;

      let arr = new Array(26).fill(0);

      for (let i = 0; i < word1.length; i++) {
        let ascii = word1.charCodeAt(i);
        arr[ascii - 97] = arr[ascii - 97] + 1;
      }

      for (let i = 0; i < word2.length; i++) {
        let ascii = word2.charCodeAt(i);
        arr[ascii - 97] = arr[ascii - 97] - 1;
      }

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
          return false;
          break;
        }
      }

      return true;
    }

    for (let i = 0; i < words.length; i++) {
      if (i > 0) {
        let word1 = words[i];
        let word2 = words[i - 1];

        let isAnagrams = isAnagram(word1, word2);

        if (isAnagrams) {
          words.splice(i, 1);
          i--; // the element is shifted so we have to reposition the i
        }
      }
    }

    return words;
  }
}

let solution = new Solution();
let ans = solution.removeAnagrams(["abba", "baba", "bbaa", "cd", "cd"]);
console.log(ans);
