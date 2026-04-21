class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;

        let correctArr = 0;

        while(left <= right) {
            let mid = Math.floor((right + left) /2);
            if(matrix[mid][0] === target) return true;
            else if(matrix[mid][0] > target) {
                right = mid - 1;
            } else if(matrix[mid][0] < target) {
                correctArr = mid;
                left = mid + 1;
            }

        }

        right = matrix[correctArr].length - 1;
        left = 0;

        while(left <= right) {
            let mid = Math.floor((right + left) / 2);
            if(matrix[correctArr][mid] === target) return true;
            else if(matrix[correctArr][mid] < target) {
                left = mid +1;
            } else if(matrix[correctArr][mid] > target) {
                right = mid - 1;
            }
        }
        

        console.log(correctArr);
        return false;
    }
}
