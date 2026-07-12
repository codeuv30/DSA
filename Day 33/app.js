/* QUESTION 1 */

/* 2418. Sort the People */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
// var sortPeople = function(names, heights) {
//     let map = new Map();
//     let ans = [];

//     /* MAP THE ARRAYS LIKE HIEGHT VS NAMES */
//     for(let i = 0; i < names.length; i++) {
//         let key = heights[i];
//         let value = names[i];

//         map.set(key, value)
//     }

//     /* INSERTION SORT THE HIEGHTS ARRAY */
//     let n = heights.length;

//     for(let i = 1; i < n; i++) {
//         let key = heights[i];
//         let j = i-1;

//         while(j >= 0 && heights[j] < key) {
//             heights[j+1] = heights[j];
//             j--;
//         }

//         heights[j + 1] = key;
//     }

//     /* COMPUTE THE FINAL RESULT */
//     for(let i = 0; i < heights.length; i++) {
//         let value = map.get(heights[i]);
//         ans.push(value);
//     }

//     return ans;
// };

// let names = ["Mary","John","Emma"], heights = [180,165,170];

// console.log(sortPeople(names, heights));




/* QUESTION 2 */

/* 2404. Most Frequent Even Element */

/**
 * @param {number[]} nums
 * @return {number}
 */
/* var mostFrequentEven = function(nums) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        let value = nums[i];

        if(value % 2 === 0) {
            map.set(nums[i], ((map.get(nums[i]) || 0) + 1));
        }
    }

    let freq = 0;
    let ans = -1;

    for(let key of map.keys()) {
        let value = map.get(key);

        if(freq < value) {
            freq = value;
            ans = key;
        } else if(freq === value) {
            ans = Math.min(ans, key);
        }
    }

    console.log(ans)
};
 */
/* console.log(mostFrequentEven([8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290])); */


/* QUESTION 3 */

/* class Solution {
    findFrequencies(arr) {
        let map = new Map();
        let str = ""

        for(let i = 0; i < arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) || 0) + 1);
        }

        for(let key of map.keys()) {
            if(!str) str += key + " " + map.get(key);
            else str += "\n" + key + " " + map.get(key);
        }

        return str;
    }
}

let solution = new Solution(); */

/* console.log(solution.findFrequencies([1, 2, 2, 3, 1, 4])); */

/* QUESTION 4 */

/* class Solution {
    sumOfUnique(nums) {
        let map = new Map();
        let sum = 0;

        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], ((map.get(nums[i])) || 0) + 1);
        }

        for(let key of map.keys()) {
            let freq = map.get(key);

            if(freq < 2) {
                sum += key;
            }
        }

        return sum;
    }
}

let solution = new Solution();
let ans = solution.sumOfUnique([1, 2, 3, 2]); */

/* console.log(ans); */

/* QUESTION 5 */

/* class Solution {
    mostFrequentEven(nums) {
        let map = new Map();

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] % 2 === 0) map.set(nums[i], ((map.get(nums[i])) || 0) + 1);
        }

        let freq = 0;
        let ans = -1;
        
        for(let key of map.keys()) {
            let value = map.get(key);

            if(freq < value) {
                freq = value;
                ans = key;
            } else if(freq === value) {
                ans = Math.min(ans, key);
            }
        }

        return ans;
    }
}

let solution = new Solution();
let ans = solution.mostFrequentEven([8154,9139,8194,3346,5450,9190,133,8239,4606,8671,8412,6290]); */

/* console.log(ans); */

/* QUESTION 6 */

/* class Solution {
    decodeMessage(mapping, message) {
        let str = "";

        for(let i = 0; i < message.length; i++) {
            let char = message.charAt(i);

            if(mapping[char]) str += mapping[char]
            else str += char;
        }

        return(str)
    }
}

let map = new Map([["a", "b"], ["b", "c"], ["c", "d"], ["d", "e"], ["e", "f"]]);

let solution = new Solution();
let ans = solution.decodeMessage({ a: 'b', b: 'c', c: 'd', d: 'e', e: 'f' }, "abc de"); */

/* console.log(ans); */

/* QUESTION 7 */

/* class Solution {
    distributeCandies(n, k, candies) {
        let map = new Map();
        let ans = 0;
        let count = 0;

        
        for(let i = 0; i < candies.length; i++) {
            map.set(candies[i], ((map.get(candies[i])) || 0) + 1);
        }

        if(map.size < k) return ans;

        while(n >= k) {
            for(let key of map.keys()) {
                if(map.get(key) > 0) {
                        map.set(key, (map.get(key)) - 1);
                        n = n - 1;
                        count += 1;

                        if(count == k) {
                            count = 0;
                            ans += 1;
                        }
                } else continue;
            }
        }

        return ans;
    }
}
 */
/* const solution = new Solution();
let ans = solution.distributeCandies(7, 3, [1, 1, 2, 2, 3, 3, 4]) */

/* console.log(ans); */

/* 6, 2, [1, 1, 1, 1, 1, 1] */
/* 7, 3, [1, 1, 2, 2, 3, 3, 4] */


/* QUESTION 8 */

/* class Solution {
    kthDistinct(arr, k) {
        let map = new Map();
        let newArr = [];

        for(let i = 0; i < arr.length; i++) {
            map.set(arr[i], (((map.get(arr[i])) || 0) + 1));
        }

        for(let key of map.keys()) {
            let value = map.get(key);

            if(value > 1) {
                map.delete(key);
            } else {
                newArr.push(key);
            }
        }

        let result =  newArr[ k - 1 ];

        if(!result) result = "None"

        return result;
    }
}

const solution = new Solution();
let ans = solution.kthDistinct(['m', 'n', 'o', 'n', 'p', 'm'], 2) */
// Counts: m=2, n=2, o=1, p=1
// Distinct list: [o, p] → k=2 → Output: "p"

/* console.log(ans); */

/* ['a', 'b', 'c', 'd', 'a', 'b', 'e'], 2 */



/* QUESTION 9 */

/* class Solution {
    wordPattern(pattern, s) {
        pattern = pattern.split("");
        s = s.split(" ");

        if(pattern.length != s.length) return false;

        let charToWord = new Map();
        let wordToChar = new Map();

        for(let i = 0; i < s.length; i++) {
            if(!charToWord.has(pattern[i]) && !wordToChar.has(s[i])) {
                charToWord.set(pattern[i], s[i]);
                wordToChar.set(s[i], pattern[i]);
                continue;
            } else {
                let charToWordValue = charToWord.get(pattern[i]);
                let currentWord = s[i];

                if(charToWordValue !== currentWord) return false;
            }
        }

        return true;
    }
} */

/* let solution = new Solution();
let ans = solution.wordPattern("abbab", "dog cat cat dog dog"); */

/* console.log(ans); */

/* QUESTION 10 */

/* class Solution {
    findErrorNums(nums) {
        let map = new Map();
        let missing = null;
        let duplicate = null;
        let n = Math.max(...nums);

        for(let i = 0; i < nums.length; i++) {
            let current = nums[i];
            let value = (((map.get(current)) || 0) + 1);

            map.set(current, value);
        }

        for(let key of map.keys()) {
            let value = map.get(key);

            if(value > 1) duplicate = key;
        }

        for(let i = 0; i <= n; i++) {
            if(!map.has(i)) missing = i;
        }

        return [duplicate, missing]
    }
} */

/* let solution = new Solution();
let ans = solution.findErrorNums([5, 4, 3, 2, 2]); */

/* console.log(ans); */