/* ANSWER */

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    areNumbersAscending(s) {
        let arr = s.split(" ");
        let numbers = [];

        for(let i = 0; i < arr.length; i++) {
            if(!isNaN(Number(arr[i]))) {
                numbers.push(Number(arr[i]))
            }
        }

        for(let i = 0; i < numbers.length; i++) {
            for(let j = i + 1; j < numbers.length; j++) {
                if(numbers[i] === numbers[j]) {
                    return false;
                    break;
                }
            }
        }

        let sortedNumbers = [...numbers];
        let n = sortedNumbers.length;
        for(let i = 0; i < n - 1; i++) {
            for(let j = 0; j < n - 1 - i; j++) {
                if(sortedNumbers[j] > sortedNumbers[j+1]) {
                    let temp = sortedNumbers[j];
                    sortedNumbers[j] = sortedNumbers[j+1];
                    sortedNumbers[j+1] = temp;
                }
            }
        }

        for(let i = 0; i < sortedNumbers.length; i++) {
            if(sortedNumbers[i] !== numbers[i]) {
                return false;
                break;
            }
        }

        return true;
    }
}

let solution = new Solution();
let ans = solution.areNumbersAscending("hello world 5 x 5");
console.log(ans)