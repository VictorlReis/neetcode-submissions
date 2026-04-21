class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const mapS = {};
        const mapT = {};

        for(let i = 0; i < s.length; i++) {
            mapS[s[i]] = 1 + (mapS[s[i]] || 0)
            mapT[t[i]] = 1 + (mapT[t[i]] || 0)
        }

        for (const key in mapS) {
            if(mapS[key] !== mapT[key]) return false;
        }
        return true;
    }
}
