class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let i = 0;
        let j = 1;

        const result = [];

        while(i < nums.length) {
            if(j === nums.length){
                i++;
                j = 0;
                continue;
            }

            if(j === i) {
                j++;
                continue;
            };

            if((result[i] && typeof result[i] !== undefined) || result[i] === 0) {
                result[i] = result[i] * nums[j];
            } else {
                result[i] = nums[j];
            }
            j++;
        }
        return result;

    }
}
