class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        for(let i = 0; i < nums.length; i++) {
            let prod = 1;
            for(let j = 0; j < nums.length; j++) {
                if(i === j) {
                    continue;
                }
                prod *= nums[j];
            }
            result.push(prod);
        }

        return result
    }
}
