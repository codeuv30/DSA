/* Leetcode: 15. 3Sum */

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var threeSum = function(arr) {
    let ans = [];
    let set = new Set();

    for(let i = 0; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++) {

            for(let k = j + 1; k < arr.length; k++) {

                if((arr[i] + arr[j] + arr[k]) == 0) {
                    let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
                    let key = triplet.join(",");

                    if(!set.has(key)) {
                        ans.push(triplet);
                        set.add(key);
                    };
                };
            }

        }

    }

    return ans;

};

const ans = threeSum([-1,0,1,2,-1,-4]);
console.log(ans); /* O(n³) */

/* This code will give TLE on leetcode because contraints are n <= 3000 but are time complexity is O(n³) */
/* and cube of 3000 is 27 billion and we are only allowed 10⁸ operations per seconds */
/* and 27 billion ops > 10⁸ ops, hence it will give us TLE */