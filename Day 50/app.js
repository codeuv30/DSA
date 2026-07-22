/* LEETCODE: 121. Best Time to Buy and Sell Stock */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mP = 0;
    let min = prices[0];

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) min = prices[i];
        if((prices[i] - min) > mP) mP = prices[i] - min;
    }

    return mP;
};

const ans = maxProfit([7,1,5,3,6,4]);
console.log(ans);