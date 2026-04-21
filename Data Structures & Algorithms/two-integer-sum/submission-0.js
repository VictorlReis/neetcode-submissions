class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            let d = target - nums[i];
            if(map.has(d)){
                const dIndex = map.get(d);
                return [i, dIndex];
            }
            map.set(nums[i], i);
        }

        return [-1,-1];
    }
}
