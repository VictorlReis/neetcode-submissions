class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
// []
        let openClosed = {']' : '[', '}' : '{', ')' : '('};

        for(let i = 0; i < s.length; i++) {
            if(openClosed[s[i]]){
                if(stack.length > 0 && openClosed[s[i]] == stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(s[i]);
            }

        }

        return stack.length === 0;
    }
}
