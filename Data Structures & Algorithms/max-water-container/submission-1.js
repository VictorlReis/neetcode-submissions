class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let result = [0, 0];

        while(l < r) {
            let distanceBetween = r - l;
            let currentArea = Math.min(heights[l], heights[r]) * distanceBetween;
            console.log(currentArea, heights[l], heights[r]);
            
            if(currentArea > result[0]) {
                result[0] = currentArea;
            }

            if(heights[l] > heights[r]){
                r--;
            } 
            else {
                l++;
            }
        }
        return result[0];
        }
}
