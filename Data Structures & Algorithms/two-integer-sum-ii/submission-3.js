class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        // 1 + 2 = 3
        // numbers[i] + numbers[j] = target

        for(let i = 0; i < numbers.length; i++) {
            for(let j = 1; j < numbers.length; j++) {
                if(numbers[i] + numbers[j] === target) {
                    return [i + 1, j + 1];
                }
            }
        }

        return []
    }
}
