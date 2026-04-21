class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        for(let i = 0; i < prices.length; i++){
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[i] >= prices[j]) {
                    continue;
                }
                else if(prices[i] < prices[j]) {
                    profit = Math.max(prices[j] - prices[i], profit);
                }
            }
        }

        return profit;
    }
}
