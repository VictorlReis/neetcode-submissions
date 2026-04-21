class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = strs[0];
        if(strs.length === 0) return "";
        if(strs[0] === "") {
            encodedString += "eS#"
        }

        for(let i = 1; i < strs.length; i++) {
            if(strs[i] === "") {
                encodedString += "eS#"
            }
            encodedString += "*1996*"+strs[i];
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "") return [];
        str = str.split("*1996*");
        for(let i = 0; i < str.length; i++) {
            if(str[i] === "eS#") {
                str[i] = "";
            }
        }
        return str;

    }
}


//neet$code$love$you