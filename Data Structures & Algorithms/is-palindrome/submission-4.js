class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase();
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
            if(s[i] !== s[j]) {
                console.log(s[i], s[j]);
                return false;
            }
            i++;
            j--;
        }

        return true;
    }
}

function isAlphaNumeric(str) {
  // Using regular expression to check for alphanumeric characters
  return /^[a-zA-Z0-9]+$/.test(str);
}