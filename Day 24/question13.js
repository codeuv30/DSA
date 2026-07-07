/* ANSWER */

class Solution {
    /**
     * @param {string} word
     * @param {string} ch
     * @return {string}
     */
    reversePrefix(word, ch) {
        let index = null;

        for(let i = 0; i < word.length; i++) {
            if(word.charAt(i) === ch) {
                index = i;
                break;
            }
        }

        if(!index) return word;

        let newWord = word.slice(0, index + 1);
        let remaining = word.slice(index + 1, word.length + 1);

        let rev = "";

        for(let i = newWord.length - 1; i >= 0; i--) {
            rev += newWord.charAt(i);
        }

        let str = rev + remaining;

        return str;
    }
}

let solution = new Solution();
let ans = solution.reversePrefix("abcdefd", "d");
console.log(ans);