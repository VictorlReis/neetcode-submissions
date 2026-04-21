class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          const finalArr = [];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === "_") continue;
    let tempArr = [strs[i]];
    let j = i + 1;
    while (j < strs.length) {
      if (strs[j] === "_") {
        j++;
        continue;
      }
      if (isAnagram(strs[i], strs[j])) {
        tempArr.push(strs[j]);
        strs[j] = "_";
      }

      j++;
    }
    finalArr.push(tempArr);
  }

  return finalArr;

    }
}

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const mapS = {};
  const mapT = {};

  for (let i = 0; i < s.length; i++) {
    mapS[s[i]] = 1 + (mapS[s[i]] || 0);
    mapT[t[i]] = 1 + (mapT[t[i]] || 0);
  }

  for (const key in mapS) {
    if (mapS[key] !== mapT[key]) return false;
  }
  return true;
}

