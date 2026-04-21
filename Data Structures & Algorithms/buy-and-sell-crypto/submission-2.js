class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;
        let right = 1;

        while(right <= prices.length - 1) {
            if(prices[left] > prices[right]) {
                left = right;
                right++;
                continue;
            } else {
                console.log(left, right, right - left)
                profit = Math.max(prices[right] - prices[left], profit);
                right++;
                continue;
            }
        }

        return profit;
    }
}
