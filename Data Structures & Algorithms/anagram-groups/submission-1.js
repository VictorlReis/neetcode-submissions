class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const sorted = strs.map(str => str.split("").sort().join(""));

        const map = {};

       for(let i = 0; i < strs.length; i++) {
            if(!map[sorted[i]]) {
                map[sorted[i]] = [strs[i]];
            } else {
                map[sorted[i]].push(strs[i]);
            }
       }

       return Object.values(map);
    }
}

