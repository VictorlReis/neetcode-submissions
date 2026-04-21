class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        for(let i = 0; i < numbers.length; i++) {
            let l = i + 1;
            let r = numbers.length - 1;
            let tmp = target - numbers[i];

            while(l <= r) {
                let mid = Math.floor((l + r) / 2);
                if(numbers[mid] === tmp){
                    return [i + 1, mid + 1];
                } else if (numbers[mid] < tmp) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }

        return [];

    }
}
