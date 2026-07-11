/**
 * Find the first character that appears twice in a string.
 * @param {string} s - The input string
 * @return {string} - The first repeated character
 */
function repeatedCharacter(s) {
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))) {
            let oldArr = map.get(s.charAt(i));
            oldArr.push(i)

            map.set(s.charAt(i), oldArr);
        } else {
            map.set(s.charAt(i), [i])
        }
    }
    
    let [ letter ] = map.keys();

    let ans = [];

    for(let key of map.keys()) {
        let value = map.get(key);
        if(value.length > 1) ans.push(key)
    }

    if(ans.length === 1) return ans[0];

    for(let key of map.keys()) {
        let value = map.get(key);
        let letterFreq = map.get(key);
        let maxLetterIndex = map.get(letter)[1] || map.get(letter)[0];
        let currentLetterMaxIndex = map.get(key)[1];

        if(letterFreq.length > 1) {
            if(maxLetterIndex > currentLetterMaxIndex) {
                letter = key;
            }
        }
    }

    return letter;
}

console.log(repeatedCharacter("abcdefggh"));