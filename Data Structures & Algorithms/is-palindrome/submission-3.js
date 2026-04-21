class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNumeric(str) {
            // Using regular expression to check for alphanumeric characters
            return /^[a-zA-Z0-9]+$/.test(str);
        }

        let i = 0;
        let j = s.length -  1;

        while(i < j) {
            if(!isAlphaNumeric(s[i])) {
                i++;
                continue;
            }

            if(!isAlphaNumeric(s[j])) {
                j--;
                continue;
            }

            if(s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }
        return true;
    }


}

