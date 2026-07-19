/* FIND THE K-th FACTOR OF N. IF IT NOT EXISTS THEN RETURN -1 */

class Solution {
    kthFactor(n, k) {
        let count = 0;

        for(let i = 0; i <= n; i++) {

            if(n % i == 0) {
                count++;

                if(count === k) {
                    return i;
                }
            }
        }
        
        return -1;
    }
}

const solution = new Solution();
let kthFactor = solution.kthFactor;

console.log(kthFactor(4, 4));